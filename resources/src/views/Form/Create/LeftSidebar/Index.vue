<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="w-1/2" v-for="(tab,key) in tabList" :key="key" @click="tabClick(tab)">
        <p :class="'p-3 font-semibold text-center ' + (activeTab === tab ? ' bg-primary-400 text-white ' : ' ')" > {{LocalizeText(tab)}} </p>
      </div>
    </div>
    <hr>
    <div v-if="activeTab === 'elements'" class="p-4">
      <ElementList></ElementList>
    </div>
    <div v-else-if="activeTab === 'tabs'" class="p-4">
      <Tree></Tree>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import { LocalizeText } from '@/utils/helpers';
import ElementList from '@/views/Form/Create/LeftSidebar/ElementList.vue';
import Tree from '@/views/Form/Create/LeftSidebar/Tree.vue';
const tabList = ['elements', 'tabs'] as const;
type TabType = typeof tabList[number];

const activeTab = ref<TabType>('elements');

const tabClick = (tab: TabType) => {
  activeTab.value = tab;
}
</script>