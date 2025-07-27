<script setup>
import * as codes from '@/codes/rate'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { rateProps } from '@/contents/props-data'

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
]
const selectColor = ref('red')

const rate = ref(4)
const insertValue = ref(3.7)
const setRate = (payload) => {
  rate.value = payload
}
</script>

<template>
  <div class="be container page-wrapper">
    <PageContainer>
      <template #base>
        <section>
          <h4>Base</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeRate :result-value="4" />
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="rateProps" />
      </template>
      <template #variants>
        <section>
          <h4>Rate Length: 10</h4>
          <div class="desc">기본: 5</div>
          <div class="contents-wrapper">
            <BeRate :rate-length="10" :result-value="7" />
          </div>
          <CodeBlock :code="codes.rate_length" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Base Size</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div :style="{ fontSize: '14px' }">
              <div class="title">폰트 14px</div>
              <BeRate :result-value="4" />
            </div>
            <div :style="{ fontSize: '22px' }">
              <div class="title">폰트 22px</div>
              <BeRate :result-value="4" />
            </div>
          </div>
        </section>
        <section>
          <h4>Allow half</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeRate :use-half="true" :result-value="3.5" />
          </div>
          <CodeBlock :code="codes.use_half" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Icons</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeRate icon="xi-emoticon-smiley" :result-value="4" />
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Size</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeRate size="tiny" :result-value="1" />
            <BeRate size="small" :result-value="2" />
            <BeRate :result-value="3" />
            <BeRate size="large" :result-value="4" />
            <BeRate size="huge" :result-value="5" />
          </div>
          <CodeBlock :code="codes.size" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Color</h4>
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
            <div>
              <div class="title">{{ selectColor }}</div>
              <BeRate :color="selectColor" :result-value="4.5" />
            </div>
          </div>
          <CodeBlock :code="codes.color" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Disabled</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeRate :disabled="true" :result-value="4" />
          </div>
          <CodeBlock :code="codes.disabled" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Border</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeRate :border="true" :result-value="3.7" />
            <BeRate :border="false" :result-value="3.7" />
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Float Value</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeRate :result-value="insertValue" readonly />
            <BeInput v-model="insertValue" />
          </div>
          <CodeBlock :code="codes.float" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Emit</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeRate @select="setRate" :use-half="true" :result-value="rate" />
            <BeButton> Result: {{ rate }} </BeButton>
          </div>
          <CodeBlock :code="codes.emit" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
