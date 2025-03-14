<script setup>
import { ref, computed } from 'vue'

const stateIcon = {
  success: 'xi-check-circle',
  info: 'xi-info',
  error: 'xi-emoticon-devil',
  attention: 'xi-warning',
  importance: 'xi-star',
}

const props = defineProps({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  icon: {
    type: String
  },
  state: {
    type: String,
    default: null,
    varidator: (value) => {
      return ['success', 'error', 'info', 'attention', 'importance'].includes(value)
    }
  }
})

const iconName = computed(() => {
  if (props.state) {
    return stateIcon[props.state]
  } else {
    return props.icon
  }
})


</script>

<template>
  <div class="be-message" :class="[{icon}, state]">
    <slot>
      <template v-if="icon">
        <i class="icon" :class="iconName" />
      </template>
      <div class="title">{{ title }}</div>
      <div class="contents">{{ contents }}</div>
    </slot>
  </div>
</template>
