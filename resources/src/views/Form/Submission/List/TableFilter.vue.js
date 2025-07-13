/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.4_0_0_0.d.ts" />
import { defineProps } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
if (__VLS_ctx.columnData.filter && __VLS_ctx.columnData.filter.type === 'select') {
    const __VLS_0 = {}.Dropdown;
    /** @type {[typeof __VLS_components.Dropdown, typeof __VLS_components.Dropdown, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        modelValue: (__VLS_ctx.filterModel.value),
        options: (__VLS_ctx.columnData.filter.options ? __VLS_ctx.columnData.filter.options : []),
        placeholder: (__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search'),
        ...{ class: ('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : '')) },
        optionLabel: "label",
        optionValue: "value",
    }));
    const __VLS_2 = __VLS_1({
        modelValue: (__VLS_ctx.filterModel.value),
        options: (__VLS_ctx.columnData.filter.options ? __VLS_ctx.columnData.filter.options : []),
        placeholder: (__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search'),
        ...{ class: ('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : '')) },
        optionLabel: "label",
        optionValue: "value",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else if (__VLS_ctx.columnData.filter && __VLS_ctx.columnData.filter.type === 'date') {
    const __VLS_4 = {}.Calendar;
    /** @type {[typeof __VLS_components.Calendar, typeof __VLS_components.Calendar, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        modelValue: (__VLS_ctx.filterModel.value),
        dateFormat: "mm/dd/yy",
        ...{ class: ('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : '')) },
        placeholder: (__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'mm/dd/yyyy'),
        mask: "99/99/9999",
    }));
    const __VLS_6 = __VLS_5({
        modelValue: (__VLS_ctx.filterModel.value),
        dateFormat: "mm/dd/yy",
        ...{ class: ('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : '')) },
        placeholder: (__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'mm/dd/yyyy'),
        mask: "99/99/9999",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
}
else if (__VLS_ctx.columnData.filter && __VLS_ctx.columnData.filter.type === 'input') {
    const __VLS_8 = {}.InputText;
    /** @type {[typeof __VLS_components.InputText, typeof __VLS_components.InputText, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        type: "text",
        modelValue: (__VLS_ctx.filterModel.value),
        ...{ class: ('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : '')) },
        placeholder: (__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search'),
    }));
    const __VLS_10 = __VLS_9({
        type: "text",
        modelValue: (__VLS_ctx.filterModel.value),
        ...{ class: ('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : '')) },
        placeholder: (__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            InputText: InputText,
            Dropdown: Dropdown,
            Calendar: Calendar,
        };
    },
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
