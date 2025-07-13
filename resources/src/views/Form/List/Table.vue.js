/// <reference types="../../../../node_modules/.vue-global-types/vue_3.4_0_0_0.d.ts" />
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {[typeof ActionMenu, typeof ActionMenu, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ActionMenu, new ActionMenu({
    ref: "actionMenuRef",
}));
const __VLS_1 = __VLS_0({
    ref: "actionMenuRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {typeof __VLS_ctx.actionMenuRef} */ ;
var __VLS_3 = {};
var __VLS_2;
const __VLS_5 = {}.DataTable;
/** @type {[typeof __VLS_components.DataTable, typeof __VLS_components.DataTable, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ 'onPage': {} },
    ...{ 'onSort': {} },
    ...{ 'onFilter': {} },
    ...{ 'onSelectAllChange': {} },
    ...{ 'onRowSelect': {} },
    ...{ 'onRowUnselect': {} },
    value: (__VLS_ctx.formData),
    size: "small",
    lazy: true,
    paginator: true,
    rows: (__VLS_ctx.rows),
    first: (__VLS_ctx.first),
    columnResizeMode: "fit",
    filters: (__VLS_ctx.filters.data),
    ref: "datatableRef",
    dataKey: "id",
    totalRecords: (__VLS_ctx.totalRecords),
    loading: (__VLS_ctx.loading || __VLS_ctx.columnLoading),
    filterDisplay: "menu",
    rowHover: (false),
    breakpoint: "780px",
    stateStorage: "local",
    stateKey: "dt-state-people-session",
    globalFilterFields: (__VLS_ctx.filters.globalField),
    selection: (__VLS_ctx.selectedCustomers),
    selectAll: (__VLS_ctx.selectAll),
    rowsPerPageOptions: ([10, 25, 50]),
    resizableColumns: (true),
    paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport",
    currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
}));
const __VLS_7 = __VLS_6({
    ...{ 'onPage': {} },
    ...{ 'onSort': {} },
    ...{ 'onFilter': {} },
    ...{ 'onSelectAllChange': {} },
    ...{ 'onRowSelect': {} },
    ...{ 'onRowUnselect': {} },
    value: (__VLS_ctx.formData),
    size: "small",
    lazy: true,
    paginator: true,
    rows: (__VLS_ctx.rows),
    first: (__VLS_ctx.first),
    columnResizeMode: "fit",
    filters: (__VLS_ctx.filters.data),
    ref: "datatableRef",
    dataKey: "id",
    totalRecords: (__VLS_ctx.totalRecords),
    loading: (__VLS_ctx.loading || __VLS_ctx.columnLoading),
    filterDisplay: "menu",
    rowHover: (false),
    breakpoint: "780px",
    stateStorage: "local",
    stateKey: "dt-state-people-session",
    globalFilterFields: (__VLS_ctx.filters.globalField),
    selection: (__VLS_ctx.selectedCustomers),
    selectAll: (__VLS_ctx.selectAll),
    rowsPerPageOptions: ([10, 25, 50]),
    resizableColumns: (true),
    paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport",
    currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_9;
let __VLS_10;
let __VLS_11;
const __VLS_12 = {
    onPage: (__VLS_ctx.updateTable)
};
const __VLS_13 = {
    onSort: (__VLS_ctx.updateTable)
};
const __VLS_14 = {
    onFilter: (__VLS_ctx.updateTable)
};
const __VLS_15 = {
    onSelectAllChange: (__VLS_ctx.onSelectAllChange)
};
const __VLS_16 = {
    onRowSelect: (__VLS_ctx.onRowSelect)
};
const __VLS_17 = {
    onRowUnselect: (__VLS_ctx.onRowUnselect)
};
/** @type {typeof __VLS_ctx.datatableRef} */ ;
var __VLS_18 = {};
__VLS_8.slots.default;
{
    const { header: __VLS_thisSlot } = __VLS_8.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex justify-between" },
    });
    const __VLS_20 = {}.Button;
    /** @type {[typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        ...{ 'onClick': {} },
        type: "button",
        icon: "pi pi-filter-slash",
        label: "Clear",
        outlined: true,
        size: "small",
    }));
    const __VLS_22 = __VLS_21({
        ...{ 'onClick': {} },
        type: "button",
        icon: "pi pi-filter-slash",
        label: "Clear",
        outlined: true,
        size: "small",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_24;
    let __VLS_25;
    let __VLS_26;
    const __VLS_27 = {
        onClick: (__VLS_ctx.clearFilter)
    };
    var __VLS_23;
    if (__VLS_ctx.filters.data?.global?.value !== undefined) {
        const __VLS_28 = {}.IconField;
        /** @type {[typeof __VLS_components.IconField, typeof __VLS_components.IconField, ]} */ ;
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
            iconPosition: "left",
            ...{ class: "w-48 md:w-96" },
        }));
        const __VLS_30 = __VLS_29({
            iconPosition: "left",
            ...{ class: "w-48 md:w-96" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        __VLS_31.slots.default;
        const __VLS_32 = {}.InputIcon;
        /** @type {[typeof __VLS_components.InputIcon, typeof __VLS_components.InputIcon, ]} */ ;
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
            size: "small",
        }));
        const __VLS_34 = __VLS_33({
            size: "small",
        }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        __VLS_35.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.i)({
            ...{ class: "pi pi-search pt-0.5 text-black dark:text-white" },
        });
        var __VLS_35;
        const __VLS_36 = {}.InputText;
        /** @type {[typeof __VLS_components.InputText, ]} */ ;
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
            ...{ 'onInput': {} },
            modelValue: (__VLS_ctx.filters.data.global.value),
            placeholder: "Keyword Search",
            ...{ class: "pl-10 placeholder:text-black dark:placeholder:text-white" },
            size: "small",
        }));
        const __VLS_38 = __VLS_37({
            ...{ 'onInput': {} },
            modelValue: (__VLS_ctx.filters.data.global.value),
            placeholder: "Keyword Search",
            ...{ class: "pl-10 placeholder:text-black dark:placeholder:text-white" },
            size: "small",
        }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        let __VLS_40;
        let __VLS_41;
        let __VLS_42;
        const __VLS_43 = {
            onInput: (__VLS_ctx.globalFilter)
        };
        var __VLS_39;
        var __VLS_31;
    }
}
{
    const { loading: __VLS_thisSlot } = __VLS_8.slots;
    /** @type {[typeof Loader, typeof Loader, ]} */ ;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(Loader, new Loader({
        color: "rgb(var(--primary-400))",
    }));
    const __VLS_45 = __VLS_44({
        color: "rgb(var(--primary-400))",
    }, ...__VLS_functionalComponentArgsRest(__VLS_44));
}
{
    const { empty: __VLS_thisSlot } = __VLS_8.slots;
    if (!__VLS_ctx.loading && !__VLS_ctx.columnLoading) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "flex justify-center items-center gap-2 text-primary-400 " },
        });
        const __VLS_47 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
            to: ({ name: 'form-create' }),
        }));
        const __VLS_49 = __VLS_48({
            to: ({ name: 'form-create' }),
        }, ...__VLS_functionalComponentArgsRest(__VLS_48));
        __VLS_50.slots.default;
        const __VLS_51 = {}.Button;
        /** @type {[typeof __VLS_components.Button, ]} */ ;
        // @ts-ignore
        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
            label: "Add form",
            icon: "pi pi-plus",
            size: "small",
        }));
        const __VLS_53 = __VLS_52({
            label: "Add form",
            icon: "pi pi-plus",
            size: "small",
        }, ...__VLS_functionalComponentArgsRest(__VLS_52));
        var __VLS_50;
    }
}
for (const [col, key] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (key.toString()),
    });
    if (key.toString() === 'multiple') {
        const __VLS_55 = {}.Column;
        /** @type {[typeof __VLS_components.Column, typeof __VLS_components.Column, ]} */ ;
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
            selectionMode: "multiple",
            ...{ class: (col.class) },
            ...{ style: (col.style) },
        }));
        const __VLS_57 = __VLS_56({
            selectionMode: "multiple",
            ...{ class: (col.class) },
            ...{ style: (col.style) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    }
    else {
        const __VLS_59 = {}.Column;
        /** @type {[typeof __VLS_components.Column, typeof __VLS_components.Column, ]} */ ;
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
            field: (key.toString()),
            dataType: (col.dataType),
            header: (col.header),
            sortable: (col.sortable),
            filterField: (key.toString()),
            filterMatchMode: (col.filter !== false && col?.filter?.mode ? col.filter.mode : ' '),
            ...{ class: (col.class) },
            showFilterMenu: (col.filter !== false),
            ...{ style: (col.style) },
        }));
        const __VLS_61 = __VLS_60({
            field: (key.toString()),
            dataType: (col.dataType),
            header: (col.header),
            sortable: (col.sortable),
            filterField: (key.toString()),
            filterMatchMode: (col.filter !== false && col?.filter?.mode ? col.filter.mode : ' '),
            ...{ class: (col.class) },
            showFilterMenu: (col.filter !== false),
            ...{ style: (col.style) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_60));
        __VLS_62.slots.default;
        {
            const { body: __VLS_thisSlot } = __VLS_62.slots;
            const [{ data, field }] = __VLS_getSlotParams(__VLS_thisSlot);
            if (key.toString() === 'action') {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                const __VLS_63 = {}.Button;
                /** @type {[typeof __VLS_components.Button, ]} */ ;
                // @ts-ignore
                const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
                    ...{ 'onClick': {} },
                    type: "button",
                    icon: "pi pi-ellipsis-v",
                    'aria-haspopup': "true",
                    'aria-controls': "action_menu",
                    size: "small",
                    ...{ class: "h-8 w-8" },
                }));
                const __VLS_65 = __VLS_64({
                    ...{ 'onClick': {} },
                    type: "button",
                    icon: "pi pi-ellipsis-v",
                    'aria-haspopup': "true",
                    'aria-controls': "action_menu",
                    size: "small",
                    ...{ class: "h-8 w-8" },
                }, ...__VLS_functionalComponentArgsRest(__VLS_64));
                let __VLS_67;
                let __VLS_68;
                let __VLS_69;
                const __VLS_70 = {
                    onClick: ((event) => __VLS_ctx.actionMenuRef.toggle(event, data))
                };
                var __VLS_66;
            }
            else if (key.toString() === 'status') {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                const __VLS_71 = {}.Tag;
                /** @type {[typeof __VLS_components.Tag, ]} */ ;
                // @ts-ignore
                const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({
                    value: (data[field] || '-'),
                    severity: (data?.severity ? data.severity : null),
                }));
                const __VLS_73 = __VLS_72({
                    value: (data[field] || '-'),
                    severity: (data?.severity ? data.severity : null),
                }, ...__VLS_functionalComponentArgsRest(__VLS_72));
            }
            else if (key.toString() === 'shortcode') {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                const __VLS_75 = {}.InputGroup;
                /** @type {[typeof __VLS_components.InputGroup, typeof __VLS_components.InputGroup, ]} */ ;
                // @ts-ignore
                const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({
                    ...{ class: "h-8" },
                }));
                const __VLS_77 = __VLS_76({
                    ...{ class: "h-8" },
                }, ...__VLS_functionalComponentArgsRest(__VLS_76));
                __VLS_78.slots.default;
                const __VLS_79 = {}.InputText;
                /** @type {[typeof __VLS_components.InputText, ]} */ ;
                // @ts-ignore
                const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({
                    value: (data[field]),
                    readonly: true,
                }));
                const __VLS_81 = __VLS_80({
                    value: (data[field]),
                    readonly: true,
                }, ...__VLS_functionalComponentArgsRest(__VLS_80));
                const __VLS_83 = {}.Button;
                /** @type {[typeof __VLS_components.Button, ]} */ ;
                // @ts-ignore
                const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({
                    ...{ 'onClick': {} },
                    icon: "pi pi-copy",
                    size: "small",
                }));
                const __VLS_85 = __VLS_84({
                    ...{ 'onClick': {} },
                    icon: "pi pi-copy",
                    size: "small",
                }, ...__VLS_functionalComponentArgsRest(__VLS_84));
                let __VLS_87;
                let __VLS_88;
                let __VLS_89;
                const __VLS_90 = {
                    onClick: (...[$event]) => {
                        if (!!(key.toString() === 'multiple'))
                            return;
                        if (!!(key.toString() === 'action'))
                            return;
                        if (!!(key.toString() === 'status'))
                            return;
                        if (!(key.toString() === 'shortcode'))
                            return;
                        __VLS_ctx.copyToClipboard(data[field] || '');
                    }
                };
                var __VLS_86;
                var __VLS_78;
            }
            else {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                (data[field] || '-');
            }
        }
        {
            const { filter: __VLS_thisSlot } = __VLS_62.slots;
            const [{ filterModel }] = __VLS_getSlotParams(__VLS_thisSlot);
            /** @type {[typeof TableFilter, typeof TableFilter, ]} */ ;
            // @ts-ignore
            const __VLS_91 = __VLS_asFunctionalComponent(TableFilter, new TableFilter({
                columnData: (col),
                filterModel: (filterModel),
            }));
            const __VLS_92 = __VLS_91({
                columnData: (col),
                filterModel: (filterModel),
            }, ...__VLS_functionalComponentArgsRest(__VLS_91));
        }
        var __VLS_62;
    }
}
var __VLS_8;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['w-48']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-96']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-search']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder:text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:placeholder:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary-400']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
// @ts-ignore
var __VLS_4 = __VLS_3, __VLS_19 = __VLS_18;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
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
; /* PartiallyEnd: #4569/main.vue */
