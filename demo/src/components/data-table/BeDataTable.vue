<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import DataCell from '@/components/common/BeDataTable/DataCell.vue'

const props = defineProps({
  columns: {
    type: Array,
    default: () => {
      return []
    },
  },
  options: {
    type: Object,
    default: () => {
      return {}
    },
  },
  listType: {
    type: String,
    default: 'table',
  },
  useFixed: {
    type: Boolean,
    default: false,
  },
  dataList: {
    type: Array,
    default: () => {
      return []
    },
  },
  current: {
    type: Number,
    default: 1,
  },
  sortInfo: {
    type: Object,
    default: () => {
      return { sort: '', column: '' }
    },
  },
  containerWidth: {
    type: Number,
    default: 10,
  },
})
const emit = defineEmits(['select', 'sort'])

const modal = inject('$beModal')

const el = ref(null)
const hoveredIndex = ref(null)
const columnList = ref(props.columns)
const totalWidth = computed(() => {
  return columnList.value.reduce((t, c) => {
    const item = c.width
    return (t += item)
  }, 0)
})
// const mainPaneWidth = computed(() => {
//   return el.value ? el.value.parentElement.clientWidth - 40 : 0
// })
const maxTable = ref(0)
const minCellWidth = 120
const baseCellWidth = ref(null)

const fixedColumn = ref(false)

const selectedItem = ref(null)

onMounted(() => {
  const parent = el.value.parentElement
  mainSizeObs.observe(parent)
  // setColumns()
})

const setColumns = () => {
  // maxTable.value = el.value.parentElement.clientWidth
  baseCellWidth.value = Math.max(Math.round(maxTable.value / props.columns.length), minCellWidth)
  let sumCol = 0
  columnList.value.forEach((column) => {
    if (!column.width) column.width = baseCellWidth
    if (column.isFix) column.left = sumCol
    sumCol += column.width
  })
}

const selectItem = (row, i) => {
  selectedItem.value = i
  emit('select', { row, index: i })
}

const setSort = (column) => {
  console.log(event.target.dataset.sort)
  const sortType = event.target.dataset.sort
  emit('sort', { sortType, column })
}

const onConfirm = (payload) => {
  modal.show({
    comp: 'confirm',
    props: {
      title: '확인',
      description: `${payload}가 확인 되었습니다.`,
    },
  })
}

const mainSizeObs = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentRect.width > 0) {
      maxTable.value = entry.contentRect.width
      setColumns()
    }
  }
})

const moveSelect = (e) => {
  // up: 38 / down: 40
  if (selectedItem.value === null) return
  if (e.keyCode === 38 && selectedItem.value > 0) {
    selectedItem.value--
  }
  if (e.keyCode === 40 && selectedItem.value < props.dataList.length - 1) {
    selectedItem.value++
  }
  emit('select', { row: props.dataList[selectedItem.value], index: selectedItem.value })
}
</script>

