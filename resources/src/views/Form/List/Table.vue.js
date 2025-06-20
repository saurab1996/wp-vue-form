/* __placeholder__ */
import { ref, onMounted, reactive } from 'vue';
import DataTable from 'primevue/datatable';
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
import { useToastService, copyToClipboard } from '@/utils/helpers';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { showErrorMessage, showInternalServerErrorMessage } = useToastService();
const loading = ref(true);
const columnLoading = ref(true);
const rows = ref(10);
const first = ref(0);
const totalRecords = ref(0);
let formData = reactive([]);
let selectedCustomers = reactive({});
const selectAll = ref(false);
const actionMenuRef = ref();
let columns = reactive([]);
let filters = reactive({
    globalField: [],
    data: {}
});
let TableParams = reactive({
    first: first.value,
    rows: rows.value,
    sortField: "id",
    sortOrder: -1,
    filters: {},
    originalEvent: {},
    multiSortMeta: [],
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
        }
        else {
            showErrorMessage(response?.data?.message ? response.data.message : '');
        }
    }).catch((error) => {
        showInternalServerErrorMessage();
        console.error(error);
    }).finally(() => {
        columnLoading.value = false;
    });
};
const fetchFormList = () => {
    loading.value = true;
    const params = updateFilterParams(JSON.parse(JSON.stringify(TableParams)));
    get(FormApiEndPoint, params).then((response) => {
        if (response?.data?.status) {
            formData = response.data.data;
            totalRecords.value = response.data.total;
        }
        else {
            showErrorMessage(response?.data?.message ? response?.data?.message : '');
            formData = [];
            totalRecords.value = 0;
        }
    }).catch((error) => {
        formData = [];
        totalRecords.value = 0;
        showInternalServerErrorMessage();
        console.error(error);
    }).finally(() => {
        loading.value = false;
    });
};
const updateTable = (event) => {
    TableParams = event;
    fetchFormList();
};
const onSelectAllChange = (event) => {
};
const onRowSelect = () => {
};
const onRowUnselect = () => {
    selectAll.value = false;
};
const clearFilter = () => {
    filters = getColumnFilterData(columns);
    fetchFormList();
};
const globalFilter = () => {
    fetchFormList();
};
let __VLS_modelEmitsType;
const __VLS_componentsOption = {};
let __VLS_name;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_components.ActionMenu;
    __VLS_components.ActionMenu;
    __VLS_components.ActionMenu;
    __VLS_components.ActionMenu;
    // @ts-ignore
    [ActionMenu, ActionMenu,];
    __VLS_components.DataTable;
    __VLS_components.DataTable;
    __VLS_components.DataTable;
    __VLS_components.DataTable;
    // @ts-ignore
    [DataTable, DataTable,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.Button;
    __VLS_components.Button;
    __VLS_components.Button;
    __VLS_components.Button;
    __VLS_components.Button;
    __VLS_components.Button;
    __VLS_components.Button;
    __VLS_components.Button;
    // @ts-ignore
    [Button, Button, Button, Button,];
    __VLS_components.IconField;
    __VLS_components.IconField;
    __VLS_components.IconField;
    __VLS_components.IconField;
    // @ts-ignore
    [IconField, IconField,];
    __VLS_components.InputIcon;
    __VLS_components.InputIcon;
    __VLS_components.InputIcon;
    __VLS_components.InputIcon;
    // @ts-ignore
    [InputIcon, InputIcon,];
    __VLS_intrinsicElements.i;
    __VLS_components.InputText;
    __VLS_components.InputText;
    __VLS_components.InputText;
    __VLS_components.InputText;
    // @ts-ignore
    [InputText, InputText,];
    __VLS_components.Loader;
    __VLS_components.Loader;
    __VLS_components.Loader;
    __VLS_components.Loader;
    // @ts-ignore
    [Loader, Loader,];
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    __VLS_components.Column;
    __VLS_components.Column;
    __VLS_components.Column;
    __VLS_components.Column;
    __VLS_components.Column;
    __VLS_components.Column;
    __VLS_components.Column;
    __VLS_components.Column;
    // @ts-ignore
    [Column, Column, Column, Column,];
    __VLS_components.Tag;
    __VLS_components.Tag;
    // @ts-ignore
    [Tag,];
    __VLS_components.InputGroup;
    __VLS_components.InputGroup;
    __VLS_components.InputGroup;
    __VLS_components.InputGroup;
    // @ts-ignore
    [InputGroup, InputGroup,];
    __VLS_components.TableFilter;
    __VLS_components.TableFilter;
    __VLS_components.TableFilter;
    __VLS_components.TableFilter;
    // @ts-ignore
    [TableFilter, TableFilter,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = {}.ActionMenu;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, ref: ("actionMenuRef"), }));
            ({}.ActionMenu);
            ({}.ActionMenu);
            const __VLS_7 = __VLS_6({ ...{}, ref: ("actionMenuRef"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, ref: ("actionMenuRef"), }));
            // @ts-ignore
            (__VLS_ctx.actionMenuRef);
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = {}.DataTable;
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onPage': {}, 'onSort': {}, 'onFilter': {}, 'onSelectAllChange': {}, 'onRowSelect': {}, 'onRowUnselect': {}, }, value: ((__VLS_ctx.formData)), size: ("small"), lazy: (true), paginator: (true), rows: ((__VLS_ctx.rows)), first: ((__VLS_ctx.first)), columnResizeMode: ("fit"), filters: ((__VLS_ctx.filters.data)), ref: ("datatableRef"), dataKey: ("id"), totalRecords: ((__VLS_ctx.totalRecords)), loading: ((__VLS_ctx.loading || __VLS_ctx.columnLoading)), filterDisplay: ("menu"), rowHover: ((false)), breakpoint: ("780px"), stateStorage: ("local"), stateKey: ("dt-state-people-session"), globalFilterFields: ((__VLS_ctx.filters.globalField)), selection: ((__VLS_ctx.selectedCustomers)), selectAll: ((__VLS_ctx.selectAll)), rowsPerPageOptions: (([10, 25, 50])), resizableColumns: ((true)), paginatorTemplate: ("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"), currentPageReportTemplate: ("Showing {first} to {last} of {totalRecords}"), }));
            ({}.DataTable);
            ({}.DataTable);
            const __VLS_12 = __VLS_11({ ...{ 'onPage': {}, 'onSort': {}, 'onFilter': {}, 'onSelectAllChange': {}, 'onRowSelect': {}, 'onRowUnselect': {}, }, value: ((__VLS_ctx.formData)), size: ("small"), lazy: (true), paginator: (true), rows: ((__VLS_ctx.rows)), first: ((__VLS_ctx.first)), columnResizeMode: ("fit"), filters: ((__VLS_ctx.filters.data)), ref: ("datatableRef"), dataKey: ("id"), totalRecords: ((__VLS_ctx.totalRecords)), loading: ((__VLS_ctx.loading || __VLS_ctx.columnLoading)), filterDisplay: ("menu"), rowHover: ((false)), breakpoint: ("780px"), stateStorage: ("local"), stateKey: ("dt-state-people-session"), globalFilterFields: ((__VLS_ctx.filters.globalField)), selection: ((__VLS_ctx.selectedCustomers)), selectAll: ((__VLS_ctx.selectAll)), rowsPerPageOptions: (([10, 25, 50])), resizableColumns: ((true)), paginatorTemplate: ("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"), currentPageReportTemplate: ("Showing {first} to {last} of {totalRecords}"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{ 'onPage': {}, 'onSort': {}, 'onFilter': {}, 'onSelectAllChange': {}, 'onRowSelect': {}, 'onRowUnselect': {}, }, value: ((__VLS_ctx.formData)), size: ("small"), lazy: (true), paginator: (true), rows: ((__VLS_ctx.rows)), first: ((__VLS_ctx.first)), columnResizeMode: ("fit"), filters: ((__VLS_ctx.filters.data)), ref: ("datatableRef"), dataKey: ("id"), totalRecords: ((__VLS_ctx.totalRecords)), loading: ((__VLS_ctx.loading || __VLS_ctx.columnLoading)), filterDisplay: ("menu"), rowHover: ((false)), breakpoint: ("780px"), stateStorage: ("local"), stateKey: ("dt-state-people-session"), globalFilterFields: ((__VLS_ctx.filters.globalField)), selection: ((__VLS_ctx.selectedCustomers)), selectAll: ((__VLS_ctx.selectAll)), rowsPerPageOptions: (([10, 25, 50])), resizableColumns: ((true)), paginatorTemplate: ("FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"), currentPageReportTemplate: ("Showing {first} to {last} of {totalRecords}"), }));
            // @ts-ignore
            (__VLS_ctx.datatableRef);
            let __VLS_15 = { 'page': __VLS_pickEvent(__VLS_14['page'], {}.onPage) };
            __VLS_15 = { page: (__VLS_ctx.updateTable) };
            let __VLS_16 = { 'sort': __VLS_pickEvent(__VLS_14['sort'], {}.onSort) };
            __VLS_16 = { sort: (__VLS_ctx.updateTable) };
            let __VLS_17 = { 'filter': __VLS_pickEvent(__VLS_14['filter'], {}.onFilter) };
            __VLS_17 = { filter: (__VLS_ctx.updateTable) };
            let __VLS_18 = { 'select-all-change': __VLS_pickEvent(__VLS_14['select-all-change'], {}.onSelectAllChange) };
            __VLS_18 = { "select-all-change": (__VLS_ctx.onSelectAllChange) };
            let __VLS_19 = { 'row-select': __VLS_pickEvent(__VLS_14['row-select'], {}.onRowSelect) };
            __VLS_19 = { "row-select": (__VLS_ctx.onRowSelect) };
            let __VLS_20 = { 'row-unselect': __VLS_pickEvent(__VLS_14['row-unselect'], {}.onRowUnselect) };
            __VLS_20 = { "row-unselect": (__VLS_ctx.onRowUnselect) };
            {
                const __VLS_21 = __VLS_intrinsicElements["template"];
                const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
                const __VLS_23 = __VLS_22({ ...{}, class: ("rounded-t-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
                ({}({ ...{}, class: ("rounded-t-md"), }));
                {
                    (__VLS_13.slots).header;
                    {
                        const __VLS_25 = __VLS_intrinsicElements["div"];
                        const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                        const __VLS_27 = __VLS_26({ ...{}, class: ("flex justify-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                        ({}({ ...{}, class: ("flex justify-between"), }));
                        {
                            const __VLS_30 = {}.Button;
                            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {}, }, type: ("button"), icon: ("pi pi-filter-slash"), label: ("Clear"), outlined: (true), size: ("small"), }));
                            ({}.Button);
                            const __VLS_32 = __VLS_31({ ...{ 'onClick': {}, }, type: ("button"), icon: ("pi pi-filter-slash"), label: ("Clear"), outlined: (true), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{ 'onClick': {}, }, type: ("button"), icon: ("pi pi-filter-slash"), label: ("Clear"), outlined: (true), size: ("small"), }));
                            let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], {}.onClick) };
                            __VLS_35 = { click: (__VLS_ctx.clearFilter) };
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                            let __VLS_34;
                        }
                        if (__VLS_ctx.filters.data?.global?.value !== undefined) {
                            {
                                const __VLS_36 = {}.IconField;
                                const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{}, iconPosition: ("left"), class: ("w-48 md:w-96"), }));
                                ({}.IconField);
                                ({}.IconField);
                                const __VLS_38 = __VLS_37({ ...{}, iconPosition: ("left"), class: ("w-48 md:w-96"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                                ({}({ ...{}, iconPosition: ("left"), class: ("w-48 md:w-96"), }));
                                {
                                    const __VLS_41 = {}.InputIcon;
                                    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, size: ("small"), }));
                                    ({}.InputIcon);
                                    ({}.InputIcon);
                                    const __VLS_43 = __VLS_42({ ...{}, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                                    ({}({ ...{}, size: ("small"), }));
                                    {
                                        const __VLS_46 = __VLS_intrinsicElements["i"];
                                        const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                                        const __VLS_48 = __VLS_47({ ...{}, class: ("pi pi-search pt-0.5 text-black dark:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                                        ({}({ ...{}, class: ("pi pi-search pt-0.5 text-black dark:text-white"), }));
                                        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                                    }
                                    (__VLS_44.slots).default;
                                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                                }
                                {
                                    const __VLS_51 = {}.InputText;
                                    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onInput': {}, }, modelValue: ((__VLS_ctx.filters.data.global.value)), placeholder: ("Keyword Search"), class: ("pl-10 placeholder:text-black dark:placeholder:text-white"), size: ("small"), }));
                                    ({}.InputText);
                                    const __VLS_53 = __VLS_52({ ...{ 'onInput': {}, }, modelValue: ((__VLS_ctx.filters.data.global.value)), placeholder: ("Keyword Search"), class: ("pl-10 placeholder:text-black dark:placeholder:text-white"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                                    ({}({ ...{ 'onInput': {}, }, modelValue: ((__VLS_ctx.filters.data.global.value)), placeholder: ("Keyword Search"), class: ("pl-10 placeholder:text-black dark:placeholder:text-white"), size: ("small"), }));
                                    let __VLS_56 = { 'input': __VLS_pickEvent(__VLS_55['input'], {}.onInput) };
                                    __VLS_56 = { input: (__VLS_ctx.globalFilter) };
                                    const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                                    let __VLS_55;
                                }
                                (__VLS_39.slots).default;
                                const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
                            }
                            // @ts-ignore
                            [actionMenuRef, formData, rows, first, filters, totalRecords, loading, columnLoading, filters, selectedCustomers, selectAll, formData, rows, first, filters, totalRecords, loading, columnLoading, filters, selectedCustomers, selectAll, formData, rows, first, filters, totalRecords, loading, columnLoading, filters, selectedCustomers, selectAll, datatableRef, updateTable, updateTable, updateTable, onSelectAllChange, onRowSelect, onRowUnselect, clearFilter, filters, filters, filters, filters, globalFilter,];
                        }
                        (__VLS_28.slots).default;
                        const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                    }
                }
            }
            {
                const __VLS_57 = __VLS_intrinsicElements["template"];
                const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
                const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
                ({}({ ...{}, }));
                {
                    (__VLS_13.slots).loading;
                    {
                        const __VLS_61 = {}.Loader;
                        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{}, color: ("rgb(var(--primary-400))"), }));
                        ({}.Loader);
                        ({}.Loader);
                        const __VLS_63 = __VLS_62({ ...{}, color: ("rgb(var(--primary-400))"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
                        ({}({ ...{}, color: ("rgb(var(--primary-400))"), }));
                        const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
                    }
                }
            }
            {
                const __VLS_66 = __VLS_intrinsicElements["template"];
                const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
                const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
                ({}({ ...{}, }));
                {
                    (__VLS_13.slots).empty;
                    if (!__VLS_ctx.loading && !__VLS_ctx.columnLoading) {
                        {
                            const __VLS_70 = __VLS_intrinsicElements["p"];
                            const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
                            const __VLS_72 = __VLS_71({ ...{}, class: ("flex justify-center items-center gap-2 text-primary-400 "), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
                            ({}({ ...{}, class: ("flex justify-center items-center gap-2 text-primary-400 "), }));
                            {
                                const __VLS_75 = {}.RouterLink;
                                const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{}, to: (({ name: 'form-create' })), }));
                                ({}.RouterLink);
                                ({}.RouterLink);
                                const __VLS_77 = __VLS_76({ ...{}, to: (({ name: 'form-create' })), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                                ({}({ ...{}, to: (({ name: 'form-create' })), }));
                                {
                                    const __VLS_80 = {}.Button;
                                    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{}, label: ("Add form"), icon: ("pi pi-plus"), size: ("small"), }));
                                    ({}.Button);
                                    const __VLS_82 = __VLS_81({ ...{}, label: ("Add form"), icon: ("pi pi-plus"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                                    ({}({ ...{}, label: ("Add form"), icon: ("pi pi-plus"), size: ("small"), }));
                                    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
                                }
                                (__VLS_78.slots).default;
                                const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
                            }
                            (__VLS_73.slots).default;
                            const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
                        }
                        // @ts-ignore
                        [loading, columnLoading,];
                    }
                }
            }
            for (const [col, key] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
                {
                    const __VLS_85 = __VLS_intrinsicElements["div"];
                    const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                    const __VLS_87 = __VLS_86({ ...{}, key: ((key.toString())), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                    ({}({ ...{}, key: ((key.toString())), }));
                    if (key.toString() === 'multiple') {
                        {
                            const __VLS_90 = {}.Column;
                            const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{}, selectionMode: ("multiple"), class: ((col.class)), style: ((col.style)), }));
                            ({}.Column);
                            ({}.Column);
                            const __VLS_92 = __VLS_91({ ...{}, selectionMode: ("multiple"), class: ((col.class)), style: ((col.style)), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                            ({}({ ...{}, selectionMode: ("multiple"), class: ((col.class)), style: ((col.style)), }));
                            const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
                        }
                        // @ts-ignore
                        [columns,];
                    }
                    else {
                        {
                            const __VLS_95 = {}.Column;
                            const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, field: ((key.toString())), dataType: ((col.dataType)), header: ((col.header)), sortable: ((col.sortable)), filterField: ((key.toString())), filterMatchMode: ((col.filter !== false && col?.filter?.mode ? col.filter.mode : ' ')), class: ((col.class)), showFilterMenu: ((col.filter !== false)), style: ((col.style)), }));
                            ({}.Column);
                            ({}.Column);
                            const __VLS_97 = __VLS_96({ ...{}, field: ((key.toString())), dataType: ((col.dataType)), header: ((col.header)), sortable: ((col.sortable)), filterField: ((key.toString())), filterMatchMode: ((col.filter !== false && col?.filter?.mode ? col.filter.mode : ' ')), class: ((col.class)), showFilterMenu: ((col.filter !== false)), style: ((col.style)), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
                            ({}({ ...{}, field: ((key.toString())), dataType: ((col.dataType)), header: ((col.header)), sortable: ((col.sortable)), filterField: ((key.toString())), filterMatchMode: ((col.filter !== false && col?.filter?.mode ? col.filter.mode : ' ')), class: ((col.class)), showFilterMenu: ((col.filter !== false)), style: ((col.style)), }));
                            {
                                const __VLS_100 = __VLS_intrinsicElements["template"];
                                const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
                                const __VLS_102 = __VLS_101({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_101));
                                ({}({ ...{}, }));
                                {
                                    const [{ data, field }] = __VLS_getSlotParams((__VLS_98.slots).body);
                                    if (key.toString() === 'action') {
                                        {
                                            const __VLS_104 = __VLS_intrinsicElements["div"];
                                            const __VLS_105 = __VLS_elementAsFunctionalComponent(__VLS_104);
                                            const __VLS_106 = __VLS_105({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_105));
                                            ({}({ ...{}, }));
                                            {
                                                const __VLS_109 = {}.Button;
                                                const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ ...{ 'onClick': {}, }, type: ("button"), icon: ("pi pi-ellipsis-v"), "aria-haspopup": ("true"), "aria-controls": ("action_menu"), size: ("small"), class: ("h-8 w-8"), }));
                                                ({}.Button);
                                                const __VLS_111 = __VLS_110({ ...{ 'onClick': {}, }, type: ("button"), icon: ("pi pi-ellipsis-v"), "aria-haspopup": ("true"), "aria-controls": ("action_menu"), size: ("small"), class: ("h-8 w-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
                                                ({}({ ...{ 'onClick': {}, }, type: ("button"), icon: ("pi pi-ellipsis-v"), "aria-haspopup": ("true"), "aria-controls": ("action_menu"), size: ("small"), class: ("h-8 w-8"), }));
                                                let __VLS_114 = { 'click': __VLS_pickEvent(__VLS_113['click'], {}.onClick) };
                                                __VLS_114 = { click: ((event) => __VLS_ctx.actionMenuRef.toggle(event, data)) };
                                                const __VLS_112 = __VLS_pickFunctionalComponentCtx(__VLS_109, __VLS_111);
                                                let __VLS_113;
                                            }
                                            (__VLS_107.slots).default;
                                            const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
                                        }
                                        // @ts-ignore
                                        [actionMenuRef,];
                                    }
                                    else if (key.toString() === 'status') {
                                        {
                                            const __VLS_115 = __VLS_intrinsicElements["div"];
                                            const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
                                            const __VLS_117 = __VLS_116({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                                            ({}({ ...{}, }));
                                            {
                                                const __VLS_120 = {}.Tag;
                                                const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ ...{}, value: ((data[field] || '-')), severity: ((data?.severity ? data.severity : null)), }));
                                                ({}.Tag);
                                                const __VLS_122 = __VLS_121({ ...{}, value: ((data[field] || '-')), severity: ((data?.severity ? data.severity : null)), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                                                ({}({ ...{}, value: ((data[field] || '-')), severity: ((data?.severity ? data.severity : null)), }));
                                                const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
                                            }
                                            (__VLS_118.slots).default;
                                            const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                                        }
                                    }
                                    else if (key.toString() === 'shortcode') {
                                        {
                                            const __VLS_125 = __VLS_intrinsicElements["div"];
                                            const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                                            const __VLS_127 = __VLS_126({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                                            ({}({ ...{}, }));
                                            {
                                                const __VLS_130 = {}.InputGroup;
                                                const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{}, class: ("h-8"), }));
                                                ({}.InputGroup);
                                                ({}.InputGroup);
                                                const __VLS_132 = __VLS_131({ ...{}, class: ("h-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                                                ({}({ ...{}, class: ("h-8"), }));
                                                {
                                                    const __VLS_135 = {}.InputText;
                                                    const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({ ...{}, value: ((data[field])), readonly: (true), }));
                                                    ({}.InputText);
                                                    const __VLS_137 = __VLS_136({ ...{}, value: ((data[field])), readonly: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                                                    ({}({ ...{}, value: ((data[field])), readonly: (true), }));
                                                    const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
                                                }
                                                {
                                                    const __VLS_140 = {}.Button;
                                                    const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ ...{ 'onClick': {}, }, icon: ("pi pi-copy"), size: ("small"), }));
                                                    ({}.Button);
                                                    const __VLS_142 = __VLS_141({ ...{ 'onClick': {}, }, icon: ("pi pi-copy"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
                                                    ({}({ ...{ 'onClick': {}, }, icon: ("pi pi-copy"), size: ("small"), }));
                                                    let __VLS_145 = { 'click': __VLS_pickEvent(__VLS_144['click'], {}.onClick) };
                                                    __VLS_145 = { click: $event => {
                                                            if (!(!((key.toString() === 'multiple'))))
                                                                return;
                                                            if (!(!((key.toString() === 'action'))))
                                                                return;
                                                            if (!(!((key.toString() === 'status'))))
                                                                return;
                                                            if (!((key.toString() === 'shortcode')))
                                                                return;
                                                            __VLS_ctx.copyToClipboard(data[field] || '');
                                                            // @ts-ignore
                                                            [copyToClipboard,];
                                                        }
                                                    };
                                                    const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
                                                    let __VLS_144;
                                                }
                                                (__VLS_133.slots).default;
                                                const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                                            }
                                            (__VLS_128.slots).default;
                                            const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
                                        }
                                    }
                                    else {
                                        {
                                            const __VLS_146 = __VLS_intrinsicElements["div"];
                                            const __VLS_147 = __VLS_elementAsFunctionalComponent(__VLS_146);
                                            const __VLS_148 = __VLS_147({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_147));
                                            ({}({ ...{}, }));
                                            (data[field] || '-');
                                            (__VLS_149.slots).default;
                                            const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
                                        }
                                    }
                                }
                            }
                            {
                                const __VLS_151 = __VLS_intrinsicElements["template"];
                                const __VLS_152 = __VLS_elementAsFunctionalComponent(__VLS_151);
                                const __VLS_153 = __VLS_152({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_152));
                                ({}({ ...{}, }));
                                {
                                    const [{ filterModel }] = __VLS_getSlotParams((__VLS_98.slots).filter);
                                    {
                                        const __VLS_155 = {}.TableFilter;
                                        const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({ ...{}, columnData: ((col)), filterModel: ((filterModel)), }));
                                        ({}.TableFilter);
                                        ({}.TableFilter);
                                        const __VLS_157 = __VLS_156({ ...{}, columnData: ((col)), filterModel: ((filterModel)), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                                        ({}({ ...{}, columnData: ((col)), filterModel: ((filterModel)), }));
                                        const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
                                    }
                                }
                            }
                            const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
                        }
                    }
                    (__VLS_88.slots).default;
                    const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
                }
            }
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            let __VLS_14;
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            DataTable: DataTable,
            Column: Column,
            InputText: InputText,
            Loader: Loader,
            Button: Button,
            ActionMenu: ActionMenu,
            TableFilter: TableFilter,
            IconField: IconField,
            InputIcon: InputIcon,
            InputGroup: InputGroup,
            Tag: Tag,
            copyToClipboard: copyToClipboard,
            loading: loading,
            columnLoading: columnLoading,
            rows: rows,
            first: first,
            totalRecords: totalRecords,
            formData: formData,
            selectedCustomers: selectedCustomers,
            selectAll: selectAll,
            actionMenuRef: actionMenuRef,
            columns: columns,
            filters: filters,
            updateTable: updateTable,
            onSelectAllChange: onSelectAllChange,
            onRowSelect: onRowSelect,
            onRowUnselect: onRowUnselect,
            clearFilter: clearFilter,
            globalFilter: globalFilter,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
