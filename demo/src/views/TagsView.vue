<script setup>
import * as codes from '@/codes/tag'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { tagProps } from '@/contents/props-data'

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
          <h4 class="title">Base</h4>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
            <div class="be-tag label deepblue">component</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-tag label">BASE</div>
            <div class="be-tag label">기본태그</div>
            <div class="be-tag label round">Round</div>
            <div class="be-tag label icon">
              <i class="icon xi-tag"></i>
            </div>
            <div class="be-tag line"></div>
            <div class="be-tag line red"></div>
            <div class="be-tag line blue"></div>
            <div class="be-tag dot purple"></div>
            <div class="be-tag dot orange"></div>
            <div class="be-tag dot lightblue"></div>
            <BeTag>Tag(Comp)</BeTag>
            <BeTag>Tag(Comp)</BeTag>
            <BeTag>Tag(Comp)</BeTag>
          </div>
          <CodeBlock :code="codes.base" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="tagProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Type: label</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tag label">BASE</div>
            <div class="be-tag label">기본태그</div>
            <div class="be-tag label icon">
              <i class="icon xi-tag"></i>
            </div>
            <BeTag>label type</BeTag>
          </div>
          <CodeBlock :code="codes.type_label" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Type: kbd</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="kbd-set">
              <BeTag type="kbd" key-Type="enter">enter</BeTag>
              <BeTag type="kbd">space</BeTag>
              <BeTag type="kbd" is-meta key-type="cmd">command</BeTag>
              <BeTag type="kbd">a</BeTag>
              <BeTag type="kbd">b</BeTag>
              <BeTag type="kbd">c</BeTag>
            </div>
            <div class="kbd-set">
              <div class="be-tag kbd space">space</div>
              <div class="be-tag kbd esc">esc</div>
              <div class="be-tag kbd enter">enter</div>
              <div class="be-tag kbd meta shift">shift</div>
              <div class="be-tag kbd meta ctrl">ctrl</div>
              <div class="be-tag kbd meta opt">option</div>
              <div class="be-tag kbd meta cmd">command</div>
              <div class="be-tag kbd">z</div>
            </div>
            <p>
              Press <BeTag type="kbd" key-type="enter">enter</BeTag> to open
              Tool
            </p>
          </div>
          <CodeBlock :code="codes.type_kbd" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Type: line</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tag line"></div>
            <div class="be-tag line red"></div>
            <div class="be-tag line blue"></div>
            <div class="be-tag line green"></div>
            <BeTag type="line"></BeTag>
          </div>
          <CodeBlock :code="codes.type_line" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Type: dot</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tag dot"></div>
            <div class="be-tag dot red"></div>
            <div class="be-tag dot blue"></div>
            <div class="be-tag dot green"></div>
            <BeTag type="dot"></BeTag>
          </div>
          <CodeBlock :code="codes.type_dot" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Icon</h4>
          <div class="desc">label 타입의 경우에 사용</div>
          <div class="contents-wrapper">
            <div class="be-tag label icon">
              <i class="icon xi-bell"></i>
            </div>
            <div class="be-tag label">
              <i class="icon left xi-angle-left"></i>
              Left
            </div>
            <div class="be-tag label">
              Right
              <i class="icon right xi-angle-right"></i>
            </div>
            <div class="be-tag label blue">
              <i class="icon left xi-user"></i>
              User
            </div>
            <div class="be-tag label red">
              <i class="icon left xi-new"></i>
              New
            </div>
            <div class="be-tag label deeppurple">
              Tag
              <i class="icon right xi-close"></i>
            </div>
            <BeTag icon="xi-tag" icon-pos="left">icon(Comp)</BeTag>
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Round</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tag label round">
              <i class="icon left xi-angle-left"></i>
              Left
            </div>
            <div class="be-tag label round">
              Right
              <i class="icon right xi-angle-right"></i>
            </div>
            <div class="be-tag label round blue">
              <i class="icon left xi-user"></i>
              User
            </div>
            <div class="be-tag label round red">
              <i class="icon left xi-new"></i>
              New
            </div>
            <div class="be-tag label round deeppurple">
              Tag
              <i class="icon right xi-close"></i>
            </div>
          </div>
          <CodeBlock :code="codes.round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Pointing</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tag pointing up">
              Point Up
              <i class="icon right xi-angle-right"></i>
            </div>
            <div class="be-tag pointing blue down">
              <i class="icon left xi-user"></i>
              Point Down
            </div>
            <div class="be-tag pointing left">
              Point left
              <i class="icon right xi-angle-right"></i>
            </div>
            <div class="be-tag pointing blue right">
              <i class="icon left xi-user"></i>
              Point Right
            </div>
          </div>
          <CodeBlock :code="codes.pointing" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Tags</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tags">
              <div class="be-tag label green">Tag A</div>
              <div class="be-tag label deepblue">Tag B</div>
              <div class="be-tag label orange">Tag C</div>
            </div>
          </div>
          <CodeBlock :code="codes.tags" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Tags: Hover Effect</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tags one-of-a-kind">
              <div class="be-tag label green">Tag A</div>
              <div class="be-tag label deepblue">Tag B</div>
              <div class="be-tag label orange">Tag C</div>
            </div>
          </div>
          <CodeBlock :code="codes.effect" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Color</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div
              v-for="color in colors"
              :key="color"
              class="be-tag label"
              :class="color"
            >
              {{ color }}
            </div>
          </div>
          <CodeBlock :code="codes.color" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Color - light</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div
              v-for="color in colors"
              :key="color"
              class="be-tag label light"
              :class="color"
            >
              {{ color }}
            </div>
          </div>
          <CodeBlock :code="codes.color_light" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss" scoped>
.be-tag.label::first-letter {
  text-transform: uppercase;
}
</style>
