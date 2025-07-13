/// <reference types="../../../../node_modules/.vue-global-types/vue_3.4_0_0_0.d.ts" />
import { ref, reactive } from 'vue';
import Menu from 'primevue/menu';
import { confirmBox } from '@/utils/helpers';
import { useConfirm } from "primevue/useconfirm";
import { useRouter } from 'vue-router';
const router = useRouter();
const confirm = useConfirm();
let rowData = reactive({});
const MenuRef = ref(); // Initialize the MenuRef
const actionItems = reactive([
    {
        label: 'Actions',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                severity: 'primary',
                command: () => {
                    editForm();
                }
            },
            {
                label: 'View',
                icon: 'pi pi-eye',
                severity: 'info',
                command: () => {
                    router.push({ name: 'form-view', params: { form_id: rowData?.id ? rowData.id : -1 } });
                }
            },
            {
                label: 'Submissions',
                icon: 'pi pi-comment',
                severity: 'secondary',
                command: () => {
                    router.push({ name: 'form-submission', params: { form_id: rowData?.id ? rowData.id : -1 } });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                severity: 'danger',
                command: () => {
                    deleteForm();
                }
            },
        ]
    }
]);
const editForm = () => {
    confirmBox(confirm, '/form/1', { message: '', acceptClass: 'edit' }, rowData);
};
const viewForm = () => {
    confirmBox(confirm, '/form/1', { message: '', acceptClass: 'view' }, rowData);
};
const viewFormSubmission = () => {
    confirmBox(confirm, '/form/1', { message: '', acceptClass: 'viewSubmission' }, rowData);
};
const deleteForm = () => {
    confirmBox(confirm, '/form/1', { message: '', acceptClass: 'delete' }, rowData);
};
const toggle = (event = {}, data) => {
    rowData = data;
    MenuRef.value?.toggle(event);
};
const __VLS_exposed = {
    toggle
};
defineExpose(__VLS_exposed);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_0 = {}.Menu;
/** @type {[typeof __VLS_components.Menu, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ref: "MenuRef",
    id: "action_menu",
    model: (__VLS_ctx.actionItems),
    popup: (true),
}));
const __VLS_2 = __VLS_1({
    ref: "MenuRef",
    id: "action_menu",
    model: (__VLS_ctx.actionItems),
    popup: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {typeof __VLS_ctx.MenuRef} */ ;
var __VLS_4 = {};
var __VLS_3;
// @ts-ignore
var __VLS_5 = __VLS_4;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Menu: Menu,
            MenuRef: MenuRef,
            actionItems: actionItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
