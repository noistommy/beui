<template>
  <div class="color-picker" id="material-color-picker" @mouseup="onChange">
    <!-- HTML 마크업 -->
    <div class="primary-color-strip" id="primary-color-strip">
      <div class="color-indicator" id="primary-indicator"></div>
    </div>

    <div class="shade-picker" id="shade-picker">
      <div class="shade-picker-mask">
        <div class="shade-picker-fill"></div>
        <div class="shade-picker-saturator"></div>
        <div class="shade-picker-value"></div>
      </div>
      <div class="shade-indicator" id="shade-indicator"></div>
    </div>

    <div class="hue-slider" id="hue-slider">
      <div class="hue-indicator" id="hue-indicator"></div>
    </div>

    <div class="color-value">
      <div class="color-preview" id="color-preview"></div>
      <div class="color-hex" id="color-hex"></div>
      <div class="be-input">
        <input
          type="text"
          id="color-hex-input"
          v-model="selectedColor"
          placeholder="Hex Color"
          @input="onChange"
        />
      </div>
    </div>
    <div class="color-hsl-value" v-if="hslColor">
      <div class="be-button">{{ Math.round(hslColor.h) }}</div>
      <div class="be-button">{{ Math.round(hslColor.s) }}</div>
      <div class="be-button">{{ Math.round(hslColor.l) }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, watch, ref } from 'vue'

import { hexToHSL } from '@/utils/color-util'
// JavaScript 클래스 import 또는 컴포넌트에 직접 포함
import MaterialColorPicker from './color-picker'

const selectedColor = ref('#15EF00')
let colorPicker = null

onMounted(() => {
  // DOM이 준비된 후 색상 선택기 초기화
  colorPicker = new MaterialColorPicker('material-color-picker')

  // 색상 값을 업데이트하기 위한 인터벌 설정
  if (colorPicker) {
    selectedColor.value = colorPicker.getColor()
  }
})

const hslColor = ref(null)

const onChange = () => {
  selectedColor.value = colorPicker.getColor()
  hslColor.value = hexToHSL(selectedColor.value)
}
watch(
  () => selectedColor.value,
  (value) => {
    console.log(selectedColor.value)
    if (isValidHexColor(value)) {
      colorPicker.setColor(value)
      selectedColor.value = colorPicker.getColor()
      hslColor.value = hexToHSL(selectedColor.value)
    }
  },
)
// Validate hex color format
const isValidHexColor = (color) => {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color)
}

// Auto prefix # if missing
// const updateColorFromInput = () => {
//   if (inputColor.value && !inputColor.value.startsWith('#')) {
//     inputColor.value = '#' + inputColor.value
//   }
// }
</script>

<style lang="scss" scoped>
.color-picker {
  width: 300px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.primary-color-strip {
  height: 32px;
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
}

.color-indicator {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 32px;
  border: 2px solid white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.shade-picker {
  width: 100%;
  aspect-ratio: 168 / 80;
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
  cursor: crosshair;
  .shade-picker-mask {
    position: relative;
    width: 100%;
    height: 100%;
    > div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}

.shade-indicator {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.hue-slider {
  width: 100%;
  height: 20px;
  margin-bottom: 16px;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
  position: relative;
  cursor: pointer;
}

.hue-indicator {
  position: absolute;
  top: 0;
  width: 6px;
  height: 20px;
  background-color: white;
  border-radius: 3px;
  transform: translateX(-50%);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.color-value {
  display: flex;
  align-items: center;
  input {
    font-family: monospace;
  }
}

.color-preview {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.color-hex {
  font-family: monospace;
  font-size: 14px;
  color: #333;
}
</style>
