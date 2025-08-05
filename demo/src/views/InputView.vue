<script setup>
import * as codes from '@/codes/input'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { inputProps } from '@/contents/props-data'

import { ref } from 'vue'
const placeholder = '입력하세요'
const editMode = ref(false)

const inputValue = ref('init')
</script>
<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <span class="be-tag label lightblue">HTML</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input">
              <input type="text" :placeholder="placeholder" />
            </div>
          </div>
          <CodeBlock :code="codes.base_html" lang="html"></CodeBlock>
        </section>
        <section>
          <div class="desc">
            <span class="be-tag label deepblue">Component</span>
          </div>
          <div class="contents-wrapper">
            <BeInput v-model="inputValue" :placeholder="placeholder"></BeInput>
            Result: {{ inputValue }}
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="inputProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Disabled</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input disabled">
              <input type="text" :placeholder="placeholder" disabled />
            </div>
            <BeInput :disabled="true" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.disabled" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Readonly</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input readonly">
              <input type="text" readonly :placeholder="placeholder" />
            </div>
            <BeInput :readonly="true" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.readonly" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Round</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <BeInput :round="true" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Underline</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input underline">
              <input type="text" :placeholder="placeholder" />
            </div>
            <BeInput :underline="true" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.underline" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Transparent</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input transparent">
              <input type="text" :placeholder="placeholder" />
            </div>
            <BeInput :transparent="true" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.transparent" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Compact</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input compact">
              <input type="text" :placeholder="placeholder" />
            </div>
            <BeInput :compact="true" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.compact" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Edit</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input edit">
              <input type="text" placeholder="일반 모드" />
            </div>
            <div class="be-input edit editable">
              <input type="text" placeholder="수정 모드" />
            </div>
            <BeInput
              :edit="true"
              :edit-mode="editMode"
              :placeholder="placeholder"
            />
            <div class="be-button" @click="editMode = !editMode">
              EDIT {{ editMode ? 'OFF' : 'ON' }}
            </div>
          </div>
          <CodeBlock :code="codes.edit" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Status</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input success">
              <input type="text" placeholder="success mode" />
            </div>
            <div class="be-input danger">
              <input type="text" placeholder="danger mode" />
            </div>
            <BeInput status="success" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.status" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Fluid</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input fluid">
              <input type="text" :placeholder="placeholder" />
            </div>
            <BeInput :fluid="true" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.fluid" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Unit</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
            1글자 unit만 적용 (대, 개, 월, 일, 명, 년...)
          </div>
          <div class="contents-wrapper">
            <div class="be-input unit" data-unit="대">
              <input
                type="text"
                :placeholder="placeholder"
                class="align-right"
              />
            </div>
            <BeInput unit="명" :placeholder="placeholder" />
          </div>
          <CodeBlock :code="codes.unit" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Icon</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input icon left">
              <i class="icon xi-search"></i>
              <input type="text" :placeholder="placeholder" />
            </div>
            <div class="be-input icon right">
              <input type="text" :placeholder="placeholder" />
              <i class="icon xi-close"></i>
            </div>
            <div class="be-input icon both">
              <i class="icon xi-search"></i>
              <input type="text" :placeholder="placeholder" />
              <i class="icon xi-close"></i>
            </div>
            <BeInput
              icon-left="users"
              icon-right="lock"
              :placeholder="placeholder"
            />
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Clear Icon</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
            입력값을 초기화 하기 위한 버튼 제공
          </div>
          <div class="contents-wrapper">
            <BeInput :clear="true" />
          </div>
          <CodeBlock :code="codes.clearIcon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Badge</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-input badge">
              <input type="text" :placeholder="placeholder" />
              <span class="be-badge red">R</span>
            </div>
            <BeInput badge="10" badge-option="blue" />
          </div>
          <CodeBlock :code="codes.badge" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Label</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-input labeled right">
              <input type="text" :placeholder="placeholder" />
              <label>$</label>
            </div>
            <div class="be-input labeled left">
              <input type="text" :placeholder="placeholder" />
              <label>Name</label>
            </div>
          </div>
          <CodeBlock :code="codes.label" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Button</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-input button left">
              <input type="text" :placeholder="placeholder" />
              <button class="be-button primary">Save</button>
            </div>
            <div class="be-input button right">
              <input type="text" :placeholder="placeholder" />
              <button class="be-button icon">
                <i class="ixon xi-upload"></i>
              </button>
            </div>
          </div>
          <CodeBlock :code="codes.button" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Textarea</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-input fluid">
              <textarea type="text" :placeholder="placeholder"></textarea>
            </div>
            <div class="be-input fluid short">
              <textarea type="text" :placeholder="placeholder"></textarea>
            </div>
          </div>
          <CodeBlock :code="codes.textarea" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
