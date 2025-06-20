<template>
  <div>
    <div class="pb-2">
      <IconField iconPosition="left">
        <InputIcon size="small">
          <i class="pi pi-search pt-0.5 text-black dark:text-white" />
        </InputIcon>
        <InputText
          placeholder="Search element"
          class="pl-10 placeholder:text-black dark:placeholder:text-white"
          size="small"
        />
      </IconField>
    </div>
    <div class="pb-2 flex justify-center">
      <div
        v-for="(tab, key) in tabList"
        :key="key"
        @click="tabClick(tab)"
        :class="calculateTabClass(tab, key)"
      >
        {{ LocalizeText(tab) }}
      </div>
    </div>
    <div class="pb-2">
      <div v-for="(tab, key) in tabList" :key="key">
        <component :is="tab" v-if="activeTab === tab"> </component>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import IconField from 'primevue/iconfield'
import InputText from 'primevue/inputtext'
import InputIcon from 'primevue/inputicon'
import { LocalizeText } from '@/utils/helpers'
const tabList = ['Fields', 'Static', 'Advanced', 'Layout'] as const
tabList.forEach((tab) => {
  import(`@/views/Form/Create/LeftSidebar/${tab}.vue`)
})
type TabType = (typeof tabList)[number]

const activeTab = ref<TabType>('Fields')

const tabClick = (tab: TabType) => {
  activeTab.value = tab
}

const calculateTabClass = (tab: TabType, tabIndex: Number): String => {
  const isActiveTab = tab === activeTab.value
  const isFirstTab = tabIndex === 0
  const isLastTab = tabIndex === tabList.length - 1

  const activeTabClass = isActiveTab
    ? 'bg-primary-400 text-white'
    : 'border-primary-400 border-2 dark:bg-surface-900'
  const tabIndexClass = isFirstTab
    ? 'rounded-l-md'
    : isLastTab
      ? 'rounded-r-md border-l-0'
      : 'border-l-0'

  return `p-1 px-4 ${activeTabClass} ${tabIndexClass}`
}
</script>
