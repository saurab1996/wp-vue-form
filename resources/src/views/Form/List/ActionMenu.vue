<template>
  <div>
    <Menu ref="MenuRef" id="action_menu" :model="actionItems" :popup="true" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { MenuItem } from 'primevue/menuitem';
import type { Ref } from 'vue';
import Menu from 'primevue/menu';
import { confirmBox } from '@/utils/helpers';
import { useConfirm } from "primevue/useconfirm";
import { useRouter  } from 'vue-router';
const router  = useRouter();
const confirm = useConfirm();
let rowData = reactive<any>({});
const MenuRef = ref<Menu | undefined>() as Ref<Menu | undefined>;// Initialize the MenuRef
const actionItems = reactive<MenuItem[]>(
  [
    {
      label: 'Actions',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-file-edit',
          severity: 'primary',
          command: () => {
            editForm();
          }
        },
        {
          label: 'View',
          icon: 'pi pi-eye',
          severity: 'info',
          command: () => {
            router.push({name : 'form-view', params:{ form_id: rowData?.id ? rowData.id : -1 } })
          }
        },
        {
          label: 'Submissions',
          icon: 'pi pi-comment',
          severity: 'secondary',
          command: () => {
            router.push({name : 'form-submission', params:{ form_id: rowData?.id ? rowData.id : -1 } })
          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          severity: 'danger',
          command: () => {
            deleteForm()
          }
        },
      ]
    }
  ]
);

const editForm = () => {
  confirmBox(confirm, '/form/1',{ message:'',acceptClass:'edit' },rowData);
}

const viewForm = () => {
  confirmBox(confirm, '/form/1',{ message:'',acceptClass:'view' },rowData);
}

const viewFormSubmission = () => {
  confirmBox(confirm, '/form/1',{ message:'', acceptClass:'viewSubmission' },rowData);
}

const deleteForm = ( ) => {
   confirmBox(confirm, '/form/1',{ message:'',acceptClass:'delete' },rowData);
}

const toggle = (event = {} as Event, data:Object ) => {
  rowData = data;
  MenuRef.value?.toggle(event);
}

defineExpose({
  toggle
})

</script>