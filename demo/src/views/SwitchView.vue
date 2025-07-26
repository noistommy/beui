<script setup>
import * as codes from '@/codes/switch'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'

import { ref, computed } from 'vue'
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

const cbValue = ref(new Array(12).fill(true))
const selectColor = ref(null)
const setSwitch = computed(() => {
  return cbValue
})
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4 class="title">Base A</h4>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
            <div class="be-tag label deepblue">component</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-switch slide" @click="cbValue[0] = !cbValue[0]">
              <input type="checkbox" :checked="cbValue[0]" />
              <span class="switch"></span>
            </div>
            <BeSwitch type="slide" v-model="cbValue[1]" />
          </div>
          <CodeBlock :code="codes.base_a" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Base B</h4>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
            <div class="be-tag label deepblue">component</div>
          </div>
          <div class="contents-wrapper">
            <div
              class="be-switch slide inside"
              @click="cbValue[2] = !cbValue[2]"
            >
              <input type="checkbox" :checked="cbValue[2]" />
              <span class="switch"></span>
            </div>
            <BeSwitch type="slide" :inside="true" v-model="cbValue[3]" />
          </div>
          <CodeBlock :code="codes.base_b" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #variants>
        <section>
          <h4 class="title">Button</h4>
          <div class="desc">
            <div class="be-tag label deepblue">component</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-switch button" @click="cbValue[4] = !cbValue[4]">
              <input type="checkbox" :checked="cbValue[4]" />
              <span class="on active">On</span>
              <span class="off">Off</span>
            </div>
            <div
              class="be-switch button round button-slide"
              @click="cbValue[5] = !cbValue[5]"
            >
              <input type="checkbox" :checked="cbValue[5]" />
              <span class="on active">On</span>
              <span class="off">Off</span>
            </div>
            <BeSwitch
              type="button"
              on-text="A"
              off-text="B"
              v-model="cbValue[6]"
            />
          </div>
          <CodeBlock :code="codes.button" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Round</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div
              class="be-switch slide round"
              @click="cbValue[7] = !cbValue[7]"
            >
              <input type="checkbox" :checked="cbValue[7]" />
              <span class="switch"></span>
            </div>
            <div
              class="be-switch slide inside round"
              @click="cbValue[8] = !cbValue[8]"
            >
              <input type="checkbox" :checked="cbValue[8]" />
              <span class="switch"></span>
            </div>
            <div
              class="be-switch button round"
              @click="cbValue[9] = !cbValue[9]"
            >
              <input type="checkbox" :checked="cbValue[9]" />
              <span class="on active">On</span>
              <span class="off">Off</span>
            </div>
            <BeSwitch
              type="slide"
              :inside="true"
              :round="true"
              v-model="cbValue[10]"
            />
          </div>
          <CodeBlock :code="codes.round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Emit</h4>
          <div class="desc">emit: change</div>
          <div class="contents-wrapper">
            <BeSwitch v-model="cbValue[11]" />
          </div>
          Result: {{ setSwitch }}
        </section>
        <section>
          <h4 class="title">Colors</h4>
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
            <div class="be-switch slide inside round" :class="selectColor">
              <input type="checkbox" :checked="cbValue" />
              <span class="switch"></span>
            </div>
            <div class="be-switch button round" :class="selectColor">
              <input type="checkbox" :checked="cbValue" />
              <span class="on active">On</span>
              <span class="off">Off</span>
            </div>
            <div class="be-switch slide" :class="selectColor">
              <input type="checkbox" :checked="cbValue" />
              <span class="switch"></span>
            </div>
          </div>
          <CodeBlock :code="codes.colors" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
