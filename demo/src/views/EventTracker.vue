<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

let events = []

const eventObj = ref({})
const e_queue = ref([])

const setQueue = () => {
  e_queue.value = [...events, eventObj.value]
}
const setEvent = (e) => {
  if (e.repeat) return
  eventObj.value = e
}

onMounted(() => {
  window.addEventListener('keydown', setEvent)
  window.addEventListener('keyup', setQueue)
})
onUnmounted(() => {
  window.removeEventListener('keydown', setEvent)
  window.removeEventListener('keyup', setQueue)
})

const metaKey = computed(() => {
  const metaArr = []
  if (eventObj.value.shiftKey) metaArr.push('shift')
  if (eventObj.value.metaKey) metaArr.push('command')
  if (eventObj.value.altKey) metaArr.push('option')
  if (eventObj.value.ctrlKey) metaArr.push('ctrl')

  return metaArr
})
</script>

<template>
  <div class="be-list">
    <div class="item">key: {{ eventObj.key }}</div>
    <div class="item">keyCode: {{ eventObj.keyCode }}</div>
    <div class="item">charCode: {{ eventObj.charCode }}</div>
    <div class="item">altKey: {{ eventObj.altKey }}</div>
    <div class="item">ctrlKey: {{ eventObj.ctrlKey }}</div>
    <div class="item">metaKey: {{ eventObj.metaKey }}</div>
    <div class="item">shiftKey: {{ eventObj.shiftKey }}</div>
    <div class="item">code: {{ eventObj.code }}</div>
    <div class="item">repeat: {{ eventObj.repeat }}</div>
    <div class="item">type: {{ eventObj.type }}</div>
  </div>
  {{ e_queue }}
  <template v-if="e_queue.length > 0">
    <div
      class="be-tag kbd"
      :class="{ meta: metaKey.length > 0 }"
      v-for="evt in e_queue"
      :key="evt"
    >
      {{ evt }}
    </div>
  </template>
</template>
