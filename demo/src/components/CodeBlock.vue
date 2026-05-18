<script setup>
import { ref, shallowRef, onMounted, onUnmounted, watch } from 'vue'
import { createHighlighter } from 'shiki'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: 'javascript',
  },
  border: {
    type: Boolean,
    default: true,
  },
  useToggle: {
    type: Boolean,
    default: true,
  },
  show: {
    type: Boolean,
    default: false,
  },
})

const isShow = ref(props.show)
const highlightedCode = ref(null)
const highlighter = shallowRef(null)

/** `App.vue`와 동일: `<html>`의 `dark-mode` / `light-mode`에 맞춤 */
function resolveCodeTheme() {
  if (typeof document === 'undefined') return 'github-light'
  return document.documentElement.classList.contains('dark-mode')
    ? 'github-dark'
    : 'github-light'
}

const highlight = async () => {
  if (!highlighter.value) {
    highlighter.value = await createHighlighter({
      langs: [props.lang],
      themes: ['github-light', 'github-dark'],
    })
  }
  highlightedCode.value = highlighter.value.codeToHtml(props.code, {
    lang: props.lang,
    theme: resolveCodeTheme(),
  })
}

let htmlClassObserver = null

onMounted(() => {
  isShow.value = props.useToggle ? props.show : true
  highlight()
  htmlClassObserver = new MutationObserver(() => {
    highlight()
  })
  htmlClassObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onUnmounted(() => {
  htmlClassObserver?.disconnect()
  htmlClassObserver = null
})

watch(() => props.code, highlight)
watch(
  () => props.lang,
  async () => {
    highlighter.value = null
    await highlight()
  },
)
</script>

<template>
  <div class="code-header">
    <div class="title"></div>
    <div v-if="useToggle" class="be-tag label" @click="isShow = !isShow">
      <i class="icon left xi-code"></i>
      {{ isShow ? 'Close' : 'Code' }}
    </div>
  </div>
  <Transition name="extend">
    <div v-if="isShow" class="code-wrapper" :class="{ border }">
      <span class="lang">{{ lang }}</span>
      <div v-html="highlightedCode"></div>
    </div>
  </Transition>
</template>

<style lang="scss">
.code-header {
  display: flex;
  justify-content: space-between;
  items-align: center;
  margin-bottom: 5px;
}
.code-wrapper {
  position: relative;
  background-color: var(--suf);
  margin-bottom: 5px;
  border-radius: 4px;
  &.border {
    border: 1px solid var(--brd);
  }
  > span.lang {
    position: absolute;
    right: 0.75rem;
    top: 0.5rem;
    font-family: monospace;
    font-size: 0.75rem;
    letter-spacing: -0.05em;
    color: rgba(107, 114, 128, 0.85);
  }
  pre.shiki {
    overflow: auto;
    border-radius: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    background-color: transparent !important;
  }
}

.extend-enter-active,
.extend-leave-active {
  transition:
    opacity 0.25s,
    transform 0.25s;
  transform-origin: top center;
}
.extend-leave-active {
  transition: transform 0.25s;
}
.extend-enter-from,
.extend-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>
