<script setup>
import * as codes from '@/codes/selectbox'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { selectboxProps } from '@/contents/props-data'

import { ref } from 'vue'
const options = [
  { id: 1, option: 'Run', icon: 'xi-run', val: 'run' },
  { id: 2, option: 'Bicycle', icon: 'xi-bicycle', val: 'bicycle' },
  { id: 3, option: 'Airplane', icon: 'xi-airplane', val: 'airplane' },
  { id: 4, option: 'Public:car', icon: 'xi-car', val: 'car' },
  { id: 5, option: 'Public:bus', icon: 'xi-bus', val: 'bus' },
  { id: 6, option: 'Public:taxi', icon: 'xi-taxi', val: 'taxi' },
]
const labels = [
  { id: 11, label: 'run', icon: 'xi-run', val: 'run' },
  { id: 12, label: 'bicycle', icon: 'xi-bicycle', val: 'bicycle' },
  { id: 13, label: 'airplane', icon: 'xi-airplane', val: 'airplane' },
  { id: 14, label: 'public:car', icon: 'xi-car', val: 'car' },
  { id: 15, label: 'public:bus', icon: 'xi-bus', val: 'bus' },
  { id: 16, label: 'public:taxi', icon: 'xi-taxi', val: 'taxi' },
]
const result = ref(null)
let resultList = ref(null)
const resultVal = ref(null)
const resultOpt = ref(null)
const setResult = (name, payload) => {
  result.value = payload
}
const setSelect = (payload) => {
  resultList.value = payload
}
const setResultVal = (payload) => {
  resultVal.value = payload
}
const setResultOpt = (payload) => {
  resultOpt.value = payload
}
</script>

<template>
  <div class="page-wrapper">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4 class="title">Base(single)</h4>
          <div class="desc">
            <span class="be-tag label deepblue">Component</span>
          </div>
          <div class="contents-wrapper">
            <BeSelectBox :options />
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Base(multiple)</h4>
          <div class="desc">
            <span class="be-tag label deepblue">Component</span>
          </div>
          <div class="contents-wrapper">
            <div class="selected-list">
              <span class="be-tag label" v-for="item in resultList" :key="item">
                {{ item }}
              </span>
            </div>
            <BeSelectBox
              :is-search="true"
              :options
              multiple
              max-opt-height=""
              result-key="option"
              @select="setSelect"
            />
          </div>
          <CodeBlock :code="codes.multiple" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Data Set</h4>
          <div class="desc"></div>
          <CodeBlock
            :code="codes.dataSet"
            lang="javascript"
            :border="false"
            :use-toggle="false"
          ></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="selectboxProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Use All(only multiple)</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="selected-list">
              <span class="be-tag label" v-for="item in resultList" :key="item">
                {{ item }}
              </span>
            </div>
            <BeSelectBox
              :is-all="true"
              :is-search="true"
              :options
              :multiple="true"
              max-opt-height=""
              result-key="option"
              @select="setSelect"
            />
          </div>
          <CodeBlock :code="codes.use_all" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Search & Filtering</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options :is-search="true" />
          </div>
          <CodeBlock :code="codes.filtering" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Dropdown Type</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options />
          </div>
          <CodeBlock :code="codes.dropdown_type" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Float Type</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options box-type="float" />
          </div>
          <CodeBlock :code="codes.float_type" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Selected Type</h4>
          <div class="desc">mark, test, bg 스타일을 조합하여 사용한다</div>
          <div class="contents-wrapper">
            <div class="wrapper">
              <h5>mark 타입</h5>
              <BeSelectBox :options selected-type="mark" />
            </div>
            <div class="wrapper">
              <h5>text 타입</h5>
              <BeSelectBox :options selected-type="text" />
            </div>
            <div class="wrapper">
              <h5>bg 타입</h5>
              <BeSelectBox :options selected-type="bg" />
            </div>
            <div class="wrapper">
              <h5>bg + mark 타입</h5>
              <BeSelectBox :options selected-type="bg mark" />
            </div>
            <div class="wrapper">
              <h5>text + mark 타입</h5>
              <BeSelectBox :options selected-type="text mark" />
            </div>
            <div class="wrapper">
              <h5>text + bg 타입</h5>
              <BeSelectBox :options selected-type="text bg" />
            </div>
          </div>
          <CodeBlock :code="codes.selected_type" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Use Icon</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options :use-icon="true" />
          </div>
          <CodeBlock :code="codes.use_icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Placeholder</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options placeholder="아무거나 선택하세요." />
          </div>
          <CodeBlock :code="codes.placeholder" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Compact</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options class="compact" />
          </div>
          <CodeBlock :code="codes.compact" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Option Limit Height</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options max-opt-height="120" />
          </div>
        </section>
        <CodeBlock :code="codes.customHeight" lang="vue-html"></CodeBlock>
        <section>
          <h4 class="title">User Custom Option Key</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options="labels" option-key="label" />
          </div>
          <CodeBlock :code="codes.custom_option" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Result Key</h4>
          <div class="desc"></div>
          <div class="result">
            val: {{ resultVal }} | option: {{ resultOpt }}
          </div>
          <div class="contents-wrapper">
            <BeSelectBox
              :options
              placeholder="Result: val"
              result-key="val"
              @select="setResultVal"
            />
            <BeSelectBox
              :options
              placeholder="Result: option"
              result-key="option"
              @select="setResultOpt"
            />
          </div>
          <CodeBlock :code="codes.custom_result" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Emit</h4>
          <div class="desc">emit:select</div>
          <div class="contents-wrapper">
            <BeSelectBox :options @select="setResult" />
          </div>
          {{ result }}
          <CodeBlock :code="codes.emit" lang="vue-html"></CodeBlock>
        </section>
        <!-- <section>
          <h4 class="title">Model</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSelectBox :options :multiple="true" v-model="resultList" />
          </div>
          {{ result }}
        </section> -->
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss">
.selected-list {
  width: 100%;
}
</style>
