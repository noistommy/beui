<script setup>
import { ref, reactive, inject, onMounted } from 'vue'
import {
  argbFromHex,
  Hct,
  TonalPalette,
  hexFromArgb,
} from '@material/material-color-utilities'
import { shades, hexToLch, exportColorPaletteScss } from '@/utils/color-util'

import ColorPicker from '../components/color-picker/ColorPicker.vue'
const tones = [20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98]
const s_tones = [15, 25, 35, 40, 45, 55, 65, 75, 85, 95]
const target_tones = [27, 36, 42, 48, 56, 64, 70, 78, 88, 94]

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
const colors = [
  'red',
  'orange',
  'yellow',
  'lightgreen',
  'green',
  'lightblue',
  'blue',
  'deepblue',
  'deeppurple',
  'purple',
  'brown',
  'gray',
]

const valiableColor = {
  red: '#d75757',
  orange: '#ee9033',
  yellow: '#f8b825',
  lightgreen: '#b3bc40',
  green: '#61a475',
  lightblue: '#8cc5ce',
  blue: '#70a3ca',
  deepblue: '#5178af',
  deeppurple: '#9180b4',
  purple: '#af77c0',
  brown: '#a86a82',
  gray: '#8b8b8b',
}

const toast = inject('$toast')
const toastOption = {
  useTitle: false,
  snackbar: true,
  position: 'top-center',
}
const colorName = ref('')
const colorValue = ref('')

const newPalette = ref(null)
const brandPalette = reactive([])
const valiablePalette = reactive([])
onMounted(() => {
  colors.forEach((color) => {
    // console.log(color)
    valiablePalette.push({
      name: color,
      palette: genaratorPalette(valiableColor[color]),
    })
  })
})

const genColor = () => {
  colorName.value = colorName.value.trim()
  colorValue.value = colorValue.value.trim()

  if (!colorName.value) {
    toast.show('error', { contents: '색상 이름을 입력하세요' }, toastOption)
    return
  }
  if (!colorValue.value) {
    toast.show('error', { contents: '색상 값을 입력하세요' }, toastOption)
    return
  }
  if (!hexRegex.test(colorValue.value)) {
    toast.show('error', { contents: '헥사 값을 입력하세요' }, toastOption)
    return
  }
  // newPalette.value = generationPalette(colorValue.value)
  // newPalette.value = generateMaterialPalette2(colorValue.value)
  // const paletters = generatePaletteAlgorithm1({
  //   ...hexToRgb(colorValue.value),
  //   name: colorName.value,
  // })
  const paletters = []
  console.log(hexToLch(colorValue.value))
  console.log(argbFromHex(colorValue.value))
  console.log(Hct.fromInt(argbFromHex(colorValue.value)))
  // console.log(TonalPalette.fromInt(argbFromHex(colorValue.value)).tone(20))
  // const primary = TonalPalette.fromInt(argbFromHex(colorValue.value))
  const kColor = Hct.fromInt(argbFromHex(colorValue.value))
  console.log(kColor.tone)

  const primary = TonalPalette.fromHueAndChroma(kColor.hue, kColor.chroma)
  tones.forEach((tone) => {
    const argb = primary.tone(tone)
    const hct = Hct.fromInt(argb)
    console.log(
      `톤 ${tone}: ${hexFromArgb(argb)} = ${hct.hue}.${hct.chroma}.${hct.tone}`,
    )
    paletters.push({
      tone,
      value: hexFromArgb(argb),
    })
  })

  newPalette.value = paletters
  colorName.value = ''
  colorValue.value = ''
}

const genaratorPalette = (hex) => {
  const palette = []
  const argbColor = argbFromHex(hex)
  const scheme = TonalPalette.fromInt(argbColor) // type 1

  const hct = Hct.fromInt(argbColor)
  console.log(`${hct.hue}|${hct.chroma}|${hct.tone}`)
  // const scheme = TonalPalette.fromHueAndChroma(hct.hue, hct.chroma) // type 2
  target_tones.forEach((tone) => {
    const argb = scheme.tone(tone)
    // const hct = Hct.fromInt(argb)
    // console.log(`${tone}: ${hexFromArgb(argb)} = ${hct.hue}|${hct.chroma}|${hct.tone}`)
    palette.push({
      tone,
      value: hexFromArgb(argb),
    })
  })
  return palette.reverse().map((p, i) => {
    return { ...p, shade: shades[i] }
  })
  // return palette
}

const exportPalette = () => {
  exportColorPaletteScss(valiablePalette)
}
</script>

<template>
  <div class="page-wrapper be-container">
    <h1
      class="be-deepblue"
      :style="{
        display: 'inline-block',
        borderRadius: '4px',
        lineHeight: '1',
        fontWeight: '600',
        padding: '0 5px',
      }"
    >
      Be
    </h1>
    <h1
      class="be-gray-text"
      :style="{
        display: 'inline-block',
        lineHeight: '60px',
        fontWeight: '600',
      }"
    >
      long
    </h1>
    <section>
      <h4>New Color</h4>
      <div class="contents-wrapper">
        <div class="be-input">
          <input type="text" v-model="colorName" placeholder="name" />
        </div>
        <div class="be-input">
          <input type="text" v-model="colorValue" placeholder="color" />
        </div>
        <div class="be-button primary" @click="genColor">생성</div>
      </div>
    </section>
    <section>
      <ColorPicker />
    </section>
    <section>
      <h4 class="title">Color Palette</h4>
      <div class="contents-wrapper">
        <div class="be-button deepblue" @click="exportPalette">EXPORT</div>
        <div class="be-list color-palette">
          <div
            v-for="(pal, i) in newPalette"
            :key="pal.tone"
            class="item color-item"
            :class="{ dark: pal.tone <= 60 }"
            :style="{ backgroundColor: pal.value }"
            v-be-tooltip="pal.value"
          >
            {{ pal.tone }}
          </div>
        </div>
        <div
          class="palette-wrap"
          v-for="palette in valiablePalette"
          :key="palette.name"
        >
          <!-- <h6 class="color-name">{{ palette.name }}</h6> -->
          <div class="palettes">
            <div class="color-item h6 color-name">{{ palette.name }}</div>
            <div
              class="color-item"
              v-for="color in palette.palette"
              :key="color.tone"
              :class="{ dark: color.tone < 60 }"
              :style="{ backgroundColor: color.value }"
              v-be-tooltip="color.value"
            >
              {{ color.shade }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.color-palette {
  display: flex;
  // flex-direction: row-reverse;
  // flex-direction: column;
  .color-item {
    width: 40px;
    padding: 8px 12px;
    text-align: center;
    &.dark {
      color: #fff;
    }
  }
}

.palette-wrap {
  width: 100%;
  .color-name {
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .palettes {
    display: flex;
    .color-item {
      width: 60px;
      padding: 7px;
      text-align: center;
      transition: trnaasform 250ms;
      &.dark {
        color: #fff;
      }
      &:hover:not(.color-name) {
        transform: scale(1.2);
      }
      &.color-name {
        width: 100px;
      }
    }
  }
}
</style>
