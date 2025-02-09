<script setup>
import { ref } from 'vue'
import BeButton from '@/beComponents/beButton/BeButton.vue'
import BeInput from '@/beComponents/beInput/BeInput.vue'

const insertValue = ref('')
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
</template>

<style></style>
