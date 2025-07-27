<script setup>
import * as codes from '@/codes/checkbox'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { checkboxProps } from '@/contents/props-data'

import { ref } from 'vue'

// const radioValue = ref(1)
const compValue = ref(true)
const compValue1 = ref(true)
const compCheck = ref(true)
const compRadio = ref(true)
const cbValue = ref([true, false, false, true])
</script>

<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4 class="title">Base</h4>
          <div class="desc">
            <span class="be-tag label lightblue">HTML</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-checkbox" :class="{ checked: cbValue[0] }">
              <input type="checkbox" id="checkbox1" v-model="cbValue[0]" />
              <label for="checkbox1">Checkbox1</label>
            </div>
            <div class="be-checkbox" :class="{ checked: cbValue[1] }">
              <input type="checkbox" id="checkbox2" v-model="cbValue[1]" />
              <label for="checkbox2">Checkbox2</label>
            </div>
            <div class="be-checkbox" :class="{ checked: cbValue[2] }">
              <input type="checkbox" id="checkbox3" v-model="cbValue[2]" />
              <label for="checkbox3">Checkbox3</label>
            </div>
            <div class="be-checkbox indeter" :class="{ checked: cbValue[3] }">
              <input type="checkbox" id="checkbox4" v-model="cbValue[3]" />
              <label for="checkbox4">Checkbox Indeter</label>
            </div>
          </div>
          <CodeBlock :code="codes.base_html" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Base(Component)</h4>
          <div class="desc">
            <span class="be-tag label deepblue">component</span>
          </div>
          <div class="contents-wrapper">
            <BeCheckBox
              v-model="compValue"
              id="checkComp"
              label-text="component"
            />
            <BeCheckBox
              v-model="compValue1"
              type="radio"
              id="checkComp"
              label-text="component"
            />
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="checkboxProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Type</h4>
          <div class="desc">
            <span class="be-tag label deepblue">component</span>
          </div>
          <div class="contents-wrapper">
            <BeCheckBox
              v-model="compCheck"
              id="checkComp"
              label-text="Checkbox type"
            />
            <BeCheckBox
              v-model="compRadio"
              type="radio"
              id="checkComp"
              label-text="Radio type"
            />
          </div>
          <CodeBlock :code="codes.type" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Indeterminate</h4>
          <div class="desc">
            <span class="be-tag label deepblue">component</span>
          </div>
          <div class="contents-wrapper">
            <BeCheckBox
              v-model="compValue"
              id="checkComp"
              label-text="component"
              :indeter="true"
            />
          </div>
          <CodeBlock :code="codes.indeter" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
