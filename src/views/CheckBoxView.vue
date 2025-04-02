<script setup>
import { ref } from 'vue'

const radioValue = ref(1)
const compValue = ref(false)
const compValue1 = ref(false)
const cbValue = ref([true, false, false, true])

const checkList = ['Run', 'Walk', 'Fly']
// const checkList = [
//   { label: 'Run', value: false },
//   { label: 'Walk', value: false },
//   { label: 'Fly', value: false },
// ]
const result = ref(['Run'])
const resultRadio = ref('Run')
const setResult = (payload) => {
  console.log('checkbox', payload)
}
const setResultRadio = (payload) => {
  console.log("radio",payload)
  // resultRadio.value = payload
}
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
      <div class="desc">
        <span class="be-tag label purple">css</span>
      </div>
      <div class="contents-wrapper">
        <div class="be-checkbox" :class="{ checked: cbValue[0] }">
          <input type="checkbox" id="checkbox1" v-model="cbValue[0]" />
          <label for="checkbox1">Checkbox1</label>
        </div>
        <div class="be-checkbox" :class="{ checked: cbValue[1] }">
          <input type="checkbox" id="checkbox2" v-model="cbValue[1]" />
          <label for="checkbox2">Checkbox2</label>
        </div>
        <div class="be-checkbox" :class="{ checked: cbValue[2] }">
          <input type="checkbox" id="checkbox3" v-model="cbValue[2]" />
          <label for="checkbox3">Checkbox3</label>
        </div>
        <div class="be-checkbox indeter" :class="{ checked: cbValue[3] }">
          <input type="checkbox" id="checkbox4" v-model="cbValue[3]" />
          <label for="checkbox4">Checkbox Indeter</label>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">CheckBox</h4>
      <div class="desc">
        <span class="be-tag label deepblue">component</span>
      </div>
      <div class="contents-wrapper">
        <BeCheckBox v-model="compValue" id="checkComp" label-text="component" />
        <BeCheckBox v-model="compValue1" type="radio" id="checkComp" label-text="component" />
      </div>
    </section>
    <section>
      <h4 class="title">Indeterminate</h4>
      <div class="desc">
        <span class="be-tag label deepblue">component</span>
      </div>
      <div class="contents-wrapper">
        <BeCheckBox v-model="compValue" id="checkComp" label-text="component" :indeter="true" />
      </div>
    </section>
    <section>
      <h4 class="title">CheckBox Group</h4>
      <div class="desc">
        <span class="be-tag label deepblue">component</span>
      </div>
      <div class="contents-wrapper">
        <BeCheckBoxGroup :check-list="checkList" v-model:result="result" @update:result="setResult" />
        [ <div class="be-tag label" v-for="re in result" :key="re">{{ re }}</div>]
      </div>
    </section>
    <section>
      <h4 class="title">Radio</h4>
      <div class="desc">
        <span class="be-tag label">component</span>
      </div>
      <div class="contents-wrapper">
        <BeRadio :option-list="checkList" v-model:result="resultRadio" @update:result="setResultRadio"></BeRadio>
        <div class="be-tag label">
          {{ resultRadio }}
        </div>
      </div>
    </section>
  </div>
</template>
