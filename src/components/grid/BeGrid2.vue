<script setup>
import { computed } from 'vue'

const props = defineProps({
  setRows: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  autoFit: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  flow: {
    type: String, // column || row
    default: '',
  },
  divide: {
    type: Number,
    default: null,
  },
  md: {
    type: Number,
    default: null,
  },
  sm: {
    type: Number,
    default: null,
  },
  xs: {
    type: Number,
    default: null,
  },
  justify: {
    type: String,
    default: null,
  },
  align: {
    type: String,
    default: null,
  },
  dosirak: {
    type: Boolean,
    default: false,
  },
  rowHeight: {
    type: String,
    default: '50px',
  },
  gridGap: {
    type: String,
    default: '20px',
  },
  columnNumber: {
    type: Number,
    default: null,
  },
  rowNumber: {
    type: Number,
    default: null,
  },
})

const setDivide = computed(() => {
  const divide = props.divide && `divide-column-${props.divide}`
  const divide_md = props.md && `divide-column-md-${props.md}`
  const divide_sm = props.sm && `divide-column-sm-${props.sm}`
  const divide_xs = props.xs && `divide-column-xs-${props.xs}`
  return [divide, divide_md, divide_sm, divide_xs]
})
const setAlign = computed(() => {
  const justify = props.justify && `justify-${props.justify}`
  const align = props.align && `align-${props.align}`
  return [justify, align]
})

const setAutoRows = computed(() => {
  return {
    '--grid-gap': props.gridGap,
    '--grid-auto-row': props.rowHeight,
  }
})
const setGridColNumber = computed(() => {
  if (!props.columnNumber) return
  return {
    '--grid-col-num': props.columnNumber,
  }
})
const setGridRowNumber = computed(() => {
  if (!props.rowNumber) return
  return {
    '--grid-row-num': props.rowNumber,
  }
})
</script>

<template>
  <div
    class="be-grid2"
    :class="[
      ...setDivide,
      ...setAlign,
      { setRows },
      { inline },
      { autoFit },
      { dense },
      flow && `flow-${flow}`,
      { dosirak },
    ]"
    :style="[setAutoRows, setGridColNumber, setGridRowNumber]"
  >
    <slot></slot>
  </div>
</template>
