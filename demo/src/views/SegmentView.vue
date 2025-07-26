<script setup>
import * as codes from '@/codes/segment'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'

const lorem_text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error quia quod magni.Repellendus numquam labore, aliquid voluptates dicta dignissimos beatae quidem repellat amet, vel fuga totam dolorum necessitatibus recusandae!'
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
            <div class="be-segment">
              <div class="contents">
                {{ lorem_text }}
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
            <BeSegment>{{ lorem_text }}</BeSegment>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #variants>
        <section>
          <h4>Collapse</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeSegment collapse surface border
              >{{ lorem_text }}{{ lorem_text }}{{ lorem_text }}{{ lorem_text
              }}{{ lorem_text }}{{ lorem_text }}</BeSegment
            >
          </div>
          <CodeBlock :code="codes.collapse" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Surface</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeSegment surface>{{ lorem_text }}</BeSegment>
            <BeSegment surface>{{ lorem_text }}</BeSegment>
          </div>
          <CodeBlock :code="codes.surface" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Border</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeSegment border>{{ lorem_text }}</BeSegment>
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Float</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeSegment float>{{ lorem_text }}</BeSegment>
          </div>
          <CodeBlock :code="codes.float" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Attached</h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeSegment border :attached="['header', 'footer']">
              <template #header>
                <div class="title">Header</div>
              </template>
              {{ lorem_text }}
              <template #footer>
                <div class="f_content">
                  <p>This is Footer</p>
                </div>
              </template>
            </BeSegment>
          </div>
          <CodeBlock :code="codes.attached" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Align</h4>
          <div class="desc">
            Left | Center | Right
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <h6>Left</h6>
            <BeSegment align="left">{{ lorem_text }}</BeSegment>
            <h6>Center</h6>
            <BeSegment align="center">{{ lorem_text }}</BeSegment>
            <h6>Right</h6>
            <BeSegment align="right">{{ lorem_text }}</BeSegment>
          </div>
          <CodeBlock :code="codes.align" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Segments</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-segments border round-xl">
              <div class="be-segment border">
                <div class="contents">
                  {{ lorem_text }}
                </div>
              </div>
              <BeSegment surface border>{{ lorem_text }}</BeSegment>
              <BeSegment border>{{ lorem_text }}</BeSegment>
            </div>
          </div>
          <CodeBlock :code="codes.segment_group" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss" scoped>
.f_content {
  padding: 10px;
}
</style>
