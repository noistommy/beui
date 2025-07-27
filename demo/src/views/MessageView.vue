<script setup>
import * as codes from '@/codes/message'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { messageProps } from '@/contents/props-data'

import { ref } from 'vue'
const states = ['success', 'error', 'info', 'attention', 'importance']
const statusIcon = {
  success: 'xi-check-circle',
  info: 'xi-info',
  error: 'xi-emoticon-devil',
  attention: 'xi-warning',
  importance: 'xi-star',
}
const useIcon = ref(true)
</script>
<template>
  <div class="be container page-wrapper">
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-message">// 내용 //</div>
            <div class="be-message">
              <div class="title">Title text</div>
              <div class="contents">contents</div>
            </div>
          </div>
          <CodeBlock :code="codes.base_html" lang="html"></CodeBlock>
        </section>
        <section>
          <div class="desc">
            <div class="be-tag label deepblue">COMPONENT</div>
          </div>
          <div class="contents-wrapper">
            <BeMessage
              title="Component Title"
              contents="contents ..."
              icon="xi-info"
            />
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="messageProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">State Type</h4>
          <div class="desc">
            <div class="be-tag label deepblue">COMPONENT</div>
          </div>
          <div class="contents-wrapper">
            <div
              class="be-message"
              v-for="state in states"
              :key="state"
              :class="[state, 'icon']"
            >
              <i class="icon" :class="statusIcon[state]"></i>
              <div class="title">{{ state }} Title</div>
              <div class="contents">contents</div>
            </div>
          </div>
          <CodeBlock :code="codes.status" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Use Icon</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeCheckBox v-model="useIcon" label-text="use icon" />
            <div class="be-message" :class="{ icon: useIcon }">
              <i v-if="useIcon" class="icon xi-info"></i>
              <div class="title">Title text</div>
              <div class="contents">contents</div>
            </div>
            <BeMessage
              title="Component Title"
              contents="contents"
              state="success"
              :icon="useIcon"
              :disabled="true"
            />
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Message Group</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-messages">
              <div class="be-message icon selected">
                <i class="icon xi-info"></i>
                <div class="title">Selected</div>
                <div class="contents">contents</div>
              </div>
              <div class="be-message icon">
                <i class="icon xi-info"></i>
                <div class="title">Normal</div>
                <div class="contents">contents</div>
              </div>
              <div class="be-message icon disabled">
                <i class="icon xi-info"></i>
                <div class="title">Disabled</div>
                <div class="contents">contents</div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.msg_group" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Message List Group</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-messages list">
              <div class="be-message icon selected">
                <i class="icon xi-info"></i>
                <div class="title">Selected</div>
                <div class="contents">contents</div>
              </div>
              <div class="be-message icon">
                <i class="icon xi-info"></i>
                <div class="title">Normal</div>
                <div class="contents">contents</div>
              </div>
              <div class="be-message icon disabled">
                <i class="icon xi-info"></i>
                <div class="title">Disabled</div>
                <div class="contents">contents</div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.msg_group_list" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
<style lang="scss" scoped>
.be-message {
}
</style>