<template>
  <div v-if="columnList.length === 0" class="not-found-data">
    <div class="message">
      <img src="../../../assets/img/icon-robot.svg" alt="robot" />
      <h1>찾으시는 데이터가 없습니다.</h1>
    </div>
  </div>
  <div
    v-else
    class="be-data-table"
    :class="[listType, { 'fixed-on': fixedColumn }]"
    ref="el"
    tabindex="-1"
    @keydown.prevent="moveSelect"
  >
    <div
      class="be-data-table-wrapper grid-table"
      :style="{ width: Math.max(totalWidth, maxTable - 60) + 'px' }"
    >
      <div class="data-table-header-group">
        <div class="data-table-header-wrapper">
          <div class="data-table-header-title-row">
            <div class="main-title-wrapper">
              <div v-if="props.useFixed" class="select-fix-column">
                <label>컬럼 고정</label>
                <BeSwitch type="button" v-model="fixedColumn" :round="true" />
              </div>
            </div>
          </div>
          <div class="header-row grid-row">
            <div
              class="header-column grid-column"
              v-for="(col, idx) in columnList"
              :key="`header-${idx}`"
              :style="{
                flexBasis: `${col.width}px`,
                maxWidth: `${col.width}px`,
                // maxWidth: col.main || columnList.length - 1 === idx ? '100%' : `${col.width}px`,
                left: `${col.left}px`,
              }"
              :class="[{ main: idx === 0 }, { fixed: col.isFix }]"
            >
              <div class="header-cell grid-cell">
                <div class="title-wrapper">
                  <div class="column-title">{{ col.name }}</div>
                  <template v-if="col.sort">
                    <div
                      class="sort-btn header-btn"
                      :class="[sortInfo.column === col.key ? sortInfo.type : '']"
                      @click="setSort(col.key)"
                    >
                      <i class="xi-angle-up" data-sort="asc"></i>
                      <i class="xi-angle-down" data-sort="desc"></i>
                    </div>
                  </template>
                </div>
              </div>
              <!-- <div class="column-resize-handle"></div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="data-table-body-wrapper">
        <template v-if="dataList.length === 0">
          <div class="no-data">
            <div class="message">
              <img src="../../../assets/img/icon-robot-monitor.svg" alt="" />
              <h3 class="description">찾으시는 데이터가 없습니다.</h3>
            </div>
          </div>
        </template>
        <div
          class="body-row grid-row"
          v-for="(row, i) in dataList"
          :key="`table-row-${i}`"
          :class="{ selected: selectedItem === i }"
        >
          <div
            class="body-column grid-column"
            v-for="(val, jdx) in columnList"
            :key="`value-${jdx}`"
            :style="{
              flexBasis: `${val.width}px`,
              maxWidth: `${val.width}px`,
              left: `${val.left}px`,
            }"
            :class="[
              { main: jdx === 0 },
              { fixed: val.isFix },
              { 'col-hover': hoveredIndex === jdx },
            ]"
            @mouseenter="hoveredIndex = jdx"
            @mouseleave="hoveredIndex = null"
          >
            <div class="cell grid-cell">
              <div class="cell-wrap">
                <div v-if="jdx === 0 && val.key === 'detail'" @click="selectItem(row, i)">
                  <div class="be-button icon tiny">
                    <i class="xi-arrow-right"></i>
                  </div>
                </div>
                <template v-else-if="row[val.key] !== null">
                  <DataCell
                    :type="val.type"
                    :data="row[val.key]"
                    :option="options[val.key]"
                    @confirm="onConfirm"
                  />
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$table-cell-h-padding: calc((14 / 14) * 1em);
$table-cell-v-padding: 0;
$table-cell-padding: $table-cell-v-padding $table-cell-h-padding;
$table-bg-color: transparent;
$table-border-color: #eee;
$table-header-border-color: #ddd;
$table-row-hover-color: #d7d7d7;
$table-cell-hover-color: #eeeeee; //rgba(0, 0, 0, 0.04)
$table-header-cell-bg: #eeeeee;
// $table-header-cell-bg: #333333;
$table-header-cell-text: #333;
$table-header-title-bg: #eeeeee;

