export const base_html = `<!-- 반드시 <label></label> 과 input name 작성할것-->
<div class="be-checkbox">
    <input type="checkbox" name="checkbox" />
    <label for="checkbox" type="checkbox" />
</div>`
export const base_component = `<!-- script setup -->
<!-- const inputValue = ref(null) -->
<BeCheckbox v-model="inputValue" name="checkbox" label-text="{labelText}"></BeCheckbox>`
export const type = `<!-- @type: {checkbox | radio} -->
<!-- default: checkbox -->
<BeCheckbox v-model="inputValue" name="checkbox" type="{type}"></BeCheckbox>`
export const indeter = `<!-- @indet: Boolean -->
<!-- default: false -->
<!-- html -->
<div class="be-checkbox indeter">
    <input type="checkbox" name="checkbox" />
    <label for="checkbox" type="checkbox" />
</div>
<!-- component -->
<BeCheckbox v-model="inputValue" name="checkbox" indeter"></BeCheckbox>
`
export const checkbox_group = `<!-- script setup -->
<!-- const checkboxList = ['A', 'B', 'C'] -->
<!-- const results = ref([]) -->
<BeCheckboxGroup  +
    :check-list="checkboxList"
    v-model:result="results"  +
    @update:result="setResults"  +
></BeCheckboxGroup>`
export const radios = `<!-- script setup -->
<!-- const optionList = ['A', 'B', 'C'] -->
<!-- const results = ref('') -->
<BeRadio  +
    :option-list="optionList"
    v-model:result="results"  +
    @update:result="setResults"  +
></BeRadio>
`
