<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'input',
    validator(value) {
      return ['input', 'textarea'].includes(value)
    },
  },
  inputType: {
    type: String,
    default: 'text',
  },
  align: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'center', 'right'].includes(value)
    },
  },
  placeholder: {
    type: String,
    default: '입력하세요',
  },
  iconLeft: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
})
const inputValue = defineModel()

const iconPosition = computed(() => {
  if (props.iconLeft && props.iconRight) return 'both'
  return props.iconLeft ? 'left' : props.iconRight ? 'right' : null
})
</script>

<template>
  <button class="be-input" :class="[{ icon: iconLeft || iconRight }, iconPosition]">
    <slot>
      <i v-if="iconLeft" :class="`icon xi-${iconLeft}`" />
      <template v-if="type === 'input'">
        <input
          :type="inputType"
          v-model="inputValue"
          :placeholder="placeholder"
          :class="[`aline-${align}`]"
        />
      </template>
      <template v-else>
        <textarea v-model="inputValue" rows="3" :placeholder="placeholder"></textarea>
      </template>
      <i v-if="iconRight" :class="`icon xi-${iconRight}`" />
    </slot>
  </button>
</template>
