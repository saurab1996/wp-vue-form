<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="w-1/2" v-for="(tab,key) in tabList" :key="key" @click="tabClick(tab)">
        <p :class="'p-3 font-semibold text-center ' + (activeTab === tab ? ' bg-primary-400 text-white ' : ' ')" > {{LocalizeText(tab)}} </p>
      </div>
    </div>
    <hr>
    <div v-if="activeTab === 'settings'" class="p-2">
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>
    <div v-else-if="activeTab === 'themes'" class="p-2">
      <p class="m-0">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import { LocalizeText } from '@/utils/helpers';
const tabList = ['settings', 'themes'] as const;
type TabType = typeof tabList[number];

const activeTab = ref<TabType>('settings');

const tabClick = (tab: TabType) => {
  activeTab.value = tab;
}
</script>