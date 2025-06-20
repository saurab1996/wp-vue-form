<template>
  <Card class="!rounded-none min-h-screen">
    <template #title>
      <Toolbar>
        <template #start>
          Form list
        </template>
        <template #end>
          <RouterLink :to="{ name: 'form' }">
            <Button label="Back" icon="pi pi-arrow-left" size="small" />
          </RouterLink>
        </template>
      </Toolbar>
    </template>
    <template #content>
      <Table></Table>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Table from '@/views/Form/Submission/List/Table.vue'
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
</script>