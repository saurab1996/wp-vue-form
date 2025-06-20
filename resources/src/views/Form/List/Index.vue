<template>
  <Card class="!rounded-none min-h-screen">
    <template #title>
      <Toolbar>
        <template #start>
          Form list
        </template>
        <template #end>
          <RouterLink :to="{ name: 'form-create' }">
            <Button label="Add new" icon="pi pi-plus" size="small" />
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
import Table from '@/views/Form/List/Table.vue'
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
</script>