<script setup>
import * as codes from '@/codes/form'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'

import { ref } from 'vue'

const compValue = ref(true)
const options = [
  { id: 1, option: 'Run', icon: 'xi-run', val: 'run' },
  { id: 2, option: 'Bicycle', icon: 'xi-bicycle', val: 'bicycle' },
  { id: 3, option: 'Airplane', icon: 'xi-airplane', val: 'airplane' },
  { id: 4, option: 'Public:car', icon: 'xi-car', val: 'car' },
  { id: 5, option: 'Public:bus', icon: 'xi-bus', val: 'bus' },
  { id: 6, option: 'Public:taxi', icon: 'xi-taxi', val: 'taxi' },
]
const checkList = ['Run', 'Walk', 'Fly']
</script>
<template>
  <div class="be container page-wrapper">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <span class="be-tag label lightblue">HTML</span>
          </div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="header">
                <div class="title">Form Title</div>
                <div class="desc">Form description</div>
              </div>
              <div class="fields">
                <legend>Field title</legend>
                <div class="field">
                  <label for="">Label</label>
                  <BeInput placeholder="Base Form" />
                  <div class="help-text">helper text</div>
                </div>
                <div class="divider"></div>
                <div class="field">
                  <label for="">Label</label>
                  <BeInput placeholder="Base Form" />
                  <div class="extra">
                    <BeCheckBox id="checkComp" label-text="with checkbox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base" lang="html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <span class="be-tag label lightblue">HTML</span> 으로만 정의된
        컴포넌트입니다.
      </template>
      <template #variants>
        <section>
          <h4 class="title">Form Header</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="header">
                <div class="title">Form Title</div>
                <div class="desc">Form description</div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_title" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Inline</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="field inline">
                <label for="">Label</label>
                <BeInput placeholder="Base Form" />
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_inline" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Use Label</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="field">
                <label for="">Label</label>
                <BeInput placeholder="with Label" />
              </div>
              <div class="field">
                <BeInput placeholder="Without Label" />
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_use_label" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Disabled</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="field disabled">
                <label for="">Label</label>
                <BeInput placeholder="Disabled" disabled />
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_disabled" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Fields</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="fields">
                <div class="legend">Fields</div>
                <div class="field" v-for="fi in 3" :key="fi">
                  <label for="">Label {{ fi }}</label>
                  <BeInput :placeholder="`Label ${fi}`" />
                </div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_group" lang="html"></CodeBlock>
        </section>

        <section>
          <h4 class="title">Fields Divide</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="fields grid divide-3">
                <div class="field column" v-for="fi in 3" :key="fi">
                  <label for="">field {{ fi }}</label>
                  <input type="text" :placeholder="`Field ${fi}`" />
                </div>
              </div>
              <div class="fields grid divide-4">
                <div class="field column" v-for="fi in 4" :key="fi">
                  <label for="">field {{ fi }}</label>
                  <input type="text" :placeholder="`Field ${fi}`" />
                </div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_grid_divide" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Fields Widths</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="fields grid">
                <div
                  class="column field"
                  v-for="fi in [2, 6, 4]"
                  :key="fi"
                  :class="`span-${fi}`"
                >
                  <label for="">field {{ fi }}</label>
                  <input type="text" :placeholder="`Field ${fi}`" />
                </div>
              </div>
              <div class="fields grid">
                <div
                  class="field column"
                  v-for="fi in [2, 7, 3]"
                  :key="fi"
                  :class="`span-${fi}`"
                >
                  <label for="">field {{ fi }}</label>
                  <input type="text" :placeholder="`Field ${fi}`" />
                </div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_grid_widths" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Textarea</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="field">
                <label for="">textarea label</label>
                <BeInput type="textarea" placeholder="textarea large" fluid />
              </div>
              <div class="field short">
                <label for="">textarea label</label>
                <BeInput type="textarea" placeholder="textarea large" fluid />
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_textarea" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Base with Comp</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-form">
              <div class="field">
                <label for="">Input</label>
                <BeInput placeholder="with be-input" />
              </div>
              <div class="field">
                <label for="">Selectbox</label>
                <BeSelectBox :options placeholder="with be-selectbox" />
              </div>
              <div class="field">
                <label for="">Checkbox</label>
                <BeCheckBox
                  v-model="compValue"
                  id="checkComp"
                  label-text="Be-Checkbox"
                />
              </div>
              <div class="field">
                <label for="">Radio</label>
                <BeRadio :option-list="checkList" />
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.base_comp" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss" scoped>
.contents-wrapper {
  display: block;
}
.be-form {
}
</style>
