<script setup>
import * as codes from '@/codes/buttons'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''

import { ref } from 'vue'
import { buttonsProps } from '@/contents/props-data'

const buttonList = ['Button A', 'Button B', 'Button C', 'Button D']
// const buttonList = [
//   { contentText: 'A' },
//   { contentText: 'B' },
//   { contentText: 'C' },
// ]

const selectedIndexA = ref(0)
const selectedIndexB = ref(0)
const selectedIndexC = ref(0)
</script>

<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4>Data Set</h4>
          <div class="desc"></div>
          <CodeBlock
            :code="codes.dataSet"
            lang="javascript"
            :border="false"
            :use-toggle="false"
          />
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList title="Button Group" :datas="buttonsProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Buttons</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButtons :buttons="buttonList" v-model="selectedIndexA" />
          </div>
          <CodeBlock :code="codes.buttons" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Buttons-Round</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButtons :buttons="buttonList" round v-model="selectedIndexB" />
          </div>
          <CodeBlock :code="codes.buttons_round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Buttons-Border</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButtons :buttons="buttonList" border v-model="selectedIndexC" />
          </div>
          <CodeBlock :code="codes.buttons_border" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
