import './assets/main.css'
import 'primeicons/primeicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import App from './App.vue'
import router from './router'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';

const app = createApp(App)

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
    ripple: true 
});

app.use(createPinia())
app.use(router)
app.use(ConfirmationService)
app.use(ToastService)
app.directive('ripple', Ripple);

app.mount('#wpVueFormDashboard');