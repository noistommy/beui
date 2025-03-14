<script setup>
defineProps({
  type: {
    type: String,
    default: 'checkbox',
    varidator: (value) => {
      return ['checkbox', 'radio'].includes(value)
    },
  },
  name: {
    type: String,
  },
  labelText: {
    type: String,
    default: '',
  },
})

const checkedValue = defineModel()
</script>

<template>
  <div
    class="be-checkbox"
    :class="[type, { checked: checkedValue }]"
    @click="checkedValue = !checkedValue"
  >
    <input type="checkbox" :name="name" v-model="checkedValue" />
    <label>
      <slot>{{ labelText }}</slot>
    </label>
  </div>
</template>
