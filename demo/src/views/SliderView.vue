<script setup>
import * as codes from '@/codes/slider'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { sliderProps } from '@/contents/props-data'

import { ref } from 'vue'
const colors = [
  'red',
  'orange',
  'yellow',
  'lightgreen',
  'green',
  'lightblue',
  'blue',
  'deepblue',
  'deeppurple',
  'purple',
  'brown',
  'gray',
]

const range = ref(new Array(13).fill(50))

const selectColor = ref('red')
</script>

<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4>Base</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeSlider v-model="range[0]" />
            <input type="range" v-model="range[0]" />{{ range[0] }}
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="sliderProps" />
      </template>
      <template #variants>
        <section>
          <h4>Disabled</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider v-model="range[1]" disabled />
          </div>
          <CodeBlock :code="codes.disabled" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Show Label (min, max)</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider v-model="range[2]" :show-label="true" />
          </div>
          <CodeBlock :code="codes.showLabel" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>User costum range (min, max)</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider
              v-model="range[3]"
              :show-label="true"
              :min="100"
              :max="200"
            />
          </div>
          <CodeBlock :code="codes.userLabel" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Show Tooltip</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider
              v-model="range[4]"
              :show-label="true"
              :show-tooltip="true"
            />
          </div>
          <CodeBlock :code="codes.tooltip" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Show Current Value</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider
              v-model="range[4]"
              :show-label="true"
              :show-value="true"
            />
          </div>
          <CodeBlock :code="codes.current" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>User custom Unit text</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider v-model="range[5]" :show-label="true" unit-text="%" />
            <BeSlider
              v-model="range[6]"
              :show-label="true"
              max="12"
              unit-text="시"
            />
            <BeSlider
              v-model="range[7]"
              :show-label="true"
              max="60"
              unit-text="분"
            />
          </div>
          <CodeBlock :code="codes.unit" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Track Thin type</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider
              v-model="range[8]"
              :show-label="true"
              track-type="normal"
            />
            <BeSlider v-model="range[9]" :show-label="true" track-type="thin" />
            <BeSlider v-model="range[10]" :show-label="true" track-type="fat" />
          </div>
          <CodeBlock :code="codes.trackType" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Show Step</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeSlider
              v-model="range[11]"
              :show-label="true"
              :show-step="true"
              :show-tooltip="true"
            />
          </div>
          <CodeBlock :code="codes.step" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Colors</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="color-picker" :style="{ width: '100%' }">
              <div
                class="be-tag dot"
                v-for="color in colors"
                :key="color"
                :class="[color, { select: selectColor === color }]"
                @click="selectColor = color"
              ></div>
            </div>
            <div :style="{ width: '600px' }">
              <BeSlider
                v-model="range[12]"
                :show-label="true"
                :color="selectColor"
                :show-tooltip="true"
              />
            </div>
          </div>
          <CodeBlock :code="codes.color" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
