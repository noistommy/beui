<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  options: {
    type: Array,
    default: () => {
      return []
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
    type: String,
    default: '200px',
  },
  selectedType: {
    type: String,
    default: 'bg'
  }

})

const emit = defineEmits(['select'])
const el = ref(null)
const menu = ref(null)
const isShow = ref(false)
const selectedItem = ref(null)
const selectedList = reactive([])
const optionList = reactive(props.options)

const searchedOptions = computed(() => {
  if (props.isSearch && selectedItem.value) {
    return optionList.filter(item => item.option.indexOf(selectedItem.value) > -1)
  } else {
    return optionList
  }
})
const optionsHeight = computed(() => {
  if (!props.maxOptHeight) return
  return { maxHeight: props.maxOptHeight }
})

onMounted(() => {
  window.addEventListener('click', () => showMenu(false))
})
onUnmounted(() => {
  window.removeEventListener('click', () => showMenu(false))
})


const toggleOpen = () => {
  if (props.multiple && isShow.value) return
  isShow.value = !isShow.value

}

const selectItem = (value, index) => {
  if (props.multiple) {
    setMultipleList(value)
    selectedItem.value = selectedList.length + '개 선택'
  } else {
    selectedItem.value = value.option
    emit('select', { ...value, index})
  }
}

const showMenu = (value = true) => {
  if (el.value && el.value.contains(event.target)) return
  if (isShow.value) value = false
  isShow.value = value
}

const setMultipleList = (item) => {
  if (selectedList.includes(item)) {
    const same = selectedList.findIndex(c => item.option === c.option)
    selectedList.splice(same, 1)
  } else {
    selectedList.push(item)
  }
  emit('select', selectedList)
}

</script>

<template>
  <div class="be-select-box" :class="[boxType, {multiple}, { show: isShow }]" @click="toggleOpen" ref="el">
    <div class="selected-item be-input icon right">
      <input type="text" :placeholder v-model="selectedItem" :readonly="!isSearch || !isShow" />

      <i v-if="isShow && multiple" class="icon xi-close" :style="{pointerEvents: 'auto'}" @click.stop="isShow = false"></i>
      <i v-else class="icon xi-angle-down"></i>
    </div>
    <!-- <div class="selected-list">
      <span class="be-tag label" v-for="s in selectedList" :key="s">
        {{searchedOptions[s].option}}
      </span>
    </div> -->
    <Transition name="extend-fade">
      <div v-if="isShow" class="select-menu" :style="optionsHeight">
        <div class="be-list selection" :class="selectedType" ref="menu">
          <div v-if="searchedOptions.length === 0" class="no-searched">
            검색 결과가 없습니다.
          </div>
          <div
            v-else
            class="item option-item"
            v-for="(opt, idx) in searchedOptions"
            :key="`option-${idx}`"
            :class="[{selected: opt.option === selectedItem}, {include: selectedList.includes(opt)}]"
            @click="selectItem(opt, idx)"
          >
            <template v-if="useIcon">
              <i class="list-icon icon" :class="opt.icon"></i>
            </template>
            <div class="item-title">
              {{ opt.option }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.no-searched {
  padding: .5rem;
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
  transition:
    transform 0.25s;
}
.extend-fade-enter-from,
.extend-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
