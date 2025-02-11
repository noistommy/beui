<script setup>
import { ref } from 'vue'
// import BeButton from '@/beComponents/beButton/BeButton.vue'
// import BeInput from '@/beComponents/beInput/BeInput.vue'
// import BeCheckBox from '@/beComponents/beCheckBox/BeCheckBox.vue'

const insertValue = ref('')
const checkValue = ref(false)
const radioValue = ref('test3')
const switchValue = ref(false)
const pageValue = ref(1)
</script>
<template>
  <div class="button">
    <BeButton>{{ insertValue }}</BeButton>
    <BeButton class="primary">Button</BeButton>
    <BeButton class="circle">Button</BeButton>
    <BeButton disabled>Button</BeButton>
    <BeButton class="icon">
      <i class="icon xi-star"></i>
    </BeButton>
    <BeButton class="outline red circle">
      <i class="icon left xi-angle-left"></i>
      Left
    </BeButton>
  </div>
  <div class="input">
    <BeInput />
    <BeInput v-model="insertValue" />
    <BeInput icon-left="search" icon-right="close" />
    <BeInput class="underline icon left">
      <i class="icon left xi-search"></i>
      <input type="number" placeholder="숫자를 입력하세요" />
    </BeInput>
    <BeInput type="textarea"></BeInput>
  </div>
  <div class="checkbox">
    <BeCheckBox id="test" name="check" v-model="checkValue">Test CheckBox</BeCheckBox>
  </div>
  <div class="radio">
    <BeCheckBox type="radio" id="test1" name="check" v-model="radioValue">Test1</BeCheckBox>
    <BeCheckBox type="radio" id="test2" name="check" v-model="radioValue">Test2</BeCheckBox>
    <BeCheckBox type="radio" id="test3" name="check" v-model="radioValue">Test3</BeCheckBox>
    {{  radioValue }}
  </div>
  <div class="switch">
    <BeSwitch v-model="switchValue" />
    <BeSwitch v-model="switchValue" :round="true" />
    <BeSwitch v-model="switchValue" type="button" />
    <BeSwitch v-model="switchValue" type="button" :round="true" />
    <BeSwitch v-model="switchValue" type="button" :round="true" on-text="Start" off-text="End" />
  </div>
  <div class="pagination">
    <BePagination v-model="pageValue" :limits="5" :page-length="8" :round="true"></BePagination>
    Current: {{ pageValue }}
  </div>
</template>

<style></style>
