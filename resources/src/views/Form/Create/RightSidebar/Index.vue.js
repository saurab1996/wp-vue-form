/* __placeholder__ */
import { ref } from 'vue';
import { LocalizeText } from '@/utils/helpers';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tabList = ['settings', 'themes'];
const activeTab = ref('settings');
const tabClick = (tab) => {
    activeTab.value = tab;
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
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.hr;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ("flex items-center justify-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ("flex items-center justify-center"), }));
            for (const [tab, key] of __VLS_getVForSourceType((__VLS_ctx.tabList))) {
                {
                    const __VLS_10 = __VLS_intrinsicElements["div"];
                    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                    const __VLS_12 = __VLS_11({ ...{ 'onClick': {}, }, class: ("w-1/2"), key: ((key)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                    ({}({ ...{ 'onClick': {}, }, class: ("w-1/2"), key: ((key)), }));
                    let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_14['click'], {}.onClick) };
                    __VLS_15 = { click: $event => {
                            __VLS_ctx.tabClick(tab);
                            // @ts-ignore
                            [tabList, tabClick,];
                        }
                    };
                    {
                        const __VLS_16 = __VLS_intrinsicElements["p"];
                        const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
                        const __VLS_18 = __VLS_17({ ...{}, class: (('p-3 font-semibold text-center ' + (__VLS_ctx.activeTab === tab ? ' bg-primary-400 text-white ' : ' '))), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
                        ({}({ ...{}, class: (('p-3 font-semibold text-center ' + (__VLS_ctx.activeTab === tab ? ' bg-primary-400 text-white ' : ' '))), }));
                        (__VLS_ctx.LocalizeText(tab));
                        (__VLS_19.slots).default;
                        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
                    }
                    (__VLS_13.slots).default;
                    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
                    let __VLS_14;
                }
                // @ts-ignore
                [activeTab, activeTab, LocalizeText,];
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_21 = __VLS_intrinsicElements["hr"];
            const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
            const __VLS_23 = __VLS_22({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
            ({}({ ...{}, }));
            const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
        }
        if (__VLS_ctx.activeTab === 'settings') {
            {
                const __VLS_26 = __VLS_intrinsicElements["div"];
                const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
                const __VLS_28 = __VLS_27({ ...{}, class: ("p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
                ({}({ ...{}, class: ("p-2"), }));
                {
                    const __VLS_31 = __VLS_intrinsicElements["p"];
                    const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
                    const __VLS_33 = __VLS_32({ ...{}, class: ("m-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                    ({}({ ...{}, class: ("m-0"), }));
                    (__VLS_34.slots).default;
                    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33);
                }
                (__VLS_29.slots).default;
                const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
            }
            // @ts-ignore
            [activeTab,];
        }
        else if (__VLS_ctx.activeTab === 'themes') {
            {
                const __VLS_36 = __VLS_intrinsicElements["div"];
                const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
                const __VLS_38 = __VLS_37({ ...{}, class: ("p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                ({}({ ...{}, class: ("p-2"), }));
                {
                    const __VLS_41 = __VLS_intrinsicElements["p"];
                    const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
                    const __VLS_43 = __VLS_42({ ...{}, class: ("m-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
                    ({}({ ...{}, class: ("m-0"), }));
                    (__VLS_44.slots).default;
                    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43);
                }
                (__VLS_39.slots).default;
                const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
            }
            // @ts-ignore
            [activeTab,];
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
            LocalizeText: LocalizeText,
            tabList: tabList,
            activeTab: activeTab,
            tabClick: tabClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
