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
            <BeTag>기본태그</BeTag>
            <BeTag icon="xi-tag"></BeTag>
            <BeTag>label type</BeTag>
          </div>
          <CodeBlock :code="codes.type_label" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Type: kbd</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="kbd-set">
              <BeTag type="kbd" key-Type="enter">Enter</BeTag>
              <BeTag type="kbd" key-Type="space">Space</BeTag>
              <BeTag type="kbd" key-Type="esc">ESC</BeTag>
              <BeTag type="kbd" key-type="shift">Shift</BeTag>
              <BeTag type="kbd" key-type="ctrl">Control</BeTag>
              <BeTag type="kbd" key-type="opt">Option</BeTag>
              <BeTag type="kbd" is-meta key-type="cmd">command</BeTag>
              <BeTag type="kbd">Z</BeTag>
              <BeTag type="kbd">a</BeTag>
              <BeTag type="kbd">b</BeTag>
              <BeTag type="kbd">c</BeTag>
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
            <BeTag type="line"></BeTag>
            <BeTag type="line" color="red" />
            <BeTag type="line" color="blue" />
            <BeTag type="line" color="green" />
          </div>
          <CodeBlock :code="codes.type_line" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Type: dot</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTag type="dot"></BeTag>
            <BeTag type="dot" color="red" />
            <BeTag type="dot" color="blue" />
            <BeTag type="dot" color="green" />
          </div>
          <CodeBlock :code="codes.type_dot" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Icon</h4>
          <div class="desc">label 타입의 경우에 사용</div>
          <div class="contents-wrapper">
            <BeTag icon="xi-bell"></BeTag>
            <BeTag icon="xi-angle-left" icon-pos="left">Left</BeTag>
            <BeTag icon="xi-angle-right" icon-pos="right">Right</BeTag>
            <BeTag icon="xi-user" icon-pos="left" color="blue">User</BeTag>
            <BeTag icon="xi-new" icon-pos="left" color="red">New</BeTag>
            <BeTag icon="xi-close" icon-pos="right" color="deeppurple">
              Tag
            </BeTag>
            <BeTag icon="xi-tag" icon-pos="left">icon(Comp)</BeTag>
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Round</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTag icon="xi-angle-left" icon-pos="left" round>Left</BeTag>
            <BeTag icon="xi-angle-right" icon-pos="right" round>Right</BeTag>
            <BeTag icon="xi-user" icon-pos="left" color="blue" round>
              User
            </BeTag>
            <BeTag icon="xi-new" icon-pos="left" color="red" round>New</BeTag>
            <BeTag icon="xi-close" icon-pos="right" color="deeppurple" round>
              Tag
            </BeTag>
          </div>
          <CodeBlock :code="codes.round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Pointing</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTag type="pointing" pointing-pos="up" color="blue">
              Point Up
            </BeTag>
            <BeTag type="pointing" pointing-pos="down" color="blue">
              Point Down
            </BeTag>
            <BeTag type="pointing" pointing-pos="left" color="blue">
              Point Left
            </BeTag>
            <BeTag type="pointing" pointing-pos="right" color="blue">
              Point Right
            </BeTag>
          </div>
          <CodeBlock :code="codes.pointing" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Prefix | Suffix</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tag label red prefix">
              <span class="detail">prefix</span>
              Tag
            </div>
            <div class="be-tag label blue suffix">
              Tag
              <span class="detail">suffix</span>
            </div>
            <BeTag class="primary" prefix="pre">Tag</BeTag>
            <BeTag class="secondary" suffix="suf">Tag</BeTag>
          </div>
          <CodeBlock :code="codes.prefix_suffix" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Tags</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tags">
              <template
                v-for="color in ['green', 'deepblue', 'orange']"
                :key="color"
              >
                <BeTag :color>{{ color }}</BeTag>
              </template>
            </div>
          </div>
          <CodeBlock :code="codes.tags" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Attached tags</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tags attached">
              <div class="be-tag label primary pointing right">Attached</div>
              <div class="be-tag label secondary">Tags</div>
            </div>
            <div class="be-tags attached">
              <div class="be-tag label deeppurple">Tag A</div>
              <div class="be-tag label orange">Tag B</div>
            </div>
            <div class="be-tags attached">
              <div class="be-tag label blue light">Tag A</div>
              <div class="be-tag label blue">Tag B</div>
              <div class="be-tag label deepblue">Tag C</div>
            </div>
          </div>
          <CodeBlock :code="codes.attached_tags" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Tags: Hover Effect</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-tags one-of-a-kind">
              <template
                v-for="color in ['green', 'deepblue', 'orange']"
                :key="color"
              >
                <BeTag :color>{{ color }}</BeTag>
              </template>
            </div>
          </div>
          <CodeBlock :code="codes.effect" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Color</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTag v-for="color in colors" :key="color" :color>
              {{ color }}
            </BeTag>
          </div>
          <CodeBlock :code="codes.color" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Color - light</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeTag v-for="color in colors" :key="color" :color light>
              {{ color }}
            </BeTag>
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
