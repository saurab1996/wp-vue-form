import '../assets/frontend/main.css'

import { createApp } from 'vue'
import App from './App.vue';
import Vueform from '@vueform/vueform';
import vueformConfig from '../../vueform.config';
const WPVueForms = document.querySelectorAll('.wpVueFormFrontend');
if (WPVueForms.length > 0) {
  // Mount Vue application with props
  WPVueForms.forEach(element => {
    const formId = element.getAttribute('data-form-id');
    if (formId !== null) {
      const parsedFormId = parseInt(formId);
      if (!isNaN(parsedFormId) && parsedFormId > 0) {
        const app = createApp(App,
          { formId: parsedFormId }
        );
        app.use(Vueform, vueformConfig)
        app.mount(element);
      }
    }
  });

}