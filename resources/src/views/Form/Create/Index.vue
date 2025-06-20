<template>
  <div class="flex min-h-screen">
      <!-- First div -->
      <div class="w-4/12 md:w-3/12 dark:text-white">
        <LeftSidebar></LeftSidebar>
      </div>
      <!-- Second div -->
      <div class="w-4/12 md:w-6/12 p-4">
        <Preview></Preview>
      </div>
      <!-- Third div -->
      <div class="w-4/12 md:w-3/12  dark:text-white text-left">
        <RightSidebar></RightSidebar>
      </div>
    </div> 
</template>
<script setup>
  import LeftSidebar from '@/views/Form/Create/LeftSidebar/Index.vue';
  import Preview from '@/views/Form/Create/Preview/Index.vue';
  import RightSidebar from '@/views/Form/Create/RightSidebar/Index.vue';
</script>