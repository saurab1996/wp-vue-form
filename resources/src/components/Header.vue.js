/* __placeholder__ */
import { ref, onMounted } from 'vue';
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const themeMod = ref('');
onMounted(() => {
    // Check localStorage and prefers-color-scheme to determine the initial theme
    if ('theme' in localStorage) {
        themeMod.value = localStorage.theme === 'dark' ? 'dark' : 'light';
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeMod.value = 'dark';
    }
    updateThemeModeClass();
});
// Function to toggle between light and dark theme
const toggleThemeMod = () => {
    themeMod.value = themeMod.value === 'light' ? 'dark' : 'light';
    localStorage.theme = themeMod.value; // Corrected assignment
    updateThemeModeClass();
};
const updateThemeModeClass = () => {
    document.documentElement.classList.remove('dark');
    if (themeMod.value === 'dark') {
        document.documentElement.classList.add('dark');
    }
};
const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        route: { name: 'dashboard' }
    },
    {
        label: 'Form',
        icon: 'pi pi-table',
        route: { name: 'form' }
    },
    {
        label: 'Create Form',
        icon: 'pi pi-plus',
        route: { name: 'form-create' }
    },
    {
        label: 'Setting',
        icon: 'pi pi-cog',
        route: { name: 'setting' }
    }
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
    __VLS_components.Menubar;
    __VLS_components.Menubar;
    __VLS_components.Menubar;
    __VLS_components.Menubar;
    // @ts-ignore
    [Menubar, Menubar,];
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.template;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.span;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.svg;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_intrinsicElements.path;
    __VLS_components.Avatar;
    __VLS_components.Avatar;
    // @ts-ignore
    [Avatar,];
    {
        const __VLS_0 = __VLS_intrinsicElements["div"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = {}.Menubar;
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, model: ((__VLS_ctx.items)), class: ("!rounded-none"), }));
            ({}.Menubar);
            ({}.Menubar);
            const __VLS_7 = __VLS_6({ ...{}, model: ((__VLS_ctx.items)), class: ("!rounded-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, model: ((__VLS_ctx.items)), class: ("!rounded-none"), }));
            {
                const __VLS_10 = __VLS_intrinsicElements["template"];
                const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
                const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
                ({}({ ...{}, }));
                {
                    (__VLS_8.slots).start;
                    {
                        const __VLS_14 = __VLS_intrinsicElements["div"];
                        const __VLS_15 = __VLS_elementAsFunctionalComponent(__VLS_14);
                        const __VLS_16 = __VLS_15({ ...{}, class: ("hidden md:block"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
                        ({}({ ...{}, class: ("hidden md:block"), }));
                        {
                            const __VLS_19 = __VLS_intrinsicElements["img"];
                            const __VLS_20 = __VLS_elementAsFunctionalComponent(__VLS_19);
                            const __VLS_21 = __VLS_20({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal.svg"), width: ("150"), class: ("mr-3 h-6 sm:h-9 dark:hidden"), alt: ("App Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
                            ({}({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal.svg"), width: ("150"), class: ("mr-3 h-6 sm:h-9 dark:hidden"), alt: ("App Logo"), }));
                            const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21);
                        }
                        {
                            const __VLS_24 = __VLS_intrinsicElements["img"];
                            const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
                            const __VLS_26 = __VLS_25({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal-dark.svg"), width: ("150"), class: ("mr-3 h-6 sm:h-9 hidden dark:block"), alt: ("App Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                            ({}({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal-dark.svg"), width: ("150"), class: ("mr-3 h-6 sm:h-9 hidden dark:block"), alt: ("App Logo"), }));
                            const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                        }
                        (__VLS_17.slots).default;
                        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
                    }
                    // @ts-ignore
                    [items, items, items,];
                }
            }
            {
                const __VLS_29 = __VLS_intrinsicElements["template"];
                const __VLS_30 = __VLS_elementAsFunctionalComponent(__VLS_29);
                const __VLS_31 = __VLS_30({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_30));
                ({}({ ...{}, }));
                {
                    const [{ item, props }] = __VLS_getSlotParams((__VLS_8.slots).item);
                    if (item.route) {
                        {
                            const __VLS_33 = {}.RouterLink;
                            const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...{}, to: ((item.route)), class: ("flex items-center relative  py-3 px-5 leading-none select-none cursor-pointer no-underline overflow-hidden"), }));
                            ({}.RouterLink);
                            ({}.RouterLink);
                            const __VLS_35 = __VLS_34({ ...{}, to: ((item.route)), class: ("flex items-center relative  py-3 px-5 leading-none select-none cursor-pointer no-underline overflow-hidden"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                            ({}({ ...{}, to: ((item.route)), class: ("flex items-center relative  py-3 px-5 leading-none select-none cursor-pointer no-underline overflow-hidden"), }));
                            {
                                const __VLS_38 = __VLS_intrinsicElements["span"];
                                const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
                                const __VLS_40 = __VLS_39({ ...{}, class: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
                                ({}({ ...{}, class: ((item.icon)), }));
                                const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
                            }
                            {
                                const __VLS_43 = __VLS_intrinsicElements["span"];
                                const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
                                const __VLS_45 = __VLS_44({ ...{}, class: ("ml-2 font-semibold "), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
                                ({}({ ...{}, class: ("ml-2 font-semibold "), }));
                                (item.label);
                                (__VLS_46.slots).default;
                                const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45);
                            }
                            (__VLS_36.slots).default;
                            const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
                        }
                    }
                    else {
                        {
                            const __VLS_48 = __VLS_intrinsicElements["a"];
                            const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
                            const __VLS_50 = __VLS_49({ ...{}, ...(props.action), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
                            ({}({ ...{}, ...(props.action), }));
                            __VLS_directiveFunction(__VLS_ctx.vRipple)(undefined);
                            {
                                const __VLS_53 = __VLS_intrinsicElements["span"];
                                const __VLS_54 = __VLS_elementAsFunctionalComponent(__VLS_53);
                                const __VLS_55 = __VLS_54({ ...{}, class: ((item.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
                                ({}({ ...{}, class: ((item.icon)), }));
                                const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55);
                            }
                            {
                                const __VLS_58 = __VLS_intrinsicElements["span"];
                                const __VLS_59 = __VLS_elementAsFunctionalComponent(__VLS_58);
                                const __VLS_60 = __VLS_59({ ...{}, class: ("ml-2 font-semibold "), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
                                ({}({ ...{}, class: ("ml-2 font-semibold "), }));
                                (item.label);
                                (__VLS_61.slots).default;
                                const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
                            }
                            (__VLS_51.slots).default;
                            const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
                        }
                    }
                }
            }
            {
                const __VLS_63 = __VLS_intrinsicElements["template"];
                const __VLS_64 = __VLS_elementAsFunctionalComponent(__VLS_63);
                const __VLS_65 = __VLS_64({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_64));
                ({}({ ...{}, }));
                {
                    (__VLS_8.slots).end;
                    {
                        const __VLS_67 = __VLS_intrinsicElements["div"];
                        const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
                        const __VLS_69 = __VLS_68({ ...{}, class: ("flex items-center gap-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
                        ({}({ ...{}, class: ("flex items-center gap-2"), }));
                        {
                            const __VLS_72 = __VLS_intrinsicElements["div"];
                            const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
                            const __VLS_74 = __VLS_73({ ...{}, class: ("block md:hidden"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
                            ({}({ ...{}, class: ("block md:hidden"), }));
                            {
                                const __VLS_77 = __VLS_intrinsicElements["img"];
                                const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
                                const __VLS_79 = __VLS_78({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal.svg"), width: ("150"), class: ("h-6 sm:h-9 dark:hidden"), alt: ("App Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
                                ({}({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal.svg"), width: ("150"), class: ("h-6 sm:h-9 dark:hidden"), alt: ("App Logo"), }));
                                const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79);
                            }
                            {
                                const __VLS_82 = __VLS_intrinsicElements["img"];
                                const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
                                const __VLS_84 = __VLS_83({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal-dark.svg"), width: ("150"), class: ("h-6 sm:h-9 hidden dark:block"), alt: ("App Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
                                ({}({ ...{}, src: ("https://builder.vueform.com/images/logo-horizontal-dark.svg"), width: ("150"), class: ("h-6 sm:h-9 hidden dark:block"), alt: ("App Logo"), }));
                                const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
                            }
                            (__VLS_75.slots).default;
                            const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
                        }
                        {
                            const __VLS_87 = __VLS_intrinsicElements["div"];
                            const __VLS_88 = __VLS_elementAsFunctionalComponent(__VLS_87);
                            const __VLS_89 = __VLS_88({ ...{ 'onClick': {}, }, class: ("h-6 w-12  rounded-full flex items-center bg-gray-200 dark:bg-gray-600 justify-start dark:justify-end"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
                            ({}({ ...{ 'onClick': {}, }, class: ("h-6 w-12  rounded-full flex items-center bg-gray-200 dark:bg-gray-600 justify-start dark:justify-end"), }));
                            let __VLS_92 = { 'click': __VLS_pickEvent(__VLS_91['click'], {}.onClick) };
                            __VLS_92 = { click: (__VLS_ctx.toggleThemeMod) };
                            {
                                const __VLS_93 = __VLS_intrinsicElements["div"];
                                const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93);
                                const __VLS_95 = __VLS_94({ ...{}, class: ("dark:hidden rounded-full bg-gray-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
                                ({}({ ...{}, class: ("dark:hidden rounded-full bg-gray-100"), }));
                                {
                                    const __VLS_98 = __VLS_intrinsicElements["svg"];
                                    const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
                                    const __VLS_100 = __VLS_99({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), "aria-hidden": ("true"), focusable: ("false"), viewBox: ("0 0 24 24"), class: ("vt-switch-appearance-sun h-4 m-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
                                    ({}({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), "aria-hidden": ("true"), focusable: ("false"), viewBox: ("0 0 24 24"), class: ("vt-switch-appearance-sun h-4 m-1"), }));
                                    {
                                        const __VLS_103 = __VLS_intrinsicElements["path"];
                                        const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
                                        const __VLS_105 = __VLS_104({ ...{}, d: ("M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
                                        ({}({ ...{}, d: ("M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"), }));
                                        const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105);
                                    }
                                    {
                                        const __VLS_108 = __VLS_intrinsicElements["path"];
                                        const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
                                        const __VLS_110 = __VLS_109({ ...{}, d: ("M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
                                        ({}({ ...{}, d: ("M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"), }));
                                        const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
                                    }
                                    {
                                        const __VLS_113 = __VLS_intrinsicElements["path"];
                                        const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
                                        const __VLS_115 = __VLS_114({ ...{}, d: ("M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
                                        ({}({ ...{}, d: ("M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"), }));
                                        const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115);
                                    }
                                    {
                                        const __VLS_118 = __VLS_intrinsicElements["path"];
                                        const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
                                        const __VLS_120 = __VLS_119({ ...{}, d: ("M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
                                        ({}({ ...{}, d: ("M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"), }));
                                        const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
                                    }
                                    {
                                        const __VLS_123 = __VLS_intrinsicElements["path"];
                                        const __VLS_124 = __VLS_elementAsFunctionalComponent(__VLS_123);
                                        const __VLS_125 = __VLS_124({ ...{}, d: ("M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"), }, ...__VLS_functionalComponentArgsRest(__VLS_124));
                                        ({}({ ...{}, d: ("M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"), }));
                                        const __VLS_126 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
                                    }
                                    {
                                        const __VLS_128 = __VLS_intrinsicElements["path"];
                                        const __VLS_129 = __VLS_elementAsFunctionalComponent(__VLS_128);
                                        const __VLS_130 = __VLS_129({ ...{}, d: ("M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"), }, ...__VLS_functionalComponentArgsRest(__VLS_129));
                                        ({}({ ...{}, d: ("M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"), }));
                                        const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
                                    }
                                    {
                                        const __VLS_133 = __VLS_intrinsicElements["path"];
                                        const __VLS_134 = __VLS_elementAsFunctionalComponent(__VLS_133);
                                        const __VLS_135 = __VLS_134({ ...{}, d: ("M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
                                        ({}({ ...{}, d: ("M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"), }));
                                        const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135);
                                    }
                                    {
                                        const __VLS_138 = __VLS_intrinsicElements["path"];
                                        const __VLS_139 = __VLS_elementAsFunctionalComponent(__VLS_138);
                                        const __VLS_140 = __VLS_139({ ...{}, d: ("M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
                                        ({}({ ...{}, d: ("M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"), }));
                                        const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
                                    }
                                    {
                                        const __VLS_143 = __VLS_intrinsicElements["path"];
                                        const __VLS_144 = __VLS_elementAsFunctionalComponent(__VLS_143);
                                        const __VLS_145 = __VLS_144({ ...{}, d: ("M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"), }, ...__VLS_functionalComponentArgsRest(__VLS_144));
                                        ({}({ ...{}, d: ("M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"), }));
                                        const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_143, __VLS_145);
                                    }
                                    (__VLS_101.slots).default;
                                    const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
                                }
                                (__VLS_96.slots).default;
                                const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
                            }
                            {
                                const __VLS_148 = __VLS_intrinsicElements["div"];
                                const __VLS_149 = __VLS_elementAsFunctionalComponent(__VLS_148);
                                const __VLS_150 = __VLS_149({ ...{}, class: (" hidden dark:block rounded-full bg-gray-400 "), }, ...__VLS_functionalComponentArgsRest(__VLS_149));
                                ({}({ ...{}, class: (" hidden dark:block rounded-full bg-gray-400 "), }));
                                {
                                    const __VLS_153 = __VLS_intrinsicElements["svg"];
                                    const __VLS_154 = __VLS_elementAsFunctionalComponent(__VLS_153);
                                    const __VLS_155 = __VLS_154({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), "aria-hidden": ("true"), focusable: ("false"), viewBox: ("0 0 24 24"), class: ("vt-switch-appearance-moon h-4 m-1 "), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
                                    ({}({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), "aria-hidden": ("true"), focusable: ("false"), viewBox: ("0 0 24 24"), class: ("vt-switch-appearance-moon h-4 m-1 "), }));
                                    {
                                        const __VLS_158 = __VLS_intrinsicElements["path"];
                                        const __VLS_159 = __VLS_elementAsFunctionalComponent(__VLS_158);
                                        const __VLS_160 = __VLS_159({ ...{}, d: ("M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"), }, ...__VLS_functionalComponentArgsRest(__VLS_159));
                                        ({}({ ...{}, d: ("M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"), }));
                                        const __VLS_161 = __VLS_pickFunctionalComponentCtx(__VLS_158, __VLS_160);
                                    }
                                    (__VLS_156.slots).default;
                                    const __VLS_156 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
                                }
                                (__VLS_151.slots).default;
                                const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150);
                            }
                            (__VLS_90.slots).default;
                            const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89);
                            let __VLS_91;
                        }
                        {
                            const __VLS_163 = {}.Avatar;
                            const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({ ...{}, image: ("https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"), shape: ("circle"), }));
                            ({}.Avatar);
                            const __VLS_165 = __VLS_164({ ...{}, image: ("https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"), shape: ("circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_164));
                            ({}({ ...{}, image: ("https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"), shape: ("circle"), }));
                            const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165);
                        }
                        (__VLS_70.slots).default;
                        const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69);
                    }
                    // @ts-ignore
                    [toggleThemeMod,];
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
            Menubar: Menubar,
            Avatar: Avatar,
            toggleThemeMod: toggleThemeMod,
            items: items,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
