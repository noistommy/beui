<script setup>
import { ref } from 'vue'
const optionList = [
  { id: 1, option: 'run', icon: 'xi-run' },
  { id: 2, option: 'bicycle', icon: 'xi-bicycle' },
  { id: 3, option: 'airplane', icon: 'xi-airplane' },
  { id: 4, option: 'car', icon: 'xi-car' },
  { id: 5, option: 'bus', icon: 'xi-bus' },
  { id: 6, option: 'taxi', icon: 'xi-taxi' },
]

const optionSubList = [
  { id: 1, option: 'car', icon: 'xi-car', sub: 'public' },
  { id: 2, option: 'bus', icon: 'xi-bus', sub: 'public' },
  { id: 3, option: 'taxi', icon: 'xi-taxi', sub: 'public' },
]

const selectList = [ 'mark', 'bg', 'text', 'mark bg', 'mark text', 'bg text', 'bg text mark']
const selectedType = ref('bg')
const selectedItem = ref(optionList[0])
</script>

<template>
  <div id="ListPage" class="page-wrapper be container">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <BeList :options="optionList"></BeList>
      </div>
    </section>
    <section>
      <h4 class="title">Selection</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <div class="coltroller" :style="{width: '100%'}">
          <div class="be-buttons outline">
            <div class="be-button" v-for="item in selectList" :key="item" :class="{selected: item === selectedType}" @click="selectedType = item">{{ item }}</div>
          </div>
        </div>
        <BeList v-model="selectedItem" :options="optionList" :selection="true" :selected-type="selectedType"></BeList>
      </div>
    </section>
    <section>
      <h4 class="title">Sub Title</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <BeList :options="optionSubList" :selection="true"></BeList>
      </div>
    </section>
    <section>
      <h4 class="title">with Icon</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <BeList :options="optionList" :icon="true"></BeList>
      </div>
    </section>
    <section>
      <h4 class="title">Bordered</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <BeList :options="optionList" :bordered="true"></BeList>
      </div>
    </section>
    <section>
      <h4 class="title">with Image</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <BeList :options="optionList" :image="true"></BeList>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
#ListPage {
  .be-list {
    width: 250px;
    border: 1px solid #eee;
    & > .item {
      padding: 10px;
      &:hover {
        background-color: #ebebeb;
      }
    }
  }
}
</style>
