<script setup>
import { inject } from 'vue'
import { setFormattedDate, thousand, phoneNumber } from '@/utils'
const props = defineProps({
  type: {
    type: String,
  },
  data: {
    type: [String, Number, Object, Boolean, null],
  },
  option: {
    type: [Object, Array],
  },
  viewType: {
    type: String,
    default: 'table',
  },
})
const emit = defineEmits(['confirm'])
const toast = inject('$toast')
const toastOption = {
  useTitle: false,
  snackbar: true,
  position: 'top-center',
}

const copyContents = (e) => {
  if (props.type === 'tag' || props.type === 'icon') return
  const range = document.createRange()
  range.selectNodeContents(e.target)
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)

  document.execCommand('copy')
  toast.show('success', { contents: '복사 되었습니다.' }, toastOption)
}

const onConfirm = () => {
  toast.show('info', { contents: props.data }, {})
  emit('confirm', props.data)
}
</script>
<template>
  <div :class="[type, viewType]" @click="copyContents">
    <template v-if="type === 'tag'">
      <div v-if="data" class="be-button compact circle bold" :class="option[data].opt">
        {{ option[data].label }}
      </div>
    </template>
    <template v-else-if="type === 'confirm'">
      <div
        v-if="data"
        class="be-button compact circle bold"
        :class="option[data].opt"
        @click.stop="onConfirm"
      >
        {{ option[data].label }}
      </div>
    </template>
    <template v-else-if="type === 'icon'">
      <div class="be-button compact text bold">
        <i class="icon left" :class="[option[data].opt, option[data].icon]" />
        <span>{{ option[data].label }}</span>
      </div>
    </template>
    <template v-else-if="type === 'label'">
      <span v-if="data" class="cell-label">{{ data }}</span>
    </template>
    <template v-else-if="type === 'mark'">
      <span :class="data ? 'on' : 'off'">{{ data ? option[1].label : option[0].label }}</span>
    </template>
    <template v-else-if="type === 'date' || type === 'dateTime'">
      <span class="cell-date">{{ setFormattedDate(data, type).formatDate }}</span>
      <span class="be-tag label round tiny bold"> UTC{{ setFormattedDate(data, type).tz }} </span>
    </template>
    <template v-else-if="type === 'price'">
      <span>
        <i class="icon xi-won be-purple-text"></i>
      </span>
      <span>{{ thousand(data) }}</span>
    </template>
    <template v-else-if="type === 'count'">
      <span>{{ thousand(data) || 0 }}</span>
    </template>
    <template v-else-if="type === 'phone'">
      <span>{{ phoneNumber(data) }}</span>
    </template>
    <template v-else-if="type === 'select'">
      <span>{{ option[data].label }}</span>
    </template>
    <template v-else-if="type === 'state'">
      <div v-if="data" class="be-button compact fluid bold" :class="option[data].opt">
        {{ option[data].label }}
      </div>
    </template>
    <template v-else>
      {{ data }}
    </template>
  </div>
</template>

<style lang="scss" scoped>
.string {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  line-height: 1.4;
}
.date {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.label {
  span.cell-label {
    padding: 1px 4px;
    border-radius: 3px;
    background-color: #eee;
    font-family: 'Noto Sans Mono', Monospaced;
    line-height: 1.4;
  }
}
.price,
.count {
  text-align: right;
  font-family: 'Noto Sans Mono', Monospaced;
  line-height: 1.4;
  letter-spacing: -1px;
}
.price {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
.mark span {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ccc;
  }
  &.on:before {
    background-color: green;
  }
  &.off:before {
    background-color: red;
  }
}
.list {
  &.price,
  &.date {
    justify-content: flex-start;
  }
  &.count {
    text-align: left;
  }
}
</style>
