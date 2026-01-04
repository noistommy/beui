<script setup>
import { shades } from '@/utils/color-util'
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
</script>

<template>
  <div class="page-wrapper be-container">
    <section>
      <h4 class="title">Color Palette</h4>
      <div class="content-wrapper">
        <div v-for="color in colors" :key="color" class="color-palette">
          <!-- <div class="title" :class="`bg-${color}-300`">{{ color }}</div> -->
          <div class="palette">
            <div class="title color-item" :class="`be-${color}`">
              {{ color }}
            </div>
            <div
              v-for="shade in shades"
              :key="shade"
              class="item color-item"
              :class="`bg-${color}-${shade}`"
            >
              {{ shade }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.color-palette .palette {
  display: flex;
  .color-item {
    padding: 10px;
    &.title {
      width: 100px;
    }
  }
}
</style>
