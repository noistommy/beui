export const base_component = `<!-- Component only -->
<!-- script setup -->
<!-- const result = ref() -->
<BeSlider v-model="result"></BeSlider>`
export const disabled = `<!--@disabled: Boolean -->
<!--default: false -->
<BeRate disabled></BeRate>`
export const showLabel = `<!--@showLabel: Boolean -->
<!--default: false -->
<BeRate show-label="{showLable}"></BeRate>`
export const userLabel = `<!--@min: Number -->
<!--@max: Number -->
<!--default: 0 -->
<BeRate show-label="{showLable}" :min="{min}" :max="{max}"></BeRate>`
export const tooltip = `<!--@showTooltip: Boolean -->
<!--default: false -->
<BeRate show-tooltip="{showTooltip}"></BeRate>`
export const current = `<!--@showValue: Boolean -->
<!--default: false -->
<BeRate show-value="{showValue}"></BeRate>`
export const unit = `<!--@unitText: String -->
<!--default: null -->
<BeRate unit-text="{unitText}"></BeRate>`
export const trackType = `<!--@trackType: {normal | thin | fat} -->
<!--default: null -->
<BeRate tranck-type="{trackType}"></BeRate>`
export const step = `<!--@step: Boolean -->
<!--default: false -->
<BeRate show-step="{step}"></BeRate>`
export const color = `<!--@color: String -->
<!--default: null -->
<BeRate result-color="{color}"></BeRate>`
