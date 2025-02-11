<script setup>
import { ref } from 'vue'

const radioValue = ref(1)
const cbValue = ref([true, false, false])
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
        <div class="be-checkbox" :class="{checked: cbValue[0]}">
          <input type="checkbox" id="checkbox1" v-model="cbValue[0]" />
          <label for="checkbox1">Checkbox1</label>
        </div>
        <div class="be-checkbox" :class="{checked: cbValue[1]}">
          <input type="checkbox" id="checkbox2" v-model="cbValue[1]" />
          <label for="checkbox2">Checkbox2</label>
        </div>
        <div class="be-checkbox" :class="{checked: cbValue[2]}">
          <input type="checkbox" id="checkbox3" v-model="cbValue[2]" />
          <label for="checkbox3">Checkbox3</label>
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
