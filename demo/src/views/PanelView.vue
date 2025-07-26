<script setup>
import * as codes from '@/codes/panel'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'

import { ref } from 'vue'
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi deserunt aspernatur, voluptatum maxime veritatis iusto facilis nobis maiores officia enim, ipsam corporis. Nihil, minima doloribus? Quod laboriosam molestias veniam? Blanditiis!'
const isOpen = ref(false)
const isCompOpen = ref(true)
const setOpen = (payload) => {
  isCompOpen.value = payload
}
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
            <div class="be-panel">
              <div class="panel-header">Title</div>
              <div class="panel-content">
                <div class="content-wrapper">contents</div>
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
            <BePanel
              title="Title"
              :contents="lorem"
              :border="true"
              toggle-icon="xi-angle-down"
              :collapse="true"
              :open="isCompOpen"
              :max-height="120"
              @show="setOpen"
            />
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #variants>
        <section>
          <h4>Border</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BePanel title="Title" :contents="lorem" :border="true" />
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Contents</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-panel">
              <div class="panel-header">Title</div>
              <div class="panel-content">
                <div class="content-wrapper">
                  <div class="content-head">Header</div>
                  <div class="content-body">
                    Body <br />
                    {{ lorem }}
                  </div>
                  <div class="content-foot">Footer</div>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.contents" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Collapse</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div
              class="be-panel collapse border icon left"
              :class="{ open: isOpen }"
            >
              <div class="panel-header" @click="isOpen = !isOpen">
                <div class="title">Title</div>
                <span class="panel-toggle-btn">
                  <i class="icon xi-angle-down"></i>
                </span>
                <!-- <div class="be-button icon outline panel-toggle-btn"> -->
                <!-- </div> -->
              </div>
              <div class="panel-content">
                <div class="content-wrapper">
                  <div class="content-head">Header</div>
                  <div class="content-body">{{ lorem }}</div>
                  <div class="content-foot">Footer</div>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock :code="codes.collapse" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Detaile - Summary</h4>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
          </div>
          <div class="contents-wrapper">
            <details class="be-panel">
              <summary class="panel-header">
                <div class="title">Title</div>
                <span class="panel-toggle-btn">
                  <i class="icon xi-angle-down"></i>
                </span>
              </summary>
              <div class="panel-content">
                <div class="content-wrapper">
                  <div class="content-body">{{ lorem }}</div>
                </div>
              </div>
            </details>
          </div>
          <CodeBlock :code="codes.special_html" lang="html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
