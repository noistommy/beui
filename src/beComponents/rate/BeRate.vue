<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  rateLength: {
    type: Number,
    default: 5
  },
  useHalf: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: 'xi-star'
  },
  resultValue: {
    type: Number,
    default: 0
  },
  size: {
    type: String,
    default: null
  },
  readonly: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])
const rate = ref(0)
const result = ref(0)
const isHalf = ref(false)

onMounted(() => {
  rate.value = props.useHalf ? props.resultValue : Math.floor(props.resultValue)
  result.value = props.useHalf ? props.resultValue : Math.floor(props.resultValue)
})
const onHover = (num) => {
  if (props.useHalf) {
    const targetPos = event.target.getBoundingClientRect()
    isHalf.value = targetPos.left + (targetPos.width / 2) - event.pageX > 0
  }
  rate.value = num
}

const onMove = (num) => {
  if (!props.useHalf) return
  onHover(num)
}
const onLeave = () => {
  rate.value = Math.ceil(result.value) || 0
}

const setRate = (num) => {
  result.value = result.value === num ? 0 : num
  if (props.useHalf) {
    result.value = isHalf.value ? num - 0.5 : num
  }
  emit('select', result.value)
}
</script>

<template>
  <div class="be-rate" :class="[size, color, {readonly, disabled}]">
    <span v-for="item in rateLength" :key="item"
      class="rate-item"
      :class="[{check: rate >= item}, {half: rate === item && isHalf}]"
      @mouseenter="onHover(item)"
      @mouseleave="onLeave"
      @mousemove="onMove(item)"
      @click="setRate(item)"
    >
      <i class="icon" :class="`${icon}-o`"></i>
      <i class="icon" :class="icon"></i>
    </span>
  </div>
</template>
