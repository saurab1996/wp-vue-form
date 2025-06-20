<template>
  <div>
    <ActionMenu ref="actionMenuRef"></ActionMenu>
    <DataTable :value="formData" size="small" lazy paginator :rows="rows" :first="first" columnResizeMode="fit"
      v-model:filters="filters.data" ref="datatableRef" dataKey="id" :totalRecords="totalRecords"
      :loading="loading || columnLoading" @page="updateTable" @sort="updateTable" @filter="updateTable"
      filterDisplay="menu" :rowHover="false" breakpoint="780px" stateStorage="local" stateKey="dt-state-people-session"
      :globalFilterFields="filters.globalField" v-model:selection="selectedCustomers" :selectAll="selectAll"
      @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect"
      :rowsPerPageOptions="[10, 25, 50]" :resizableColumns="true"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
      <template #header class="rounded-t-md">
        <div class="flex justify-between">
          <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter" size="small" />
          <IconField iconPosition="left" class="w-48 md:w-96" v-if="(filters.data?.global as DataTableFilterMetaData)?.value !== undefined">
            <InputIcon size="small">
              <i class="pi pi-search pt-0.5 text-black dark:text-white" />
            </InputIcon>
            <InputText v-model="(filters.data.global as DataTableFilterMetaData).value" placeholder="Keyword Search"
              class="pl-10 placeholder:text-black dark:placeholder:text-white" @input="globalFilter" size="small" />
          </IconField>
        </div>
      </template>
      <template #loading>
        <Loader color="rgb(var(--primary-400))"></Loader>
      </template>
      <template #empty>
        <p class="flex justify-center items-center gap-2 text-primary-400 " v-if="!loading && !columnLoading">
          No forms found.
          <RouterLink :to="{ name: 'form-create' }">
            <Button label="Add form" icon="pi pi-plus" size="small" />
          </RouterLink>
        </p>
      </template>
      <div v-for="(col, key) of columns" :key="key.toString()">
        <Column selectionMode="multiple" :class="col.class" v-if="key.toString() === 'multiple'" :style="col.style">
        </Column>
        <Column :field="key.toString()" :dataType="col.dataType" :header="col.header" :sortable="col.sortable"
          :filterField="key.toString()"
          :filterMatchMode="col.filter !== false && col?.filter?.mode ? col.filter.mode : ' '" :class="col.class" v-else
          :showFilterMenu="col.filter !== false" :style="col.style">
          <template #body="{ data, field }">
            <div v-if="key.toString() === 'action'">
              <Button type="button" icon="pi pi-ellipsis-v" @click="(event) => actionMenuRef.toggle(event, data)"
                aria-haspopup="true" aria-controls="action_menu" size="small" class="h-8 w-8" />
            </div>
            <div v-else-if="key.toString() === 'status'">
              <Tag :value="data[field] || '-'" :severity="data?.severity ? data.severity : null" />
            </div>
            <div v-else-if="key.toString() === 'shortcode'">
              <InputGroup class="h-8">
                <InputText :value="data[field]" readonly />
                <Button icon="pi pi-copy" size="small" @click="copyToClipboard(data[field] || '')" />
              </InputGroup>
            </div>
            <div v-else>
              {{ data[field] || '-' }}
            </div>
          </template>
          <template #filter="{ filterModel }">
            <TableFilter :columnData="col" :filterModel="filterModel"></TableFilter>
          </template>
        </Column>
      </div>
    </DataTable>
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  onMounted,
  reactive
} from 'vue';
import DataTable from 'primevue/datatable';
import type {
  DataTableSortEvent,
  DataTableSelectAllChangeEvent,
  DataTableFilterMetaData
} from "primevue/datatable";
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Loader from '@/components/Loader.vue';
import Button from 'primevue/button';
import ActionMenu from '@/views/Form/List/ActionMenu.vue';
import TableFilter from '@/views/Form/List/TableFilter.vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputGroup from 'primevue/inputgroup';
import Tag from 'primevue/tag';
import { get } from "@/axios/index";
import { FormColumnApiEndPoint, FormApiEndPoint } from '@/utils/const';
import { updateFilterParams, getColumnFilterData } from '@/utils/table';
import {
  useToastService,
  copyToClipboard
} from '@/utils/helpers';
import type {
  TableColumn,
  ColumnFilterResult
} from "@/utils/interfaces";

const { showErrorMessage, showInternalServerErrorMessage } = useToastService();


const loading = ref<boolean>(true);
const columnLoading = ref<boolean>(true);
const rows = ref<number>(10);
const first = ref<number>(0)
const totalRecords = ref(0);
let formData = reactive([]);
let selectedCustomers = reactive({});
const selectAll = ref(false);
const actionMenuRef = ref();
let columns = reactive<TableColumn[]>([]);
let filters = reactive<ColumnFilterResult>({
  globalField: [],
  data: {}
});
let TableParams = reactive<DataTableSortEvent>({
  first: first.value,
  rows: rows.value,
  sortField: "id",
  sortOrder: -1,
  filters: {},
  originalEvent: {} as Event,
  multiSortMeta: <never>[],
  filterMatchModes: ''
});


onMounted(() => {
  fetchFormColumn();
  fetchFormList();
});

const fetchFormColumn = () => {
  columnLoading.value = true;
  get(FormColumnApiEndPoint).then((response) => {
    if (response?.data?.data) {
      columns = response.data.data;
      filters = getColumnFilterData(columns);
    } else {
      showErrorMessage(response?.data?.message ? response.data.message : '');
    }
  }).catch((error) => {
    showInternalServerErrorMessage();
    console.error(error)
  }).finally(() => {
    columnLoading.value = false;
  })
}

const fetchFormList = () => {
  loading.value = true;
  const params = updateFilterParams(JSON.parse(JSON.stringify(TableParams)));
  get(FormApiEndPoint, params).then((response) => {
    if (response?.data?.status) {
      formData = response.data.data;
      totalRecords.value = response.data.total;
    } else {
      showErrorMessage(response?.data?.message ? response?.data?.message : '');
      formData = [];
      totalRecords.value = 0;
    }
  }).catch((error) => {
    formData = [];
    totalRecords.value = 0;
    showInternalServerErrorMessage()
    console.error(error)
  }).finally(() => {
    loading.value = false;
  })
}

const updateTable = (event: DataTableSortEvent) => {
  TableParams = event;
  fetchFormList();
};
const onSelectAllChange = (event: DataTableSelectAllChangeEvent) => {

};
const onRowSelect = () => {
};
const onRowUnselect = () => {
  selectAll.value = false;
};



const clearFilter = () => {
  filters = getColumnFilterData(columns)
  fetchFormList();
}

const globalFilter = () => {
  fetchFormList();
}

</script>