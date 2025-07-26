<script setup>
import * as codes from '@/codes/calendar'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'

import { ref } from 'vue'
const userDate = ref('2025-06-30')
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4>Base</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeDatePicker
              :selected-date="userDate"
              @select="console.log($event)"
            ></BeDatePicker>
          </div>
          <CodeBlock :code="codes.datePicker" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
