/* __placeholder__ */
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const iconColor = (value) => {
    const color = {
        'delete': 'bg-red-400'
    };
    return color[value] || 'bg-primary-400';
};
const buttonSeverity = (value) => {
    const color = {
        'delete': 'danger',
    };
    return color[value] || undefined;
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
    __VLS_components.ConfirmDialog;
    __VLS_components.ConfirmDialog;
    __VLS_components.ConfirmDialog;
    __VLS_components.ConfirmDialog;
    // @ts-ignore
    [ConfirmDialog, ConfirmDialog,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.i;
    __VLS_intrinsicElements.i;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
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
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = {}.ConfirmDialog;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
            ({}.ConfirmDialog);
            ({}.ConfirmDialog);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            {
                const __VLS_10 = __VLS_intrinsicElements["template"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                {
                    const [{ message, acceptCallback, rejectCallback }] = __VLS_getSlotParams((__VLS_8.slots).container);
                    {
                        const __VLS_14 = __VLS_intrinsicElements["div"];
                        const __VLS_15 = __VLS_elementAsFunctionalComponent(__VLS_14);
                        const __VLS_16 = __VLS_15({ ...{}, class: ("flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
                        ({}({ ...{}, class: ("flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md"), }));
                        {
                            const __VLS_19 = __VLS_intrinsicElements["div"];
                            const __VLS_20 = __VLS_elementAsFunctionalComponent(__VLS_19);
                            const __VLS_21 = __VLS_20({ ...{}, class: ((__VLS_ctx.iconColor(message?.acceptClass) + ' rounded-full text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]')), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
                            ({}({ ...{}, class: ((__VLS_ctx.iconColor(message?.acceptClass) + ' rounded-full text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]')), }));
                            {
                                const __VLS_24 = __VLS_intrinsicElements["i"];
                                const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
                                const __VLS_26 = __VLS_25({ ...{}, class: ((message?.icon + ' text-5xl text-white')), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                                ({}({ ...{}, class: ((message?.icon + ' text-5xl text-white')), }));
                                const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                            }
                            (__VLS_22.slots).default;
                            const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
                        }
                        {
                            const __VLS_29 = __VLS_intrinsicElements["span"];
                            const __VLS_30 = __VLS_elementAsFunctionalComponent(__VLS_29);
                            const __VLS_31 = __VLS_30({ ...{}, class: ("font-bold text-2xl block mb-2 mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
                            ({}({ ...{}, class: ("font-bold text-2xl block mb-2 mt-4"), }));
                            (message.header);
                            (__VLS_32.slots).default;
                            const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
                        }
                        {
                            const __VLS_34 = __VLS_intrinsicElements["p"];
                            const __VLS_35 = __VLS_elementAsFunctionalComponent(__VLS_34);
                            const __VLS_36 = __VLS_35({ ...{}, class: ("mb-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
                            ({}({ ...{}, class: ("mb-0"), }));
                            (message.message);
                            (__VLS_37.slots).default;
                            const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
                        }
                        {
                            const __VLS_39 = __VLS_intrinsicElements["div"];
                            const __VLS_40 = __VLS_elementAsFunctionalComponent(__VLS_39);
                            const __VLS_41 = __VLS_40({ ...{}, class: ("flex items-center gap-2 mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                            ({}({ ...{}, class: ("flex items-center gap-2 mt-4"), }));
                            {
                                const __VLS_44 = {}.Button;
                                const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onClick': {}, }, label: ((message?.acceptLabel)), class: ("w-[8rem] text-white dark:text-white"), severity: ((__VLS_ctx.buttonSeverity(message?.acceptClass))), }));
                                ({}.Button);
                                ({}.Button);
                                const __VLS_46 = __VLS_45({ ...{ 'onClick': {}, }, label: ((message?.acceptLabel)), class: ("w-[8rem] text-white dark:text-white"), severity: ((__VLS_ctx.buttonSeverity(message?.acceptClass))), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
                                ({}({ ...{ 'onClick': {}, }, label: ((message?.acceptLabel)), class: ("w-[8rem] text-white dark:text-white"), severity: ((__VLS_ctx.buttonSeverity(message?.acceptClass))), }));
                                let __VLS_49 = { 'click': __VLS_pickEvent(__VLS_48['click'], {}.onClick) };
                                __VLS_49 = { click: (acceptCallback) };
                                const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
                                let __VLS_48;
                            }
                            {
                                const __VLS_50 = {}.Button;
                                const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ 'onClick': {}, }, label: ((message?.rejectLabel)), outlined: (true), class: ("w-[8rem]  dark:text-white"), severity: ((__VLS_ctx.buttonSeverity(message?.acceptClass))), }));
                                ({}.Button);
                                ({}.Button);
                                const __VLS_52 = __VLS_51({ ...{ 'onClick': {}, }, label: ((message?.rejectLabel)), outlined: (true), class: ("w-[8rem]  dark:text-white"), severity: ((__VLS_ctx.buttonSeverity(message?.acceptClass))), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                                ({}({ ...{ 'onClick': {}, }, label: ((message?.rejectLabel)), outlined: (true), class: ("w-[8rem]  dark:text-white"), severity: ((__VLS_ctx.buttonSeverity(message?.acceptClass))), }));
                                let __VLS_55 = { 'click': __VLS_pickEvent(__VLS_54['click'], {}.onClick) };
                                __VLS_55 = { click: (rejectCallback) };
                                const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                                let __VLS_54;
                            }
                            (__VLS_42.slots).default;
                            const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
                        }
                        (__VLS_17.slots).default;
                        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
                    }
                    // @ts-ignore
                    [iconColor, iconColor, buttonSeverity, buttonSeverity, buttonSeverity, buttonSeverity, buttonSeverity, buttonSeverity,];
                }
            }
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
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
            ConfirmDialog: ConfirmDialog,
            Button: Button,
            iconColor: iconColor,
            buttonSeverity: buttonSeverity,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
