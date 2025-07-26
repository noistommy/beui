export const base_component =
  `<!-- only component -->\n` +
  `<!-- script setup -->\n` +
  `<!-- const inputValue = ref(0) -->\n` +
  `<BeInputNumber v-model="inputValue"></BeInputNumber>`
export const disabled =
  `<!-- @disabled: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeInputNumber v-model="inputValue" disabled></BeInputNumber>`
export const controller =
  `<!-- @controller: {between | end} -->\n` +
  `<!-- default: between -->\n\n` +
  `<BeInputNumber v-model="inputValue" controller="{controller}"></BeInputNumber>`
export const min_max =
  `<!-- @min: Number -->\n` +
  `<!-- @max: Number -->\n` +
  `<!-- default: null -->\n\n` +
  `<BeInputNumber v-model="inputValue" :min="{min}" :max="{max}"></BeInputNumber>`
export const step =
  `<!-- @step: Number -->\n` +
  `<!-- default: null -->\n\n` +
  `<BeInputNumber v-model="inputValue" :step="{step}"></BeInputNumber>`
export const userIcon =
  `<!-- @decIcon: String -->\n` +
  `<!-- @incIcon: String -->\n` +
  `<!-- default: null -->\n\n` +
  `<BeInputNumber v-model="inputValue"\n` +
  ` :dec-icon="{decIcon}" :inc-icon="{inc-icon}"\n` +
  `></BeInputNumber>`
export const fluid =
  `<!-- @fluid: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeInputNumber v-model="inputValue" fluid></BeInputNumber>`
export const compact =
  `<!-- @compact: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeInputNumber v-model="inputValue" compact></BeInputNumber>`
export const setWidth =
  `<!-- user custom style: width: 150px -->\n` +
  `<BeInputNumber v-model="inputValue" :style="{ width: '150px' }"></BeInputNumber>`
