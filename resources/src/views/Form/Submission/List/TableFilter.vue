<template>
  <div>
    <Dropdown v-if="columnData.filter && columnData.filter.type === 'select'" v-model="filterModel.value"
      :options="columnData.filter.options ? columnData.filter.options : []"
      :placeholder="columnData.filter.placeholder ? columnData.filter.placeholder : 'Search'"
      :class="'p-column-filter ' + (columnData.filter.class ? columnData.filter.class : '')" optionLabel="label"
      optionValue="value">
    </Dropdown>
    <Calendar v-else-if="columnData.filter && columnData.filter.type === 'date'" v-model="filterModel.value"
      dateFormat="mm/dd/yy" :class="'p-column-filter ' + (columnData.filter.class ? columnData.filter.class : '')"
      :placeholder="columnData.filter.placeholder ? columnData.filter.placeholder : 'mm/dd/yyyy'" mask="99/99/9999">
    </Calendar>
    <InputText v-else-if="columnData.filter && columnData.filter.type === 'input'" type="text"
      v-model="filterModel.value" :class="'p-column-filter ' + (columnData.filter.class ? columnData.filter.class : '')"
      :placeholder="columnData.filter.placeholder ? columnData.filter.placeholder : 'Search'">
    </InputText>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import type { TableColumn } from "@/utils/interfaces";
import type { ColumnFilterModelType } from 'primevue/column';
defineProps<{
  columnData: TableColumn;
  filterModel: ColumnFilterModelType;
}>()

</script>
