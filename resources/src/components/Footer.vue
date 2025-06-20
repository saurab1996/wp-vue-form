<template>
  <!-- <div class=" sticky bottom-0 flex justify-center gap-2 text-center p-2  bg-surface-50 dark:bg-surface-700 border border-surface-200 dark:border-surface-700">
    © {{currentYear}} <a href="https://flowbite.com/" class="text-primary-400">Flowbite™</a>. All Rights Reserved.
    </div> -->
</template>
<script setup>
import {ref, onMounted} from 'vue';

const currentYear = ref('');
onMounted( () => {
  const now = new Date();
  currentYear.value = now.getFullYear();
})
</script>