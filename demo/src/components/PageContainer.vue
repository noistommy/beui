<script setup>
import { ref } from 'vue'
const optionList = [
  { id: 1, option: 'Usage', icon: 'xi-run' },
  { id: 2, option: 'Props', icon: 'xi-bicycle' },
]
const selectedTab = ref('Usage')
</script>
<template>
  <div class="base">
    <slot name="base"></slot>
  </div>
  <!-- <div class="infomation">
    <BeTabs :tab-list="optionList" v-model="selectedTab" tab-type="line">
      <h1 class="title">{{ selectedTab }}</h1>
      <template v-if="selectedTab === 'Usage'">
        <slot name="usage"></slot>
      </template>
      <template v-if="selectedTab === 'Props'">
        <slot name="props"></slot>
      </template>
    </BeTabs>
  </div> -->
  <div class="variants">
    <h1 class="title">Variants</h1>
    <slot name="variants"></slot>
  </div>
  <slot name="extention"></slot>
</template>
