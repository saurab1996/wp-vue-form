/// <reference types="../../node_modules/.vue-global-types/vue_3.4_0_0_0.d.ts" />
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_0 = {}.ConfirmDialog;
/** @type {[typeof __VLS_components.ConfirmDialog, typeof __VLS_components.ConfirmDialog, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
{
    const { container: __VLS_thisSlot } = __VLS_3.slots;
    const [{ message, acceptCallback, rejectCallback }] = __VLS_getSlotParams(__VLS_thisSlot);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (__VLS_ctx.iconColor(message?.acceptClass) + ' rounded-full text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]') },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: (message?.icon + ' text-5xl text-white') },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "font-bold text-2xl block mb-2 mt-4" },
    });
    (message.header);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "mb-0" },
    });
    (message.message);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex items-center gap-2 mt-4" },
    });
    const __VLS_4 = {}.Button;
    /** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        ...{ 'onClick': {} },
        label: (message?.acceptLabel),
        ...{ class: "w-[8rem] text-white dark:text-white" },
        severity: (__VLS_ctx.buttonSeverity(message?.acceptClass)),
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onClick': {} },
        label: (message?.acceptLabel),
        ...{ class: "w-[8rem] text-white dark:text-white" },
        severity: (__VLS_ctx.buttonSeverity(message?.acceptClass)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = {
        onClick: (acceptCallback)
    };
    var __VLS_7;
    const __VLS_12 = {}.Button;
    /** @type {[typeof __VLS_components.Button, typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ 'onClick': {} },
        label: (message?.rejectLabel),
        outlined: true,
        ...{ class: "w-[8rem]  dark:text-white" },
        severity: (__VLS_ctx.buttonSeverity(message?.acceptClass)),
    }));
    const __VLS_14 = __VLS_13({
        ...{ 'onClick': {} },
        label: (message?.rejectLabel),
        outlined: true,
        ...{ class: "w-[8rem]  dark:text-white" },
        severity: (__VLS_ctx.buttonSeverity(message?.acceptClass)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_16;
    let __VLS_17;
    let __VLS_18;
    const __VLS_19 = {
        onClick: (rejectCallback)
    };
    var __VLS_15;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-surface-0']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-surface-700']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[8rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[8rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
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
; /* PartiallyEnd: #4569/main.vue */
