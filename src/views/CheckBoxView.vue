<script setup>
import { ref } from 'vue'

const radioValue = ref(1)
const cbValue = ref(true)
</script>

<template>
  <div class="page-wrapper be-container">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-checkbox">
          <input type="checkbox" />
          <label>Base</label>
        </div>
        <div class="be-checkbox checked">
          <input type="checkbox" />
          <label>Checked Base</label>
        </div>
        <div class="be-checkbox radio">
          <input type="checkbox" />
          <label>Base</label>
        </div>
        <div class="be-checkbox radio checked">
          <input type="checkbox" />
          <label>Checked Radio</label>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">CheckBox</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-checkbox" :class="{checked: cbValue}">
          <input type="checkbox" id="checkbox" v-model="cbValue" />
          <label for="checkbox">Checkbox</label>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Radio</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-checkbox radio" v-for="item in 3" :key="item" :class="{checked: radioValue === item}">
          <input type="radio" :id="item" name="radios" v-model="radioValue" :value="item"/>
          <label :for="item">Radio {{ item }}</label>
        </div>
      </div>
    </section>
  </div>
</template>
