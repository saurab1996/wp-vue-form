<template>
  <Card class="!rounded-none min-h-screen">
    <template #title>
      <Toolbar>
        <template #start>
          Create {form_name} new submission  
        </template>
        <template #end>
          <RouterLink :to="{ name: 'form-submission',params:{ form_id: $route?.params?.form_id } }">
            <Button label="Back" icon="pi pi-arrow-left" size="small" />
          </RouterLink>
        </template>
      </Toolbar>
    </template>
    <template #content>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
</script>