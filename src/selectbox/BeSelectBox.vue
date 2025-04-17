<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  target: {
    type: String,
  },
  options: {
    type: Array,
    default: () => {
      return []
    },
  },
  selectedValue: {
    type: [Array, Object, String],
    default: () => {
      return null
    },
  },
  boxType: {
    type: String,
    default: 'dropdown', // dropdown, float
  },
  placeholder: {
    type: String,
    default: '선택하세요',
  },
  isSearch: {
    type: Boolean,
    default: false,
  },
  useIcon: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  maxOptHeight: {
    type: Number,
    default: 260,
  },
  selectedType: {
    type: String,
    default: 'bg',
  },
  optionKey: {
    type: String,
    default: 'option',
  },
  resultKey: {
    type: String,
    default: 'val'
  },
  isAll: {
    type: Boolean,
    default: false,
  },
  fluid: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])
// const selectedValue = defineModel()

const elRef = ref(null)
const menu = ref(null)
const isShow = ref(false)
// const selectedIndex = ref(0)
const setEl = (el) => {
  elRef.value = el
}

const selectedItem = ref(null)
const selectedList = ref([])
const optionList = reactive(props.options)
const searchText = ref(null)
const selectedText = computed(() => {
  if (props.multiple) {
    return selectedList.value.length > 0 ?  `${selectedList.value.length} 개 선택` : null
  } else {
    const selectIndex = props.options.findIndex(t => t[props.resultKey] === selectedItem.value)
    return props.options[selectIndex] ? props.options[selectIndex][props.optionKey] : null
  }
})

const selectedIndex = computed(() => {
  return selectedItem.value ? searchedOptions.value.findIndex(f => f[props.resultKey] === selectedItem.value) : 0
})

const searchedOptions = computed(() => {
  if (props.isSearch && searchText.value && !props.multiple) {
    return optionList.filter((item) => item[props.optionKey].toLowerCase().indexOf(searchText.value.toLowerCase()) > -1)
  } else {
    return optionList
  }
})
const optionsHeight = computed(() => {
  if (!props.maxOptHeight) return
  return { maxHeight: props.maxOptHeight + 'px' }
})




watch(props, () => {
  initValue()
})

onMounted(async () => {
  await initValue()
  window.addEventListener('click', () => showMenu(false))

  console.log(elRef.value)
})
onUnmounted(() => {
  window.removeEventListener('click', () => showMenu(false))
})

const initValue = () => {
  if (props.multiple) {
    selectedList.value = props.selectedValue ? props.selectedValue : []
    selectedItem.value = props.selectedValue ? `${props.selectedValue.length} 개 선택` : null
  } else {
    selectedItem.value = props.selectedValue
  }
}

const menuStyle = ref({
  top: props.boxType === 'dropdown' ? '100%' : selectedIndex.value * -37 + 'px',
})

const toggleOpen = () => {
  if (props.multiple && isShow.value) return
  const posEl = elRef.value.getBoundingClientRect()

  let menuPos
  if ( window.innerHeight - posEl.bottom - props.maxOptHeight - 10 < 0) {
    menuPos = 'up'
  } else {
    menuPos = 'down'
  }
  if (menuPos === 'up') {
    menuStyle.value = {
      top: 'auto',
      bottom: props.boxType === 'dropdown' ? '100%' : '0',
    }
  } else {
    menuStyle.value = {
      top: props.boxType === 'dropdown' ? '100%' : selectedIndex.value * -37 + 'px',
    }
  }
  isShow.value = !isShow.value
}

const selectItem = (value) => {
  if (props.multiple) {
    setMultipleList(value)
  } else {
    searchText.value = null
    selectedItem.value = value[props.resultKey]
    emit('select', selectedItem.value, props.target)
  }
}

const showMenu = (value = true) => {
  if (elRef.value && elRef.value.contains(event.target)) return
  if (isShow.value) value = false
  isShow.value = value
}

const setMultipleList = (item) => {
  if (selectedList.value.includes(item[props.resultKey])) {
    const same = selectedList.value.findIndex((c) => item[props.resultKey] === c)
    selectedList.value.splice(same, 1)
  } else {
    selectedList.value.push(item[props.resultKey])
  }
  emit('select', selectedList.value, props.target)
}

const selectAll = () => {
  selectedList.value = [...searchedOptions.value].map((se) => se[props.resultKey])
  emit('select', selectedList.value, props.target)
}
</script>

<template>
  <div
    class="be-select-box"
    :class="[boxType, { multiple, fluid, disabled }, { show: isShow }]"
    @click="toggleOpen"
    :ref="setEl"
  >
  <div class="selected-item">
    <template v-if="!isSearch">
      <div class="default-text" :class="{has: selectedItem}">
        {{ selectedText || placeholder }}
      </div>
    </template>
    <template v-else>
      <div class="be-input icon right" :class="{fluid, disabled, has: selectedItem}">
        <input type="text" :placeholder="selectedText || placeholder" v-model="searchText" :readonly="!isSearch || !isShow" />
      </div>
    </template>
    <i
      v-if="isShow && multiple"
      class="icon xi-close"
      :style="{ pointerEvents: 'auto' }"
      @click.stop="isShow = false"
    ></i>
    <i v-else class="icon xi-angle-down"></i>
  </div>
    <!-- <div class="selected-list">
      <span class="be-tag label" v-for="s in selectedList" :key="s">
        {{searchedOptions[s].option}}
      </span>
    </div> -->
    <Transition name="extend-fade">
      <div v-if="isShow" class="select-menu" :style="[optionsHeight, menuStyle]">
        <div class="be-list selection" :class="selectedType" ref="menu">
          <div v-if="isSearch && searchedOptions.length === 0" class="no-searched">
            검색 결과가 없습니다.
          </div>
          <template v-else>
            <div v-if="isAll && multiple" class="item option-item" @click="selectAll">전체</div>
            <div
              class="item option-item"
              v-for="(opt, idx) in searchedOptions"
              :key="`option-${idx}`"
              :class="[
                { selected: opt[resultKey] === selectedItem },
                { include: selectedList.includes(opt[resultKey]) },
              ]"
              @click="selectItem(opt, idx)"
            >
              <template v-if="useIcon">
                <i class="list-icon icon" :class="opt.icon"></i>
              </template>
              <div class="item-title">
                {{ opt[props.optionKey] }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.no-searched {
  padding: 0.5rem;
}
.be-select-box {
  .be-list {
    .item {
      padding: 1rem;
    }
  }
  .be-input {
    &.has input::placeholder {
      opacity: 1;
      color: var(--txt);
    }
  }
}
.select-menu {
  display: block;
  transform: translateY(0);
  overflow-y: auto;
  opacity: 1;
}
.extend-fade-enter-active,
.extend-fade-leave-active {
  transition:
    opacity 0.25s,
    transform 0.25s;
}
.extend-fade-leave-active {
  transition: transform 0.25s;
}
.extend-fade-enter-from,
.extend-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
