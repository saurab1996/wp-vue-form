<script setup lang="ts">
import { RouterView } from 'vue-router';
import Toast from 'primevue/toast';
import ConfirmBox from '@/components/ConfirmBox.vue';
</script>

<template>
  <Toast />
  <ConfirmBox/>
  <RouterView />
</template>