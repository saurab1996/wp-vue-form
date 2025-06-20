import { createRouter, createWebHashHistory } from 'vue-router';
// layouts
import MainLayout from '@/layout/Main.vue';
import DashboardPage from '@/views/Dashboard/Index.vue';
import FormLayout from '@/views/Form/Index.vue';
import FormList from '@/views/Form/List/Index.vue';
import FormCreate from '@/views/Form/Create/Index.vue';
import FormEdit from '@/views/Form/Edit/Index.vue';
import FormSubmissionLayout from '@/views/Form/Submission/Index.vue';
import FormSubmissionList from '@/views/Form/Submission/List/Index.vue';
import FormSubmissionCreate from '@/views/Form/Submission/Create/Index.vue';
import FormSubmissionEdit from '@/views/Form/Submission/Edit/Index.vue';
import SettingPage from '@/views/Setting/Index.vue';
const router = createRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainLayout,
            meta: {
                label: 'Main Page',
                parent: { name: 'home' }
            },
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: DashboardPage,
                    meta: {
                        label: 'Main page',
                        parent: { name: 'home' }
                    },
                },
                {
                    path: '/form/',
                    name: '',
                    component: FormLayout,
                    meta: {
                        label: 'Form layout',
                        parent: { name: 'dashboard' }
                    },
                    children: [
                        {
                            path: '',
                            name: 'form',
                            component: FormList,
                            meta: {
                                label: 'Form page',
                                parent: { name: 'dashboard' }
                            },
                        },
                        {
                            path: 'create/',
                            name: 'form-create',
                            component: FormCreate,
                            meta: {
                                label: 'Create form page',
                                parent: { name: 'form' }
                            },
                        },
                        {
                            path: 'edit/:form_id/',
                            name: 'form-edit',
                            component: FormEdit,
                            meta: {
                                label: 'Edit form page',
                                parent: { name: 'form' }
                            },
                        },
                        {
                            path: '/view/:form_id/',
                            name: 'form-view',
                            component: FormEdit, // or the appropriate component for viewing forms
                            meta: {
                                label: 'View form page',
                                parent: { name: 'form' }
                            },
                        },
                        {
                            path: ':form_id/submission/',
                            name: '',
                            component: FormSubmissionLayout,
                            meta: {
                                label: 'Form submission layout',
                                parent: { name: 'form' }
                            },
                            children: [
                                {
                                    path: '',
                                    name: 'form-submission',
                                    component: FormSubmissionList,
                                    meta: {
                                        label: 'Form submission page',
                                        parent: { name: 'form' }
                                    },
                                },
                                {
                                    path: 'create/',
                                    name: 'form-submission-create',
                                    component: FormSubmissionCreate,
                                    meta: {
                                        label: 'Form submission create page',
                                        parent: { name: 'form-submission' }
                                    },
                                },
                                {
                                    path: ':submission_id/view/',
                                    name: 'form-submission-view',
                                    component: FormSubmissionEdit, // or the appropriate component for viewing submissions
                                    meta: {
                                        label: 'Form submission view page',
                                        parent: { name: 'form-submission' }
                                    },
                                },
                            ]
                        },
                    ]
                },
                {
                    path: 'setting/',
                    name: 'setting',
                    component: SettingPage,
                    meta: {
                        label: 'Setting page',
                        parent: { name: 'home' }
                    },
                }
            ]
        },
    ]
});
export default router;
