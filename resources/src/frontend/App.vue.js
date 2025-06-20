/* __placeholder__ */
// Import the defineProps function from 'vue' to define props
import { defineProps, ref, onMounted } from 'vue';
import { get } from "@/axios/index";
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const formData = ref({});
const formStyle = ref({});
const loader = ref(true);
// Define props using the defineProps function
onMounted(() => {
    if (window.wp_vue_form_data && window.wp_vue_form_data[props.formId]) {
        formData.value = window.wp_vue_form_data[props.formId];
        removeLoader();
    }
    else {
        get(`/form/${props.formId}`).then((response) => {
            if (response?.data?.form_elements) {
                formData.value = response.data.form_elements;
                formStyle.value = response.data.style;
            }
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            removeLoader();
        });
    }
});
const removeLoader = function () {
    loader.value = false;
    const loaderEle = document.querySelector(`#wpVueFormFrontend-${props.formId} .vl-overlay`);
    const parentLoaderEle = document.querySelector(`#wpVueFormFrontend-${props.formId}`);
    if (loaderEle && parentLoaderEle) {
        parentLoaderEle.classList.remove('loading');
        loaderEle.remove();
    }
};
const props = defineProps({
    formId: { type: Number, required: true }
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
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.style;
    __VLS_components.Vueform;
    __VLS_components.vueform;
    __VLS_components.Vueform;
    __VLS_components.vueform;
    // @ts-ignore
    [Vueform, Vueform,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["style"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, }));
            (__VLS_ctx.formStyle);
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["div"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, class: ("vfb-preview-wrapper"), ref: (('vueform-' + props.formId)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, class: ("vfb-preview-wrapper"), ref: (('vueform-' + props.formId)), }));
            __VLS_directiveFunction(__VLS_ctx.vShow)((!__VLS_ctx.loader));
            {
                const __VLS_15 = {}.vueform;
                const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, ...(__VLS_ctx.formData), }));
                ({}.vueform);
                ({}.vueform);
                const __VLS_17 = __VLS_16({ ...{}, ...(__VLS_ctx.formData), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, ...(__VLS_ctx.formData), }));
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    // @ts-ignore
    [formStyle, loader, formData, formData, formData,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            formData: formData,
            formStyle: formStyle,
            loader: loader,
        };
    },
    props: {
        formId: { type: Number, required: true }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        formId: { type: Number, required: true }
    },
});
