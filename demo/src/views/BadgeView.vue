<script setup>
import * as codes from '@/codes/badge'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { badgeProps } from '@/contents/props-data'

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
            <div class="be-button">
              Badge (0)
              <div class="be-badge">0</div>
            </div>
            <div class="be-button">
              Badge (1)
              <div class="be-badge red">1</div>
            </div>
            <div class="be-button">
              Badge (10)
              <div class="be-badge secondary">10</div>
            </div>
            <div class="be-button">
              Badge (N)
              <div class="be-badge attention">N</div>
            </div>
            <div class="be-button">
              Badge (N)
              <div class="be-badge success">
                <i class="icon xi-upload"></i>
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
            <BeButton>
              Badge(Comp)
              <BeBadge shadow color="red" align="right">C</BeBadge>
            </BeButton>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="badgeProps" />
      </template>
      <template #variants>
        <section>
          <h4>Mark</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-button">
              Float
              <div class="be-badge secondary">F</div>
            </div>
            <div class="be-button">
              Mark
              <div class="be-badge secondary mark"></div>
            </div>
          </div>
          <CodeBlock :code="codes.mark" lang="vue-html"></CodeBlock>
        </section>
        <!-- <section>
          <h4>Use Test</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-button">
              First
              <div class="be-badge secondary">F</div>
            </div>
            <div class="be-button">
              New
              <div class="be-badge red">New</div>
            </div>
            <div class="be-button">
              Update
              <div class="be-badge blue">Upgrade</div>
            </div>
          </div>
        </section> -->
        <section>
          <h4>Shadow</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-button">
              Shdow on
              <div class="be-badge secondary shadow">O</div>
            </div>
            <div class="be-button">
              Shdow off
              <div class="be-badge secondary">X</div>
            </div>
          </div>
          <CodeBlock :code="codes.shadow" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Align</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-button">
              Left
              <div class="be-badge primary shadow align-left">3000</div>
            </div>
            <div class="be-button">
              Center
              <div class="be-badge primary shadow align-center">3000</div>
            </div>
            <div class="be-button">
              Right
              <div class="be-badge primary shadow align-right">3000</div>
            </div>
          </div>
          <CodeBlock :code="codes.align" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Color</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-button" v-for="color in colors" :key="color">
              {{ color }}
              <div class="be-badge shadow" :class="color">
                <i class="icon xi-tint"></i>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.color" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
