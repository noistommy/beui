<script setup>
import * as codes from '@/codes/input-number'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { inputNumberProps } from '@/contents/props-data'

import { ref } from 'vue'
const value = ref(new Array(10).fill(0))
const valueLimit = ref(10)
const valueStep = ref(0)
const valueFirst = ref(0)
</script>
<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <span class="be-tag label deepblue">component</span>
          </div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="valueFirst"></BeInputNumber>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="inputNumberProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Round</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="value[0]" round />
          </div>
          <CodeBlock :code="codes.round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Disabled</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="value[0]" disabled />
          </div>
          <CodeBlock :code="codes.disabled" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Controller position</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="value[1]" />
            <BeInputNumber v-model="value[2]" controller="end" />
          </div>
          <CodeBlock :code="codes.controller" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Min / Max</h4>
          <div class="desc">ex) min = 1 / max = 10</div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="valueLimit" :min="0" :max="10" />
          </div>
          <CodeBlock :code="codes.min_max" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Step</h4>
          <div class="desc">ex) step = 5</div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="valueStep" :step="5" />
          </div>
          <CodeBlock :code="codes.step" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">User Custom Icon</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeInputNumber
              v-model="value[3]"
              dec-icon="xi-angle-down"
              inc-icon="xi-angle-up"
            />
          </div>
          <CodeBlock :code="codes.userIcon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Fluid</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="value[4]" :fluid="true" />
          </div>
          <CodeBlock :code="codes.fluid" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Compact</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="value[5]" :compact="true" />
          </div>
          <CodeBlock :code="codes.compact" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Set width</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeInputNumber v-model="value[6]" :style="{ width: '150px' }" />
          </div>
          <CodeBlock :code="codes.setWidth" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
