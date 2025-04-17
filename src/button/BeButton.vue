<script setup>
import { ref, useSlots, onMounted } from 'vue'

defineProps({
  contentText: {
    type: String,
    default: '',
  },
  brand: {
    type: String
  },
  status: {
    type: String
  },
  color: {
    type: String
  },
  text: {
    type: Boolean
  },
  border: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  fluid: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  compact: {
    type: Boolean
  },
  outline: {
    type: Boolean
  },
  icon: {
    type: Boolean
  },
  withIcon: {
    type: String,
    default: null
  },
  iconPos: {
    type: String
  },
  badge: {
    type: String
  },
  badgeOption: {
    type: String
  }
})
const emit = defineEmits(['on-click'])
const onClick = (e) => {
  emit('on-click', e)
}
const slots = useSlots()
const isMount = ref(false)
console.log(slots.default)

onMounted(() => {
  isMount.value = true
  if (slots.default) {
    const content = slots.default()
    if (content?.length > 0) {
      console.log(content)
    }
  }
})
</script>

<template>
  <button class="be-button"
  :class="[brand, status, color, {text}, {border}, {disabled}, {fluid}, {circle}, {compact}, {outline}, {icon}, {badge: badge}]"
  @click="onClick"
  >
    <template v-if="withIcon && (iconPos === 'left' || iconPos === 'both')">
      <i class="icon" :class="[iconPos, withIcon]"></i>
    </template>
    <template v-if="icon">
        <i class="icon" :class="icon"></i>
    </template>
    <slot>
      {{ contentText }}
    </slot>
    <template v-if="withIcon && (iconPos === 'right' || iconPos === 'both')"></template>
    <template v-if="badge">
      <div class="in-badge" :class="badgeOption">{{ badge }}</div>
    </template>
  </button>
</template>
