<script setup>
import { ref } from 'vue'
const value = ref(new Array(10).fill(0))
const valueLimit = ref(10)
const valueStep = ref(0)
const valueFirst = ref(0)
</script>
<template>
  <div class="page-wrapper be-container">
    <div class="summary">
      <div class="be-message info">@baseFont 14px</div>
    </div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="valueFirst"></BeInputNumber>
      </div>
    </section>
    <section>
      <h4 class="title">Disabled</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="value[0]" disabled />
      </div>
    </section>
    <section>
      <h4 class="title">Controller position</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="value[1]" />
        <BeInputNumber v-model="value[2]" controller="end" />
      </div>
    </section>
    <section>
      <h4 class="title">Min / Max</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
        ex) min = 1 / max = 10
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="valueLimit" :min="0" :max="10" />
      </div>
    </section>
    <section>
      <h4 class="title">Step</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
        ex) step = 5
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="valueStep" :step="5" />
      </div>
    </section>
    <section>
      <h4 class="title">User Custom Icon</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="value[3]" dec-icon="xi-angle-down" inc-icon="xi-angle-up" />
      </div>
    </section>
    <section>
      <h4 class="title">Fluid</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="value[4]" :fluid="true" />
      </div>
    </section>
    <section>
      <h4 class="title">Compact</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="value[5]" :compact="true" />
      </div>
    </section>
    <section>
      <h4 class="title">Set width</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeInputNumber v-model="value[6]" :style="{ width: '150px' }" />
      </div>
    </section>
  </div>
</template>
