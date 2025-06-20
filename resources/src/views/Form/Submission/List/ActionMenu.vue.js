/* __placeholder__ */
import { ref, reactive } from 'vue';
import Menu from 'primevue/menu';
import { confirmBox } from '@/utils/helpers';
import { useConfirm } from "primevue/useconfirm";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
                    viewForm();
                }
            },
            {
                label: 'Submissions',
                icon: 'pi pi-comment',
                severity: 'secondary',
                command: () => {
                    router.push({ name: 'form-submission', params: { formId: rowData.id || -1 } });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                severity: 'danger',
                command: () => {
                    confirmBox(confirm, '/form/1', { message: '', acceptClass: 'delete' }, rowData);
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
const toggle = (event = {}, data) => {
    rowData = data;
    MenuRef.value?.toggle(event);
};
const __VLS_exposed = {
    toggle
};
defineExpose({
    toggle
});
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
    __VLS_components.Menu;
    __VLS_components.Menu;
    // @ts-ignore
    [Menu,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = {}.Menu;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, ref: ("MenuRef"), id: ("action_menu"), model: ((__VLS_ctx.actionItems)), popup: ((true)), }));
            ({}.Menu);
            const __VLS_7 = __VLS_6({ ...{}, ref: ("MenuRef"), id: ("action_menu"), model: ((__VLS_ctx.actionItems)), popup: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, ref: ("MenuRef"), id: ("action_menu"), model: ((__VLS_ctx.actionItems)), popup: ((true)), }));
            // @ts-ignore
            (__VLS_ctx.MenuRef);
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [actionItems, actionItems, actionItems, MenuRef,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
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
