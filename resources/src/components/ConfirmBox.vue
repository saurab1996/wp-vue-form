<template>
  <div>
    <ConfirmDialog>
      <template #container="{ message, acceptCallback, rejectCallback }">        
        <div class="flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md">
          <div
            :class="iconColor(message?.acceptClass) + ' rounded-full text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]'">
            <i :class=" message?.icon +' text-5xl text-white'"></i>
          </div>
          <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
          <p class="mb-0">{{ message.message }}</p>
          <div class="flex items-center gap-2 mt-4">
            <Button :label="message?.acceptLabel" @click="acceptCallback" class="w-[8rem] text-white dark:text-white" :severity="buttonSeverity(message?.acceptClass)"></Button>
            <Button :label="message?.rejectLabel" outlined @click="rejectCallback" class="w-[8rem]  dark:text-white" :severity="buttonSeverity(message?.acceptClass)"></Button>
          </div>
        </div>
      </template>
    </ConfirmDialog>
  </div>
</template>
<script setup lang="ts">
import ConfirmDialog from 'primevue/confirmdialog';
import Button from 'primevue/button';
const iconColor = (value: string): string => {
  const color: { [key: string]: string } = {
    'delete': 'bg-red-400'
  };

  return color[value] || 'bg-primary-400';
};

const buttonSeverity = (value: string): string | undefined => {
  const color: { [key: string]: string } = {
    'delete': 'danger',
  };

  return color[value] || undefined;
};

</script>