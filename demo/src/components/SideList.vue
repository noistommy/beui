<script setup>
// import { onMounted } from 'vue'
import { elementList, viewsList, layoutList } from '@/contents'
defineProps({
  current: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="side-list-wrapper">
    <!-- <div class="list-title gray-30">
      <h5>Ready</h5>
    </div> -->
    <!-- <div class="be-list nav-list selection">
      <RouterLink to="/">
        <div class="item">Home</div>
      </RouterLink>
      <RouterLink to="/about">
        <div class="item">About</div>
      </RouterLink>
      <RouterLink to="/color-palette">
        <div class="item">Color Palette</div>
      </RouterLink>
    </div> -->
    <div class="list-title">
      <h6>Element</h6>
    </div>
    <div class="be-list nav-list selection text mark">
      <div
        class="item"
        v-for="item in elementList"
        :key="item.name"
        :class="{ selected: current === item.name }"
      >
        <RouterLink :to="item.path">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <div class="list-title">
      <h6>Views</h6>
    </div>
    <div class="be-list nav-list selection text mark">
      <div
        class="item"
        v-for="item in viewsList"
        :key="item.name"
        :class="{ selected: current === item.name }"
      >
        <RouterLink :to="item.path">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <div class="list-title">
      <h6>Layout</h6>
    </div>
    <div class="be-list nav-list selection text mark">
      <div
        class="item"
        v-for="item in layoutList"
        :key="item.name"
        :class="{ selected: current === item.name }"
      >
        <RouterLink :to="item.path">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-list-wrapper {
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  font-size: 0.85em;
  background-color: var(--bgc);
  .list-title {
    color: #d6d6d6;
    padding: 10px;
    font-size: 0.95em;
  }
  .nav-list {
    max-height: none;
    .item {
      border-radius: 4px;
      &:hover {
        background-color: #ddd;
      }
      a {
        width: 100%;
        padding: 8px;
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
