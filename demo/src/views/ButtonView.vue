<script setup>
import * as codes from '@/codes/button'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

import { ref } from 'vue'

const usage = ''
import { buttonProps, buttonsProps } from '@/contents/props-data'

const status = ['success', 'danger', 'info', 'attention', 'importance']
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
const options = ['primary', 'secondary', 'round', 'outline', 'icon']
const icons = ['home', 'user', 'arrow-left', 'arrow-right', 'accessibility']
const sizes = ['tiny', 'small', 'medium', 'large', 'huge', 'massive']

const selectedIndex = ref(0)
</script>
<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4 class="title"></h4>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
          </div>
          <div class="contents-wrapper">
            <div class="be-button">Base(class)</div>
            <button class="be-button">Base(tag)</button>
          </div>

          <CodeBlock :code="codes.base_html" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title"></h4>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeButton content-text="Component"></BeButton>
            <BeButton brand="primary" content-text="Comp(brand)"></BeButton>
            <BeButton status="danger" content-text="Comp(status)"></BeButton>
            <BeButton icon>
              <i class="icon xi-user" />
            </BeButton>
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList title="Button" :datas="buttonProps" />
        <PropsDataList title="Buttons" :datas="buttonsProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Brand</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button primary">Primary</button>
            <button class="be-button secondary">Secondary</button>
          </div>
          <CodeBlock :code="codes.brand" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Status</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button
              v-for="state in status"
              :key="state"
              class="be-button"
              :class="state"
            >
              {{ state }}
            </button>
          </div>
          <CodeBlock :code="codes.status" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Colors</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button
              v-for="color in colors"
              :key="color"
              class="be-button"
              :class="color"
            >
              {{ color }}
            </button>
            <BeButton color="lightblue" content-text="Comp(color)"></BeButton>
          </div>
          <CodeBlock :code="codes.colors" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Colors-light</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button
              v-for="color in colors"
              :key="color"
              class="be-button"
              :class="`${color}-light`"
            >
              {{ color }}
            </button>
            <BeButton
              color="lightblue-light"
              content-text="Comp(color)"
            ></BeButton>
          </div>
          <CodeBlock :code="codes.colors_light" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Text</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button text">text</button>
            <button class="be-button primary text">text</button>
            <button class="be-button text">
              <i class="icon left xi-text-size"></i>
              text
            </button>
            <BeButton :text="true" content-text="Comp(text)"></BeButton>
          </div>
          <CodeBlock :code="codes.text" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Border</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button border">border</button>
            <button
              v-for="opt in options"
              :key="opt"
              class="be-button border"
              :class="opt"
            >
              <template v-if="opt.indexOf('icon') > -1">
                <i class="icon left xi-airplane"></i>
              </template>
              border
            </button>
            <BeButton :border="true" content-text="Comp(border)"></BeButton>
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Disabled</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button disabled">disabled</button>
            <button class="be-button" disabled>disabled(attr)</button>
            <BeButton :disabled="true" content-text="Comp(disabled)"></BeButton>
          </div>
          <CodeBlock :code="codes.disabled" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Fluid</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button fluid">fluid</button>
            <button
              v-for="opt in options"
              :key="opt"
              class="be-button fluid"
              :class="opt"
            >
              <template v-if="opt.indexOf('icon') > -1">
                <i class="icon left xi-airplane"></i>
              </template>
              fluid ({{ opt }})
            </button>
            <BeButton :fluid="true" content-text="Comp(fluid)"></BeButton>
          </div>
          <CodeBlock :code="codes.fluid" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Compact</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button compact">compact</button>
            <button
              v-for="opt in options"
              :key="opt"
              class="be-button compact"
              :class="opt"
            >
              <template v-if="opt.indexOf('icon') > -1">
                <i class="icon left xi-airplane"></i>
              </template>
              compact
            </button>
            <BeButton :compact="true" content-text="Comp(compact)"></BeButton>
          </div>
          <CodeBlock :code="codes.compact" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Outline</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button outline">outline</button>
            <button
              v-for="opt in options"
              :key="opt"
              class="be-button outline"
              :class="opt"
            >
              <template v-if="opt.indexOf('icon') > -1">
                <i class="icon left xi-airplane"></i>
              </template>
              outline
            </button>
            <BeButton :outline="true" content-text="Comp(outline)"></BeButton>
          </div>
          <CodeBlock :code="codes.outline" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Icons(xeicon 2.3.3)</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button icon"><i class="xi-airplane"></i></button>
            <button class="be-button icon"><i class="xi-airplane"></i></button>
            <button
              v-for="(opt, i) in options"
              :key="opt"
              class="be-button icon"
              :class="opt"
            >
              <i :class="`xi-${icons[i]}`"></i>
            </button>
            <BeButton icon="xi-airplane"></BeButton>
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Round</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button round">round</button>
            <button
              v-for="opt in options"
              :key="opt"
              class="be-button round"
              :class="opt"
            >
              <template v-if="opt.indexOf('icon') > -1">
                <i class="icon left xi-airplane"></i>
              </template>
              round
            </button>
            <BeButton :round="true" content-text="Comp(round)"></BeButton>
          </div>
          <CodeBlock :code="codes.round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Size</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button
              v-for="size in sizes"
              :key="size"
              class="be-button"
              :class="size"
            >
              {{ size }}
            </button>
          </div>
          <CodeBlock :code="codes.size" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Icon with text</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button">
              <i class="icon left xi-angle-left"></i>
              Icon Left
            </button>
            <button class="be-button">
              Icon Right
              <i class="icon right xi-angle-right"></i>
            </button>
            <button class="be-button">
              <i class="icon left xi-angle-left"></i>
              Icon Both
              <i class="icon right xi-angle-right"></i>
            </button>
            <BeButton
              with-icon="xi-airplane"
              icon-pos="left"
              content-text="Comp(icon)"
            ></BeButton>
          </div>
          <CodeBlock :code="codes.withIcon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Badge</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button badge">
              Bedge Best
              <span class="in-badge primary">Best</span>
            </button>
            <button class="be-button badge">
              Bedge New
              <span class="in-badge be-red">N</span>
            </button>
            <BeButton
              badge="COMP"
              badge-option="secondary"
              content-text="Comp(badge)"
            ></BeButton>
          </div>
          <CodeBlock :code="codes.badge" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Link</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton link="/" link-target="_blank"> Link </BeButton>
          </div>
          <CodeBlock :code="codes.link" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Event: Click</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton @onClick="console.log('Click')"> Click it! </BeButton>
          </div>
          <CodeBlock :code="codes.eventEmit" lang="vue-html"></CodeBlock>
        </section>
      </template>
      <template #extention>
        <div class="buttons">
          <h1 class="title">Buttons</h1>
          <section>
            <h4 class="title">Buttons</h4>
            <div class="desc"></div>
            <div class="contents-wrapper">
              <div class="be-buttons">
                <div
                  class="be-button"
                  v-for="(item, i) in ['A', 'B', 'C', 'D']"
                  :key="item"
                  :class="{ selected: selectedIndex === i }"
                  @click="selectedIndex = i"
                >
                  {{ item }} Button
                </div>
              </div>
            </div>
            <CodeBlock :code="codes.buttons" lang="vue-html"></CodeBlock>
          </section>
          <section>
            <h4 class="title">Buttons-Round</h4>
            <div class="desc"></div>
            <div class="contents-wrapper">
              <div class="be-buttons round">
                <div
                  class="be-button"
                  v-for="(item, i) in ['A', 'B', 'C', 'D']"
                  :key="item"
                  :class="{ selected: selectedIndex === i }"
                  @click="selectedIndex = i"
                >
                  {{ item }} Button
                </div>
              </div>
            </div>
            <CodeBlock :code="codes.buttons_round" lang="vue-html"></CodeBlock>
          </section>
          <section>
            <h4 class="title">Buttons-Border</h4>
            <div class="desc"></div>
            <div class="contents-wrapper">
              <div class="be-buttons border">
                <div
                  class="be-button"
                  v-for="(item, i) in ['A', 'B', 'C', 'D']"
                  :key="item"
                  :class="{ selected: selectedIndex === i }"
                  @click="selectedIndex = i"
                >
                  {{ item }} Button
                </div>
              </div>
            </div>
            <CodeBlock :code="codes.buttons_border" lang="vue-html"></CodeBlock>
          </section>
        </div>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss" scoped>
.be-button,
button {
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
