<script setup>
import * as codes from '@/codes/tabs'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { tabsProps } from '@/contents/props-data'

import { ref } from 'vue'
const optionList = [
  { id: 1, option: 'run', icon: 'xi-run' },
  { id: 2, option: 'bicycle', icon: 'xi-bicycle' },
  { id: 3, option: 'airplane', icon: 'xi-airplane' },
  { id: 4, option: 'car', icon: 'xi-car' },
  { id: 5, option: 'bus', icon: 'xi-bus' },
  { id: 6, option: 'taxi', icon: 'xi-taxi' },
]

const selectedTab = ref('run')
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-tabs">
              <div class="tab-menu">
                <div
                  class="tab-item tab"
                  v-for="tab in optionList"
                  :key="tab"
                  :class="{ active: tab.option === selectedTab }"
                  @click="selectedTab = tab.option"
                >
                  {{ tab.option }}
                </div>
              </div>
              <div class="tab-contents">
                {{ selectedTab }}
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_html" lang="html"></CodeBlock>
        </section>
        <section>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeTabs :tab-list="optionList" v-model="selectedTab">
              {{ selectedTab }}
            </BeTabs>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="tabsProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Vertical</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTabs
              :tab-list="optionList"
              v-model="selectedTab"
              :vertical="true"
            >
              {{ selectedTab }}
            </BeTabs>
          </div>
          <CodeBlock :code="codes.vertical" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Active with line</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTabs
              :tab-list="optionList"
              v-model="selectedTab"
              tab-type="line"
            >
              {{ selectedTab }}
            </BeTabs>
          </div>
          <CodeBlock :code="codes.tab_type_line" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Type - Button</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTabs
              :tab-list="optionList"
              v-model="selectedTab"
              tab-type="button"
            >
              {{ selectedTab }}
            </BeTabs>
          </div>
          <CodeBlock :code="codes.tab_type_button" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Type - Browser</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tabs browser">
              <BeTabs
                :tab-list="optionList"
                v-model="selectedTab"
                tab-type="browser"
              >
                {{ selectedTab }}
              </BeTabs>
            </div>
          </div>
          <CodeBlock :code="codes.tab_type_browser" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss"></style>
