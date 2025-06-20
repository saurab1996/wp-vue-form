/* __placeholder__ */
import { ref } from 'vue';
import IconField from 'primevue/iconfield';
import InputText from 'primevue/inputtext';
import InputIcon from 'primevue/inputicon';
import { LocalizeText } from '@/utils/helpers';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tabList = ['Fields', 'Static', 'Advanced', 'Layout'];
tabList.forEach((tab) => {
    import(`@/views/Form/Create/LeftSidebar/${tab}.vue`);
});
const activeTab = ref('Fields');
const tabClick = (tab) => {
    activeTab.value = tab;
};
const calculateTabClass = (tab, tabIndex) => {
    const isActiveTab = tab === activeTab.value;
    const isFirstTab = tabIndex === 0;
    const isLastTab = tabIndex === tabList.length - 1;
    const activeTabClass = isActiveTab
        ? 'bg-primary-400 text-white'
        : 'border-primary-400 border-2 dark:bg-surface-900';
    const tabIndexClass = isFirstTab
        ? 'rounded-l-md'
        : isLastTab
            ? 'rounded-r-md border-l-0'
            : 'border-l-0';
    return `p-1 px-4 ${activeTabClass} ${tabIndexClass}`;
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
    // @ts-ignore
    [InputText,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("pb-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("pb-2"), }));
            {
                const __VLS_10 = {}.IconField;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, iconPosition: ("left"), }));
                ({}.IconField);
                ({}.IconField);
                const __VLS_12 = __VLS_11({ ...{}, iconPosition: ("left"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, iconPosition: ("left"), }));
                {
                    const __VLS_15 = {}.InputIcon;
                    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, size: ("small"), }));
                    ({}.InputIcon);
                    ({}.InputIcon);
                    const __VLS_17 = __VLS_16({ ...{}, size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, size: ("small"), }));
                    {
                        const __VLS_20 = __VLS_intrinsicElements["i"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, class: ("pi pi-search pt-0.5 text-black dark:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, class: ("pi pi-search pt-0.5 text-black dark:text-white"), }));
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                {
                    const __VLS_25 = {}.InputText;
                    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, placeholder: ("Search element"), class: ("pl-10 placeholder:text-black dark:placeholder:text-white"), size: ("small"), }));
                    ({}.InputText);
                    const __VLS_27 = __VLS_26({ ...{}, placeholder: ("Search element"), class: ("pl-10 placeholder:text-black dark:placeholder:text-white"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                    ({}({ ...{}, placeholder: ("Search element"), class: ("pl-10 placeholder:text-black dark:placeholder:text-white"), size: ("small"), }));
                    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_30 = __VLS_intrinsicElements["div"];
            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
            const __VLS_32 = __VLS_31({ ...{}, class: ("pb-2 flex justify-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            ({}({ ...{}, class: ("pb-2 flex justify-center"), }));
            for (const [tab, key] of __VLS_getVForSourceType((__VLS_ctx.tabList))) {
                {
                    const __VLS_35 = __VLS_intrinsicElements["div"];
                    const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                    const __VLS_37 = __VLS_36({ ...{ 'onClick': {}, }, key: ((key)), class: ((__VLS_ctx.calculateTabClass(tab, key))), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                    ({}({ ...{ 'onClick': {}, }, key: ((key)), class: ((__VLS_ctx.calculateTabClass(tab, key))), }));
                    let __VLS_40 = { 'click': __VLS_pickEvent(__VLS_39['click'], {}.onClick) };
                    __VLS_40 = { click: $event => {
                            __VLS_ctx.tabClick(tab);
                            // @ts-ignore
                            [tabList, calculateTabClass, calculateTabClass, tabClick,];
                        }
                    };
                    (__VLS_ctx.LocalizeText(tab));
                    (__VLS_38.slots).default;
                    const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    let __VLS_39;
                }
                // @ts-ignore
                [LocalizeText,];
            }
            (__VLS_33.slots).default;
            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        }
        {
            const __VLS_41 = __VLS_intrinsicElements["div"];
            const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
            const __VLS_43 = __VLS_42({ ...{}, class: ("pb-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
            ({}({ ...{}, class: ("pb-2"), }));
            for (const [tab, key] of __VLS_getVForSourceType((__VLS_ctx.tabList))) {
                {
                    const __VLS_46 = __VLS_intrinsicElements["div"];
                    const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
                    const __VLS_48 = __VLS_47({ ...{}, key: ((key)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
                    ({}({ ...{}, key: ((key)), }));
                    if (__VLS_ctx.activeTab === tab) {
                        {
                            const __VLS_51 = (tab);
                            const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, }));
                            const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                            ({}({ ...{}, }));
                            const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
                        }
                        // @ts-ignore
                        [tabList, activeTab,];
                    }
                    (__VLS_49.slots).default;
                    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
                }
            }
            (__VLS_44.slots).default;
            const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
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
            IconField: IconField,
            InputText: InputText,
            InputIcon: InputIcon,
            LocalizeText: LocalizeText,
            tabList: tabList,
            activeTab: activeTab,
            tabClick: tabClick,
            calculateTabClass: calculateTabClass,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
