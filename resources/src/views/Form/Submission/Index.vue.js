/* __placeholder__ */
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const home = ref({
    icon: 'pi pi-home',
    route: '/introduction'
});
const items = ref([
    { label: 'Components', route: '/inputtext' },
    { label: 'Form', route: '/inputtext' },
    { label: 'InputText', route: '/inputtext' }
]);
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
    __VLS_components.Breadcrumb;
    __VLS_components.Breadcrumb;
    __VLS_components.Breadcrumb;
    __VLS_components.Breadcrumb;
    // @ts-ignore
    [Breadcrumb, Breadcrumb,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: (""), }));
            {
                const __VLS_10 = {}.Breadcrumb;
                const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, home: ((__VLS_ctx.home)), model: ((__VLS_ctx.items)), }));
                ({}.Breadcrumb);
                ({}.Breadcrumb);
                const __VLS_12 = __VLS_11({ ...{}, home: ((__VLS_ctx.home)), model: ((__VLS_ctx.items)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, home: ((__VLS_ctx.home)), model: ((__VLS_ctx.items)), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["template"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, }));
                    {
                        const [{ item, props }] = __VLS_getSlotParams((__VLS_13.slots).item);
                        {
                            const __VLS_19 = {}.RouterLink;
                            const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{}, to: ((item.route)), custom: (true), }));
                            ({}.RouterLink);
                            ({}.RouterLink);
                            const __VLS_21 = __VLS_20({ ...{}, to: ((item.route)), custom: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
                            ({}({ ...{}, to: ((item.route)), custom: (true), }));
                            {
                                const [{ href, navigate }] = __VLS_getSlotParams((__VLS_22.slots).default);
                                {
                                    const __VLS_24 = __VLS_intrinsicElements["a"];
                                    const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
                                    const __VLS_26 = __VLS_25({ ...{ 'onClick': {}, }, href: ((href)), ...(props.action), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                                    ({}({ ...{ 'onClick': {}, }, href: ((href)), ...(props.action), }));
                                    let __VLS_29 = { 'click': __VLS_pickEvent(__VLS_28['click'], {}.onClick) };
                                    __VLS_29 = { click: (navigate) };
                                    {
                                        const __VLS_30 = __VLS_intrinsicElements["span"];
                                        const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                                        const __VLS_32 = __VLS_31({ ...{}, class: (([item.icon, 'text-color'])), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                                        ({}({ ...{}, class: (([item.icon, 'text-color'])), }));
                                        const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                                    }
                                    {
                                        const __VLS_35 = __VLS_intrinsicElements["span"];
                                        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                                        const __VLS_37 = __VLS_36({ ...{}, class: ("text-primary font-semibold"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                                        ({}({ ...{}, class: ("text-primary font-semibold"), }));
                                        (item.label);
                                        (__VLS_38.slots).default;
                                        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                                    }
                                    (__VLS_27.slots).default;
                                    const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                                    let __VLS_28;
                                }
                                // @ts-ignore
                                [home, items, home, items, home, items,];
                                __VLS_22.slots['' /* empty slot name completion */];
                            }
                            const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
                        }
                    }
                }
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_40 = {}.RouterView;
            const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, }));
            ({}.RouterView);
            ({}.RouterView);
            const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
            ({}({ ...{}, }));
            const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
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
            Breadcrumb: Breadcrumb,
            home: home,
            items: items,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
