/* __placeholder__ */
import { defineProps } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps();
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
    __VLS_components.Dropdown;
    __VLS_components.Dropdown;
    __VLS_components.Dropdown;
    __VLS_components.Dropdown;
    // @ts-ignore
    [Dropdown, Dropdown,];
    __VLS_components.Calendar;
    __VLS_components.Calendar;
    __VLS_components.Calendar;
    __VLS_components.Calendar;
    // @ts-ignore
    [Calendar, Calendar,];
    __VLS_components.InputText;
    __VLS_components.InputText;
    __VLS_components.InputText;
    __VLS_components.InputText;
    // @ts-ignore
    [InputText, InputText,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        if (__VLS_ctx.columnData.filter && __VLS_ctx.columnData.filter.type === 'select') {
            {
                const __VLS_5 = {}.Dropdown;
                const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, modelValue: ((__VLS_ctx.filterModel.value)), options: ((__VLS_ctx.columnData.filter.options ? __VLS_ctx.columnData.filter.options : [])), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search')), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), optionLabel: ("label"), optionValue: ("value"), }));
                ({}.Dropdown);
                ({}.Dropdown);
                const __VLS_7 = __VLS_6({ ...{}, modelValue: ((__VLS_ctx.filterModel.value)), options: ((__VLS_ctx.columnData.filter.options ? __VLS_ctx.columnData.filter.options : [])), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search')), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), optionLabel: ("label"), optionValue: ("value"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
                ({}({ ...{}, modelValue: ((__VLS_ctx.filterModel.value)), options: ((__VLS_ctx.columnData.filter.options ? __VLS_ctx.columnData.filter.options : [])), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search')), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), optionLabel: ("label"), optionValue: ("value"), }));
                const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
            }
            // @ts-ignore
            [columnData, columnData, filterModel, columnData, columnData, columnData, columnData, columnData, columnData, filterModel, columnData, columnData, columnData, columnData, columnData, columnData, filterModel, columnData, columnData, columnData, columnData, columnData, columnData,];
        }
        else if (__VLS_ctx.columnData.filter && __VLS_ctx.columnData.filter.type === 'date') {
            {
                const __VLS_10 = {}.Calendar;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, modelValue: ((__VLS_ctx.filterModel.value)), dateFormat: ("mm/dd/yy"), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'mm/dd/yyyy')), mask: ("99/99/9999"), }));
                ({}.Calendar);
                ({}.Calendar);
                const __VLS_12 = __VLS_11({ ...{}, modelValue: ((__VLS_ctx.filterModel.value)), dateFormat: ("mm/dd/yy"), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'mm/dd/yyyy')), mask: ("99/99/9999"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, modelValue: ((__VLS_ctx.filterModel.value)), dateFormat: ("mm/dd/yy"), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'mm/dd/yyyy')), mask: ("99/99/9999"), }));
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            // @ts-ignore
            [columnData, columnData, filterModel, columnData, columnData, columnData, columnData, filterModel, columnData, columnData, columnData, columnData, filterModel, columnData, columnData, columnData, columnData,];
        }
        else if (__VLS_ctx.columnData.filter && __VLS_ctx.columnData.filter.type === 'input') {
            {
                const __VLS_15 = {}.InputText;
                const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, type: ("text"), modelValue: ((__VLS_ctx.filterModel.value)), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search')), }));
                ({}.InputText);
                ({}.InputText);
                const __VLS_17 = __VLS_16({ ...{}, type: ("text"), modelValue: ((__VLS_ctx.filterModel.value)), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search')), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, type: ("text"), modelValue: ((__VLS_ctx.filterModel.value)), class: (('p-column-filter ' + (__VLS_ctx.columnData.filter.class ? __VLS_ctx.columnData.filter.class : ''))), placeholder: ((__VLS_ctx.columnData.filter.placeholder ? __VLS_ctx.columnData.filter.placeholder : 'Search')), }));
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            // @ts-ignore
            [columnData, columnData, filterModel, columnData, columnData, columnData, columnData, filterModel, columnData, columnData, columnData, columnData, filterModel, columnData, columnData, columnData, columnData,];
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
