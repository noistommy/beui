export const base_component = `<!-- only component -->
<!-- script setup -->
<!-- const inputValue = ref(0) -->
<BeInputNumber v-model="inputValue"></BeInputNumber>`
export const round = `<!-- @round: Boolean -->
<!-- default: false -->
<BeInputNumber v-model="inputValue" round></BeInputNumber>`
export const disabled = `<!-- @disabled: Boolean -->
<!-- default: false -->
<BeInputNumber v-model="inputValue" disabled></BeInputNumber>`
export const controller = `<!-- @controller: {between | end} -->
<!-- default: between -->
<BeInputNumber v-model="inputValue" controller="{controller}"></BeInputNumber>`
export const min_max = `<!-- @min: Number -->
<!-- @max: Number -->
<!-- default: null -->
<BeInputNumber v-model="inputValue" :min="{min}" :max="{max}"></BeInputNumber>`
export const step = `<!-- @step: Number -->
<!-- default: null -->
<BeInputNumber v-model="inputValue" :step="{step}"></BeInputNumber>`
export const userIcon = `<!-- @decIcon: String -->
<!-- @incIcon: String -->
<!-- default: null -->
<BeInputNumber v-model="inputValue"
  :dec-icon="{decIcon}" :inc-icon="{inc-icon}"
></BeInputNumber>`
export const fluid = `<!-- @fluid: Boolean -->
<!-- default: false -->
<BeInputNumber v-model="inputValue" fluid></BeInputNumber>`
export const compact = `<!-- @compact: Boolean -->
<!-- default: false -->
<BeInputNumber v-model="inputValue" compact></BeInputNumber>`
export const setWidth = `<!-- user custom style: width: 150px -->
<BeInputNumber v-model="inputValue" :style="{ width: '150px' }"></BeInputNumber>
`
