<script setup>
import * as codes from '@/codes/checkbox'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { checkboxGroupProps, radioProps } from '@/contents/props-data'

import { ref } from 'vue'

const checkList = ['Run', 'Walk', 'Fly']
// const checkList = [
//   { label: 'Run', value: false },
//   { label: 'Walk', value: false },
//   { label: 'Fly', value: false },
// ]
const result = ref(['Run'])
const resultRadio = ref('Run')
const setResult = (payload) => {
  console.log('checkbox', payload)
}
const setResultRadio = (payload) => {
  console.log('radio', payload)
  // resultRadio.value = payload
}
</script>

<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <PageContainer>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList title="Checkbox Group" :datas="checkboxGroupProps" />
        <PropsDataList title="Radio" :datas="radioProps" />
      </template>
      <template #extention>
        <section>
          <h4 class="title">CheckBox Group</h4>
          <div class="desc">
            <span class="be-tag label deepblue">component</span>
          </div>
          <div class="contents-wrapper">
            <BeCheckBoxGroup
              :check-list="checkList"
              v-model:result="result"
              @update:result="setResult"
            />
            [
            <div class="be-tag label" v-for="re in result" :key="re">
              {{ re }}
            </div>
            ]
          </div>
          <CodeBlock :code="codes.checkbox_group" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Radio</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <BeRadio
              :option-list="checkList"
              v-model:result="resultRadio"
              @update:result="setResultRadio"
            ></BeRadio>
            <div class="be-tag label">
              {{ resultRadio }}
            </div>
          </div>
          <CodeBlock :code="codes.radios" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
