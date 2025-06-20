<template>
  <div>
    <div class="">
      <Breadcrumb :home="home" :model="items">
        <template #item="{ item, props }">
          <router-link v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </Breadcrumb>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    route: '/introduction'
});
const items = ref([
    { label: 'Components',route: '/inputtext' },
    { label: 'Form' ,route: '/inputtext'},
    { label: 'InputText', route: '/inputtext' }
]);
</script>