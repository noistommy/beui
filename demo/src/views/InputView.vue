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

const inputValue = ref('inserted value')
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
          <h4 class="title">Use Label</h4>
          <div class="desc">
            <span class="be-tag label">component</span>
            <!-- <p>label적용은 placeholder 역할을 함꼐 하기 때문에 placeholder 값을 주기 않아야 한다</p> -->
          </div>
          <div class="contents-wrapper">
            <div class="be-input">
              <label>Title</label>
              <input type="text" placeholder=" " />
            </div>
            <BeInput label="Title" v-model="inputValue" />
          </div>
          <CodeBlock :code="codes.useLabel" lang="vue-html"></CodeBlock>
        </section>
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
            <BeInput
              :underline="true"
              :placeholder="placeholder"
              label="underline"
            />
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
              label="edit mode"
            />
            <div class="be-button icon" @click="editMode = !editMode">
              <!-- {{ editMode ? 'OFF' : 'ON' }} -->
              <i class="xi-check" v-if="editMode"></i>
              <i class="xi-pen" v-else></i>
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
              label="icon title"
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
            <BeInput :clear="true" icon-right="eye" />
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
              <span class="label">$</span>
            </div>
            <div class="be-input labeled left">
              <input type="text" :placeholder="placeholder" />
              <span class="label">Name</span>
            </div>
            <BeInput :labeled="true" attach-start>
              <!-- <template #end>
              </template> -->
              <div class="label">END</div>
              <input type="text" :placeholder="placeholder" />
            </BeInput>
          </div>
          <CodeBlock :code="codes.label" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Button</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-input withButton left">
              <input type="text" :placeholder="placeholder" />
              <button class="be-button primary">Save</button>
            </div>
            <div class="be-input withButton right">
              <input type="text" :placeholder="placeholder" />
              <button class="be-button icon">
                <i class="ixon xi-upload"></i>
              </button>
            </div>
            <BeInput :with-button="true" attach-start>
              <!-- <template #end>
              </template> -->
              <div class="be-button primary">Start</div>
              <input
                type="text"
                :placeholder="placeholder"
                label="test label"
              />
            </BeInput>
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
            <BeInput
              type="textarea"
              :placeholder="placeholder"
              label="Textarea Label"
              fluid
            ></BeInput>
          </div>
          <CodeBlock :code="codes.textarea" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
