<script setup>
defineProps({
  contentText: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button class="be-button" :class="[]">
    <slot>{{ contentText }}</slot>
  </button>
</template>