.be-data-table {
  --table-bg: $table-bg-color;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  border-bottom: 1px solid $table-border-color;
  .grid-table {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    // background-color: $table-color-bg;
    .grid-row {
      position: relative;
      display: flex;
      width: 100%;
      .grid-column {
        flex: 1 0 auto;
        // max-width: 200px;
        flex-shrink: 0;
        border-bottom: 1px solid;
        border-right: 1px solid;
        border-color: $table-border-color;
        background-color: var(--table-bg);
        flex-grow: 1;
        &.main {
          // flex-basis: 400px;
          flex-grow: 1;
        }
        .grid-cell {
          padding: $table-cell-padding;
          line-height: 1;
          // border-bottom: 1px solid;
          // border-right: 1px solid;
          // border-color: $table-border-color;
          display: flex;

          align-items: center;
          min-height: 37px;
          &.header-cell {
            justify-content: center;
            padding: 0;
            margin: 0 5px;
            min-height: 42px;
            // background-color: #eee;
          }
          &.cell {
            & > div {
              width: 100%;
            }
          }
        }
        &.header-column {
          // border-top: 1px solid;
          border-bottom: 1px solid;
          border-top: 1px solid;
          border-color: $table-header-border-color;
          background-color: $table-header-cell-bg;
          color: $table-header-cell-text;
          .column-resize-handle {
            position: absolute;
            right: 0;
            top: 0;
            width: 6px;
            height: 100%;
            border-radius: 4px;
            background-color: var(--primary);
            transform: translateX(50%);
          }
        }
        &:last-child {
          flex-grow: 1;
        }
      }
      &:hover:not(.header-row) {
        .grid-column {
          // background-color: rgba(0, 0, 0, 0.16);
          background-color: $table-row-hover-color;
          &.fixed {
            background-color: $table-row-hover-color;
          }
        }
      }
      &.body-row {
        &.selected .grid-column {
          background-color: #eaf4f6;
        }
      }
    }
  }
  &.list {
    --table-bg: #f8f8f8;
    .header-row {
      .grid-column {
        border: 0;
      }
    }
    .body-row {
      margin-top: 5px;
      border-radius: 4px;
      .grid-column {
        border: 0;
        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }
    }
  }
  .data-table-header-group {
    // background-color: $table-header-cell-bg;
    position: sticky;
    top: 0;
    z-index: 200;
  }
  .data-table-header-title-row {
    color: #333;
    background-color: #fff;
    width: 100%;
    // position: absolute;
    // padding: 20px;

    .main-title-wrapper {
      position: sticky;
      padding: $table-cell-padding;
      left: 0;
      width: fit-content;
      .select-fix-column {
        margin-bottom: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }
  }
  .data-table-header-wrapper {
    position: sticky;
    top: 0;
    z-index: 200;
    background-color: #fff;
    .header-row {
      // padding-top: 40px;
    }
    .header-column {
      cursor: pointer;
      color: #333;
      // background-color: #eeez
      font-weight: 700;
      &:first-child {
        border-top-left-radius: 14px;
        border-bottom-left-radius: 14px;
      }
      &:last-child {
        border-top-right-radius: 14px;
        border-bottom-right-radius: 14px;
      }
      .header-btn {
        // display: block;
        // cursor: pointer;
        // width: 24px;
        // height: 24px;
        // padding: 4px;
        // background-color: #fff;
        // border-radius: 50%;
        &:hover {
          opacity: 1;
        }
      }
      // .fix-btn {
      //   opacity: 0;
      //   position: absolute;
      //   top: 0;
      //   left: 50%;
      //   transform: translate(-50%, -60%);
      //   box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.04);
      // }
      .title-wrapper {
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        .sort-btn {
          color: #d6d6d6;
          display: inline-flex;
          flex-direction: column;
          cursor: pointer;
          border-radius: 1em;
          gap: 4px;
          overflow: hidden;
          > i {
          }
          &.asc {
            i[data-sort='asc'] {
              background-color: var(--primary);
              font-size: 0.8em;
              color: #fff;
              padding: 4px;
            }
          }
          &.desc {
            i[data-sort='desc'] {
              background-color: var(--primary);
              font-size: 0.8em;
              color: #fff;
              padding: 4px;
            }
          }
        }
        .column-title {
          flex-grow: 1;
        }
      }
      &:hover {
        .sort-btn {
          background-color: #fff;
          color: #333;
        }
      }
      .sorted {
        .sort-btn {
          color: #6d9d72;
        }
      }
      &:hover {
        .fix-btn {
          display: inline-block;
        }
      }
    }
  }
  .data-table-body-wrapper {
    position: relative;
    width: 100%;
    flex-grow: 1;
    .grid-column {
      color: #333;
      background-color: var(--table-bg);
      &.col-hover {
        border-color: #fff;
        background-color: $table-cell-hover-color;
      }
    }
  }
  &.fixed-on {
    .grid-column {
      &.fixed {
        background-color: #ffffff;
        position: sticky;
        z-index: 100;
        &.col-hover {
          background-color: $table-cell-hover-color;
        }
        &.header-column {
          background-color: $table-header-cell-bg;
        }
      }
    }
  }
}

.no-data {
  display: grid;
  place-items: center;
  height: 100%;
  position: relative;

  .message {
    text-align: center;
    width: 25%;
    z-index: 10;
    img {
      width: 100%;
    }
  }
}
</style>
