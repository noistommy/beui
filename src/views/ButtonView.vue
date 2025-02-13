<script setup>
import {ref} from 'vue'
const status = ['success', 'danger', 'info', 'attention', 'importance']
const colors = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'blue', 'deepblue', 'deeppurple', 'purple', 'brown', 'gray']
const options = ['primary', 'secondary', 'circle', 'outline', 'icon']
const icons = ['home', 'user', 'arrow-left', 'arrow-right', 'accessibility']

const selectedIndex = ref(0)
</script>
<template>
  <div class="page-wrapper be-container">
    <div class="summary">
      <div class="be-message icon success">
        <i class="icon xi-info"></i>
        @baseFont 14px
      </div>
    </div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-button">Base(class)</div>
        <button class="be-button">Base(tag)</button>
        <BeButton content-text="Component"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Brand & Status</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button primary">primary</button>
        <button class="be-button secondary">secondary</button>
        <button v-for="state in status" :key="state" class="be-button" :class="state">{{ state }}</button>
        <BeButton brand="primary" content-text="Comp(brand)"></BeButton>
        <BeButton status="danger" content-text="Comp(status)"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Colors</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button v-for="color in colors" :key="color" class="be-button" :class="color">{{ color }}</button>
        <BeButton color="lightblue" content-text="Comp(color)"></BeButton>
      </div>
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
    </section>
    <section>
      <h4 class="title">Border</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button border">border</button>
        <button v-for="opt in options" :key="opt" class="be-button border" :class="opt">
          <template v-if="opt.indexOf('icon') > -1">
            <i class="icon left xi-airplane"></i>
          </template>
          border
        </button>
        <BeButton :border="true" content-text="Comp(border)"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Disabled</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button disabled">disabled</button>
        <button class="be-button" disabled>disabled(attr)</button>
        <BeButton :disabled="true" content-text="Comp(disabled)"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Fluid</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button fluid">fluid</button>
        <button v-for="opt in options" :key="opt" class="be-button fluid" :class="opt">
          <template v-if="opt.indexOf('icon') > -1">
            <i class="icon left xi-airplane"></i>
          </template>
          fluid ({{ opt }})
        </button>
        <BeButton :fluid="true" content-text="Comp(fluid)"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Compact</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button compact">compact</button>
        <button v-for="opt in options" :key="opt" class="be-button compact" :class="opt">
          <template v-if="opt.indexOf('icon') > -1">
            <i class="icon left xi-airplane"></i>
          </template>
          compact
        </button>
        <BeButton :compact="true" content-text="Comp(compact)"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Outline</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button outline">outline</button>
        <button v-for="opt in options" :key="opt" class="be-button outline" :class="opt">
          <template v-if="opt.indexOf('icon') > -1">
            <i class="icon left xi-airplane"></i>
          </template>
          outline
        </button>
        <BeButton :outline="true" content-text="Comp(outline)"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Icons(xeicon 2.3.3)</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button icon"><i class="xi-airplane"></i></button>
        <button class="be-button icon"><i class="xi-airplane"></i></button>
        <button v-for="(opt, i) in options" :key="opt" class="be-button icon" :class="opt">
          <i :class="`xi-${icons[i]}`"></i>
        </button>
        <BeButton icon="xi-airplane"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Circle</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <button class="be-button circle">circle</button>
        <button v-for="opt in options" :key="opt" class="be-button circle" :class="opt">
          <template v-if="opt.indexOf('icon') > -1">
            <i class="icon left xi-airplane"></i>
          </template>
          circle
        </button>
        <BeButton :circle="true" content-text="Comp(circle)"></BeButton>
      </div>
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
        <BeButton with-icon="xi-airplane" icon-pos="left" content-text="Comp(icon)"></BeButton>
      </div>
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
        <BeButton badge="COMP" badge-option="secondary" content-text="Comp(badge)"></BeButton>
      </div>
    </section>
    <section>
      <h4 class="title">Buttons</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-buttons">
          <div class="be-button"
            v-for="(item, i) in ['A', 'B', 'C', 'D']"
            :key="item"
            :class="{selected: selectedIndex === i}"
            @click="selectedIndex = i">
            {{ item }} Button
          </div>
        </div>

      </div>
    </section>
  </div>

</template>

<style lang="scss" scoped>

</style>
