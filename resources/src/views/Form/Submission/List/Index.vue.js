/// <reference types="../../../../../node_modules/.vue-global-types/vue_3.4_0_0_0.d.ts" />
import Card from 'primevue/card';
import Table from '@/views/Form/Submission/List/Table.vue';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.Card;
/** @type {[typeof __VLS_components.Card, typeof __VLS_components.Card, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "!rounded-none min-h-screen" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "!rounded-none min-h-screen" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
{
    const { title: __VLS_thisSlot } = __VLS_3.slots;
    const __VLS_5 = {}.Toolbar;
    /** @type {[typeof __VLS_components.Toolbar, typeof __VLS_components.Toolbar, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_8.slots.default;
    {
        const { start: __VLS_thisSlot } = __VLS_8.slots;
    }
    {
        const { end: __VLS_thisSlot } = __VLS_8.slots;
        const __VLS_9 = {}.RouterLink;
        /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
            to: ({ name: 'form' }),
        }));
        const __VLS_11 = __VLS_10({
            to: ({ name: 'form' }),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        __VLS_12.slots.default;
        const __VLS_13 = {}.Button;
        /** @type {[typeof __VLS_components.Button, ]} */ ;
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
            label: "Back",
            icon: "pi pi-arrow-left",
            size: "small",
        }));
        const __VLS_15 = __VLS_14({
            label: "Back",
            icon: "pi pi-arrow-left",
            size: "small",
        }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        var __VLS_12;
    }
    var __VLS_8;
}
{
    const { content: __VLS_thisSlot } = __VLS_3.slots;
    /** @type {[typeof Table, typeof Table, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(Table, new Table({}));
    const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['!rounded-none']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            Table: Table,
            Button: Button,
            Toolbar: Toolbar,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
