export const base_component =
  `<!-- Component only -->\n` +
  `<!-- script setup -->\n` +
  `<!-- const result = ref() -->\n` +
  `<BeSlider v-model="result"></BeSlider>`
export const disabled =
  `<!--@disabled: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate disabled></BeRate>`
export const showLabel =
  `<!--@showLabel: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate show-label="{showLable}"></BeRate>`
export const userLabel =
  `<!--@min: Number -->\n` +
  `<!--@max: Number -->\n` +
  `<!--default: 0 -->\n\n` +
  `<BeRate show-label="{showLable}" :min="{min}" :max="{max}"></BeRate>`
export const tooltip =
  `<!--@showTooltip: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate show-tooltip="{showTooltip}"></BeRate>`
export const current =
  `<!--@showValue: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate show-value="{showValue}"></BeRate>`
export const unit =
  `<!--@unitText: String -->\n` +
  `<!--default: null -->\n\n` +
  `<BeRate unit-text="{unitText}"></BeRate>`
export const trackType =
  `<!--@trackType: {normal | thin | fat} -->\n` +
  `<!--default: null -->\n\n` +
  `<BeRate tranck-type="{trackType}"></BeRate>`
export const step =
  `<!--@step: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate show-step="{step}"></BeRate>`
export const color =
  `<!--@color: String -->\n` +
  `<!--default: null -->\n\n` +
  `<BeRate result-color="{color}"></BeRate>`
