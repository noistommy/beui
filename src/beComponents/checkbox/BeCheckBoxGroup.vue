<script setup>
import { ref } from 'vue'
const props = defineProps({
  checkList: {
    type: Array,
    required: true,
  },
})

const cbValue = ref(props.checkList)

const selectCheck = () => {}
</script>

<template>
  <div class="be-checkout-group">
    <div
      v-for="(item, i) in cbValue"
      :key="item.label"
      class="be-checkbox"
      :class="{ checked: item.value }"
    >
      <input
        type="checkbox"
        :id="`${item.label}-${i}`"
        v-model="item.value"
        @change="selectCheck"
      />
      <label :for="`${item.label}-${i}`">{{ item.label }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.be-checkout-group {
  display: flex;
}
</style>
