<script setup>
import { ref, onMounted } from 'vue'
const wordList = ['beauty', 'best', 'better', 'bewitch', 'benefit']

const word = ref('')

onMounted(() => {
  playInterval()
})
let interval = null
let count = 0

const playInterval = (state = true) => {
  if (!state) {
    clearInterval(interval)
    word.value = ''
    return
  }
  interval = setInterval(() => {
    word.value = wordList[count % wordList.length].substr(2)
    count++
  }, 5000)
}
</script>
<template>
  <div class="be-logo">
    <span>Be</span>
    <span class="rolling-words">
      <span>{{ word }}</span>
    </span>
  </div>
</template>

<style scoped>
.be-logo {
  display: inline-flex;
}
.rolling-words {
  color: var(--primary);
}
</style>
