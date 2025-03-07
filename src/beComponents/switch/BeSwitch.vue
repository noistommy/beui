<script setup>
defineProps({
  type: {
    type: String,
    default: 'slide',
    varidator: (value) => {
      return ['slide', 'button'].includes(value)
    }
  },
  inside: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
  },
  onText: {
    type: String,
    default: 'ON'
  },
  offText: {
    type: String,
    default: 'OFF'
  }
})
const switchValue = defineModel()
const emit = defineEmits(['change'])

const onClick = () => {
  switchValue.value = !switchValue.value
  emit('change', switchValue.value)
}

</script>
<template>
  <div class="be-switch" :class="[type, {inside}, {round:round} ]" @click="onClick">
    <input type="checkbox" v-model="switchValue" />
    <template v-if="type === 'slide'">
      <div class="switch"></div>
    </template>
    <template v-else>
      <slot>
        <span class="on" :class="{active: switchValue}">{{ onText }}</span>
        <span class="off" :class="{active: !switchValue}">{{ offText }}</span>
      </slot>
    </template>
  </div>
</template>

<style lang="scss">
// .be-switch.button {
//   position: relative;
//   overflow: hidden;
//   &:before {
//     content: '';
//     position: absolute;
//     border-radius: 4px;
//     background-color: var(--primary);
//     width: 50%;
//     height: calc(100% - 4px);
//     top: 2px;
//     right: 2px;
//     transition: right 250ms ease;
//   }
//   &:has(input:checked) {
//     &:before {
//       right: calc(50% - 2px);
//     }
//   }
//   span {
//     background-color: transparent !important;
//     position: relative;
//     z-index: 3;
//   }
// }
</style>
