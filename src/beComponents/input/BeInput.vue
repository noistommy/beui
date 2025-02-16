<script setup>
import { computed } from 'vue'
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
  clear: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: String,
    default: null,
  },
  badgeOption: {
    type: String,
    default: null,
  },
})
const inputValue = defineModel()

const iconPosition = computed(() => {
  if (props.iconLeft && (props.iconRight || props.clear)) return 'both'
  return props.iconLeft ? 'left' : props.iconRight || props.clear ? 'right' : null
})
</script>

<template>
  <div
    class="be-input"
    :class="[{ icon: iconLeft || iconRight || clear }, iconPosition, { badge: badge }]"
  >
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

      <i
        v-if="clear"
        class="icon clear-btn xi-close"
        :class="{ disabled: inputValue === '' }"
        @click="inputValue = ''"
      />
      <i v-else-if="iconRight && !clear" :class="`icon xi-${iconRight}`" />
      <span v-else-if="badge" class="be-badge" :class="badgeOption">{{ badge }}</span>
    </slot>
  </div>
</template>
