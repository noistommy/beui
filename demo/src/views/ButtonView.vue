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
        <button class="be-button link">
          <i class="icon left xi-checkbox-blank"></i>
          codesandbox
          <a
            href="https://codesandbox.io/p/devbox/yljdvr"
            class="link"
            target="_blank"
          ></a>
        </button>
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
            <BeButton brand="primary" content-text="Primary"></BeButton>
            <BeButton brand="secondary" content-text="Secondary"></BeButton>
          </div>
          <CodeBlock :code="codes.brand" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Status</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <template v-for="state in status" :key="state">
              <BeButton :status="state" :content-text="state" />
            </template>
          </div>
          <CodeBlock :code="codes.status" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Colors</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <template v-for="color in colors" :key="color">
              <BeButton :color="color" :content-text="color" />
            </template>
          </div>
          <CodeBlock :code="codes.colors" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Colors-light</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <template v-for="color in colors" :key="color">
              <BeButton
                :color="`${color}-light`"
                :content-text="`${color}-light`"
              />
            </template>
          </div>
          <CodeBlock :code="codes.colors_light" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Text</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton :text="true" content-text="Text" />
            <BeButton :text="true" class="no-hover" content-text="No Hover" />
            <BeButton :text="true" brand="primary" content-text="Text" />
            <BeButton
              :text="true"
              icon="xi-text-size"
              icon-pos="left"
              content-text="Text"
            />
          </div>
          <CodeBlock :code="codes.text" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Border</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton :border="true">Border</BeButton>
            <template v-for="opt in options" :key="opt">
              <BeButton :class="opt" :border="true" content-text="Comp(border)">
                <template v-if="opt.indexOf('icon') > -1">
                  <i class="icon left xi-airplane"></i>
                </template>
                Border
              </BeButton>
            </template>
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
            <BeButton fluid>fluid</BeButton>
            <template v-for="opt in options" :key="opt">
              <BeButton :class="opt" fluid>
                <template v-if="opt.indexOf('icon') > -1">
                  <i class="icon left xi-airplane"></i>
                </template>
                fluid ({{ opt }})
              </BeButton>
            </template>
          </div>
          <CodeBlock :code="codes.fluid" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Compact</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton :compact="true" content-text="Comp(compact)"></BeButton>
            <template v-for="opt in options" :key="opt">
              <BeButton :class="opt" compact>
                <template v-if="opt.indexOf('icon') > -1">
                  <i class="icon left xi-airplane"></i>
                </template>
                Compact
              </BeButton>
            </template>
          </div>
          <CodeBlock :code="codes.compact" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Outline</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton :outline="true" content-text="Comp(outline)"></BeButton>
            <template v-for="opt in options" :key="opt">
              <BeButton :class="opt" outline>
                <template v-if="opt.indexOf('icon') > -1">
                  <i class="icon left xi-airplane"></i>
                </template>
                Outline
              </BeButton>
            </template>
          </div>
          <CodeBlock :code="codes.outline" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Icons(xeicon 2.3.3)</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton icon="xi-airplane" />
            <template v-for="(opt, i) in options" :key="opt">
              <BeButton :class="opt" icon>
                <i :class="`xi-${icons[i]}`"></i>
              </BeButton>
            </template>
          </div>
          <CodeBlock :code="codes.icon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Round</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton round content-text="Round"></BeButton>
            <template v-for="opt in options" :key="opt">
              <BeButton round :class="opt">
                <template v-if="opt.indexOf('icon') > -1">
                  <i class="icon left xi-airplane"></i>
                </template>
                Round
              </BeButton>
            </template>
          </div>
          <CodeBlock :code="codes.round" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Size</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <template v-for="size in sizes" :key="size">
              <BeButton :size="size">{{ size }}</BeButton>
            </template>
          </div>
          <CodeBlock :code="codes.size" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Icon with text</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <button class="be-button">
              <i class="icon left xi-angle-left"></i>
              Icon Both
              <i class="icon right xi-angle-right"></i>
            </button>
            <BeButton
              with-icon="xi-angle-left"
              icon-pos="left"
              content-text="Icon Left"
            />
            <BeButton
              with-icon="xi-angle-right"
              icon-pos="right"
              content-text="Icon Right"
            />
            <BeButton
              :with-icon="['xi-angle-left', 'xi-angle-right']"
              icon-pos="both"
              content-text="Comp(icon)"
            ></BeButton>
          </div>
          <CodeBlock :code="codes.withIcon" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Badge</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeButton
              badge="Best"
              badge-option="primary"
              content-text="Badge-Best"
            ></BeButton>
            <BeButton
              badge="N"
              badge-option="be-red"
              content-text="Badge-New"
            ></BeButton>
            <BeButton
              badge="COMP"
              badge-option="secondary"
              content-text="Badge"
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
