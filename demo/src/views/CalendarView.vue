<script setup>
import * as codes from '@/codes/calendar'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { calendarProps } from '@/contents/props-data'

import { ref } from 'vue'

const selectedDate = ref(null)
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeCalendar></BeCalendar>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="calendarProps" />
      </template>
      <template #variants>
        <section>
          <h4>Border</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeCalendar border></BeCalendar>
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Header Control position</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeCalendar border symmetry></BeCalendar>
          </div>
          <CodeBlock :code="codes.symmetry" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>use Today</h4>
          <div class="desc">{{ selectedDate }}</div>
          <div class="contents-wrapper">
            <BeCalendar today @select="selectedDate = $event"></BeCalendar>
          </div>
          <CodeBlock :code="codes.today" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
