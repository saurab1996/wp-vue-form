/* __placeholder__ */
import { defineProps } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    color: { type: String, required: true }
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
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.g;
    __VLS_intrinsicElements.g;
    __VLS_intrinsicElements.g;
    __VLS_intrinsicElements.g;
    __VLS_intrinsicElements.circle;
    __VLS_intrinsicElements.circle;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.animateTransform;
    __VLS_intrinsicElements.animateTransform;
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, class: ('vl-overlay'), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, class: ('vl-overlay'), }));
        {
            const __VLS_5 = __VLS_intrinsicElements["div"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, class: ('relative'), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, class: ('relative'), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["svg"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, viewBox: ('0 0 38 38'), xmlns: ('http://www.w3.org/2000/svg'), height: ("64"), width: ("64"), stroke: ((__VLS_ctx.color)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, viewBox: ('0 0 38 38'), xmlns: ('http://www.w3.org/2000/svg'), height: ("64"), width: ("64"), stroke: ((__VLS_ctx.color)), }));
                {
                    const __VLS_15 = __VLS_intrinsicElements["g"];
                    const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                    const __VLS_17 = __VLS_16({ ...{}, fill: ('none'), "fill-rule": ('evenodd'), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                    ({}({ ...{}, fill: ('none'), "fill-rule": ('evenodd'), }));
                    {
                        const __VLS_20 = __VLS_intrinsicElements["g"];
                        const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
                        const __VLS_22 = __VLS_21({ ...{}, transform: ('translate(1 1)'), "stroke-width": ('2'), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                        ({}({ ...{}, transform: ('translate(1 1)'), "stroke-width": ('2'), }));
                        {
                            const __VLS_25 = __VLS_intrinsicElements["circle"];
                            const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                            const __VLS_27 = __VLS_26({ ...{}, "stroke-opacity": ('.25'), cx: ('18'), cy: ('18'), r: ('18'), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                            ({}({ ...{}, "stroke-opacity": ('.25'), cx: ('18'), cy: ('18'), r: ('18'), }));
                            const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
                        }
                        {
                            const __VLS_30 = __VLS_intrinsicElements["path"];
                            const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                            const __VLS_32 = __VLS_31({ ...{}, d: ('M36 18c0-9.94-8.06-18-18-18'), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                            ({}({ ...{}, d: ('M36 18c0-9.94-8.06-18-18-18'), }));
                            {
                                const __VLS_35 = __VLS_intrinsicElements["animateTransform"];
                                const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                                const __VLS_37 = __VLS_36({ ...{}, attributeName: ('transform'), type: ('rotate'), from: ('0 18 18'), to: ('360 18 18'), dur: ('0.8s'), repeatCount: ('indefinite'), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                                ({}({ ...{}, attributeName: ('transform'), type: ('rotate'), from: ('0 18 18'), to: ('360 18 18'), dur: ('0.8s'), repeatCount: ('indefinite'), }));
                                const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                            }
                            (__VLS_33.slots).default;
                            const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                        }
                        (__VLS_23.slots).default;
                        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
                    }
                    (__VLS_18.slots).default;
                    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
                }
                (__VLS_13.slots).default;
                const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
            }
            (__VLS_8.slots).default;
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses["vl-overlay"];
        __VLS_styleScopedClasses["relative"];
    }
    var __VLS_slots;
    // @ts-ignore
    [color, color,];
    return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
