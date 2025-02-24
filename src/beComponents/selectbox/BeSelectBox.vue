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
    type: [Array, Object],
    default: () => {
      return null
    },
  },
  boxType: {
    type: String,
    default: 'dropdown', // dropdown, float
  },
  selectType: {
    type: String,
    default: 'single', // single, multiple
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
    default: 250,
  },
  selectedType: {
    type: String,
    default: 'bg',
  },
  optionKey: {
    type: String,
    default: 'option',
  },
  isAll: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['select'])
// const selectedValue = defineModel()

const el = ref(null)
const menu = ref(null)
const isShow = ref(false)
const selectedItem = ref(null)
const selectedList = ref([])
const optionList = reactive(props.options)

const menuStyle = ref({
  top: '100%',
})

const searchedOptions = computed(() => {
  if (props.isSearch && selectedItem.value) {
    return optionList.filter((item) => item[props.optionKey].indexOf(selectedItem.value) > -1)
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

onMounted(() => {
  initValue()
  window.addEventListener('click', () => showMenu(false))
})
onUnmounted(() => {
  window.removeEventListener('click', () => showMenu(false))
})

const initValue = () => {
  if (props.multiple) {
    selectedList.value = props.selectedValue ? props.selectedValue : []
    selectedItem.value = props.selectedValue ? props.selectedValue.length : null
  } else {
    selectedItem.value = props.selectedValue
  }
}

const toggleOpen = () => {
  if (props.multiple && isShow.value) return
  const posEl = el.value.getBoundingClientRect()
  const menuPos = window.innerHeight - posEl.bottom - props.maxOptHeight - 10 < 0 ? 'up' : 'down'
  if (menuPos === 'up') {
    menuStyle.value = {
      top: 'auto',
      bottom: '100%',
    }
  }
  isShow.value = !isShow.value
}

const selectItem = (value, index) => {
  if (props.multiple) {
    setMultipleList(value)
    selectedItem.value = selectedList.value.length + '개 선택'
  } else {
    selectedItem.value = value[props.optionKey]
    emit('select', selectedItem.value, props.target)
  }
}

const showMenu = (value = true) => {
  if (el.value && el.value.contains(event.target)) return
  if (isShow.value) value = false
  isShow.value = value
}

const setMultipleList = (item) => {
  if (selectedList.value.includes(item[props.optionKey])) {
    const same = selectedList.value.findIndex((c) => item[props.optionKey] === c)
    selectedList.value.splice(same, 1)
  } else {
    selectedList.value.push(item[props.optionKey])
  }
  emit('select', selectedList.value, props.target)
}

const selectAll = () => {
  selectedList.value = [...searchedOptions.value].map((se) => se[props.optionKey])
  emit('select', selectedList.value, props.target)
}
</script>

<template>
  <div
    class="be-select-box"
    :class="[boxType, { multiple }, { show: isShow }]"
    @click="toggleOpen"
    ref="el"
  >
    <div class="selected-item be-input icon right">
      <input type="text" :placeholder v-model="selectedItem" :readonly="!isSearch || !isShow" />

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
                { selected: opt[props.optionKey] === selectedItem },
                { include: selectedList.includes(opt[props.optionKey]) },
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
