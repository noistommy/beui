<script setup>
import * as codes from '@/codes/list'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { listProps } from '@/contents/props-data'

import { ref } from 'vue'
const optionList = [
  { id: 1, option: 'run', icon: 'xi-run' },
  { id: 2, option: 'bicycle', icon: 'xi-bicycle' },
  { id: 3, option: 'airplane', icon: 'xi-airplane' },
  { id: 4, option: 'car', icon: 'xi-car' },
  { id: 5, option: 'bus', icon: 'xi-bus' },
  { id: 6, option: 'taxi', icon: 'xi-taxi' },
]

const optionSubList = [
  { id: 1, option: 'car', icon: 'xi-car', sub: 'public' },
  { id: 2, option: 'bus', icon: 'xi-bus', sub: 'public' },
  { id: 3, option: 'taxi', icon: 'xi-taxi', sub: 'public' },
]

const selectList = [
  'mark',
  'bg',
  'text',
  'mark bg',
  'mark text',
  'bg text',
  'bg text mark',
]
const selectedType = ref('bg')
const selectedItem = ref(optionList[0])
</script>

<template>
  <div id="ListPage" class="page-wrapper be container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <div class="be-tag label deepblue">component</div>
          </div>
          <div class="contents-wrapper">
            <BeList :options="optionList"></BeList>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
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
        <PropsDataList :datas="listProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Selection</h4>
          <div class="desc">
            <div class="be-tag label">component</div>
          </div>
          <div class="contents-wrapper">
            <div class="coltroller" :style="{ width: '100%' }">
              <div class="be-buttons outline">
                <div
                  class="be-button"
                  v-for="item in selectList"
                  :key="item"
                  :class="{ selected: item === selectedType }"
                  @click="selectedType = item"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <BeList
              v-model="selectedItem"
              :options="optionList"
              :selection="true"
              :selected-type="selectedType"
            ></BeList>
          </div>
          <CodeBlock :code="codes.selection" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Sub Title</h4>
          <div class="desc">
            <div class="be-tag label">component</div>
          </div>
          <div class="contents-wrapper">
            <BeList :options="optionSubList"></BeList>
          </div>
          <CodeBlock :code="codes.sub_title" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">with Icon</h4>
          <div class="desc">
            <div class="be-tag label">component</div>
          </div>
          <div class="contents-wrapper">
            <BeList :options="optionList" :icon="true"></BeList>
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Border</h4>
          <div class="desc">
            <div class="be-tag label border">component</div>
          </div>
          <div class="contents-wrapper">
            <BeList :options="optionList" :border="true"></BeList>
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">with Image</h4>
          <div class="desc">
            <div class="be-tag label">component</div>
          </div>
          <div class="contents-wrapper">
            <BeList :options="optionList" :image="true"></BeList>
          </div>
          <CodeBlock :code="codes.image" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss">
#ListPage {
  .be-list {
    width: 250px;
    border: 1px solid #eee;
    & > .item {
      padding: 10px;
    }
  }
}
</style>
