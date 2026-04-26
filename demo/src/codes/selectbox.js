export const dataSet = `//  options data set
const optionList = [
    { id: 1, option: 'option1', icon: 'xi-icon', val: 'value1' }
    { id: 2, option: 'option2', icon: 'xi-icon', val: 'value2' }
    { id: 3, option: 'option3', icon: 'xi-icon', val: 'value3' }
    ...
]
// id는 는 필수값은 아닙니다.
// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`
export const base_component = `<!-- script setup -->
<!-- const optionList = [] -->
<BeSelectBox :options="optionList"></BeSelectBox>`
export const multiple = `<!-- @multiple: Boolean -->
<!-- default: false -->
<BeSelectBox :options multiple></BeSelectBox>`
export const use_all = `<!-- @isAll: Boolean -->
<!-- multiple일때 -->
<!-- default: false -->
<BeSelectBox :options multiple :is-all="true"></BeSelectBox>`
export const filtering = `<!-- @isSearch: Boolean -->
<!-- default: false -->
<BeSelectBox :options :is-search="true"></BeSelectBox>`
export const round = `<!-- @round: Boolean -->
<!-- default: false -->
<BeSelectBox :options round></BeSelectBox>`
export const disabled = `<!-- @disabled: Boolean -->
<!-- default: false -->
<BeSelectBox :options disabled></BeSelectBox>`
export const fluid = `<!-- @fluid: Boolean -->
<!-- default: false -->
<BeSelectBox :options fluid></BeSelectBox>`
export const dropdown_type = `<!-- @boxType: dropdown -->
<!-- default: false -->
<BeSelectBox :options :box-type="boxType"></BeSelectBox>`
export const float_type = `<!-- @boxType: float -->
<!-- default: false -->
<BeSelectBox :options :box-type="boxType"></BeSelectBox>`
export const selected_type = `<!-- @selectedType: String -->
<!-- reference: List Component -->
<!-- default: false -->
<BeSelectBox :options :selected-type="selectedType"></BeSelectBox>`
export const use_icon = `<!-- @useIcon: Boolean -->
<!-- default: false -->
<BeSelectBox :options :use-icon="useIcon"></BeSelectBox>`
export const placeholder = `<!-- @placeholder: String -->
<!-- default: false -->
<BeSelectBox :options placeholder></BeSelectBox>`
export const compact = `<!-- @compact: String -->
<!-- default: false -->
<BeSelectBox :options compact></BeSelectBox>`
export const customHeight = `<!-- @maxOptHeight: String -->
<!-- default: null -->
<BeSelectBox :options :max-opt-height="maxOptHeight"></BeSelectBox>`
export const custom_option = `<!-- @optionKey: String -->
<!-- default: 'option' -->
<BeSelectBox :options :option-key="optionKey"></BeSelectBox>`
export const custom_result = `<!-- @resultKey: String -->
<!-- default: 'null' -->
<BeSelectBox :options :result-key="resultKey"></BeSelectBox>`
export const emit = `<!-- emit: select -->
<BeSelectBox :options @select="sedtSelect"></BeSelectBox>`
