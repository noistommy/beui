const e=`<!-- 반드시 <label></label> 과 input name 작성할것-->
<div class="be-checkbox">
   <input type="checkbox" name="checkbox" />
   <label for="checkbox" type="checkbox" />
</div>`,t=`<!-- script setup -->
<!-- const inputValue = ref(null) -->
<BeCheckbox v-model="inputValue" name="checkbox" label-text="{labelText}"></BeCheckbox>`,n=`<!-- @type: {checkbox | radio} -->
<!-- default: checkbox -->

<BeCheckbox v-model="inputValue" name="checkbox" type="{type}"></BeCheckbox>`,c=`<!-- @indet: Boolean -->
<!-- default: false -->

<!-- html -->
<div class="be-checkbox indeter">
   <input type="checkbox" name="checkbox" />
   <label for="checkbox" type="checkbox" />
</div>
<!-- component -->
<BeCheckbox v-model="inputValue" name="checkbox" indeter"></BeCheckbox>`,o=`<!-- script setup -->
<!-- const checkboxList = ['A', 'B', 'C'] -->
<!-- const results = ref([]) -->
<BeCheckboxGroup
    :check-list="checkboxList"
   v-model:result="results"
    @update:result="setResults"
 ></BeCheckboxGroup>`,s=`<!-- script setup -->
<!-- const optionList = ['A', 'B', 'C'] -->
<!-- const results = ref('') -->
<BeRadio
    :option-list="optionList"
   v-model:result="results"
    @update:result="setResults"
 ></BeRadio>`;export{t as a,e as b,o as c,c as i,s as r,n as t};
