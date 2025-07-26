export const dataSet =
  `//  options data set \n` +
  `const optionList = [\n` +
  `   { id: 1, option: 'option1', icon: 'xi-icon', val: 'value1' }\n` +
  `   { id: 2, option: 'option2', icon: 'xi-icon', val: 'value2' }\n` +
  `   { id: 3, option: 'option3', icon: 'xi-icon', val: 'value3' }\n` +
  `   ...\n` +
  `]\n` +
  `// id는 는 필수값은 아닙니다.\n` +
  `// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`
export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const optionList = [] -->\n` +
  `<BeSelectBox :options="optionList"></BeSelectBox>`
export const multiple =
  `<!-- @multiple: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options multiple></BeSelectBox>`
export const use_all =
  `<!-- @isAll: Boolean -->\n` +
  `<!-- multiple일때 -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options multiple :is-all="true"></BeSelectBox>`
export const filtering =
  `<!-- @isSearch: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options :is-search="true"></BeSelectBox>`
export const dropdown_type =
  `<!-- @boxType: dropdown -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options :box-type="boxType"></BeSelectBox>`
export const float_type =
  `<!-- @boxType: float -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options :box-type="boxType"></BeSelectBox>`
export const selected_type =
  `<!-- @selectedType: String -->\n` +
  `<!-- reference: List Component -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options :selected-type="selectedType"></BeSelectBox>`
export const use_icon =
  `<!-- @useIcon: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options :use-icon="useIcon"></BeSelectBox>`
export const placeholder =
  `<!-- @placeholder: String -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options placeholder></BeSelectBox>`
export const compact =
  `<!-- @compact: String -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeSelectBox :options compact></BeSelectBox>`
export const customHeight =
  `<!-- @maxOptHeight: String -->\n` +
  `<!-- default: null -->\n\n` +
  `<BeSelectBox :options :max-opt-height="maxOptHeight"></BeSelectBox>`
export const custom_option =
  `<!-- @optionKey: String -->\n` +
  `<!-- default: 'option' -->\n\n` +
  `<BeSelectBox :options :option-key="optionKey"></BeSelectBox>`
export const custom_result =
  `<!-- @resultKey: String -->\n` +
  `<!-- default: 'null' -->\n\n` +
  `<BeSelectBox :options :result-key="resultKey"></BeSelectBox>`
export const emit =
  `<!-- emit: select -->\n` +
  `<BeSelectBox :options @select="sedtSelect"></BeSelectBox>`
