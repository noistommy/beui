<script setup>
import { ref } from 'vue'
const options = [
  { id: 1, option: 'Run', icon: 'xi-run', val: 'run' },
  { id: 2, option: 'Bicycle', icon: 'xi-bicycle', val: 'bicycle' },
  { id: 3, option: 'Airplane', icon: 'xi-airplane', val: 'airplane' },
  { id: 4, option: 'Public:car', icon: 'xi-car', val: 'car' },
  { id: 5, option: 'Public:bus', icon: 'xi-bus', val: 'bus' },
  { id: 6, option: 'Public:taxi', icon: 'xi-taxi', val: 'taxi' },
]
const labels = [
  { id: 11, label: 'run', icon: 'xi-run', val: 'run' },
  { id: 12, label: 'bicycle', icon: 'xi-bicycle', val: 'bicycle' },
  { id: 13, label: 'airplane', icon: 'xi-airplane', val: 'airplane' },
  { id: 14, label: 'public:car', icon: 'xi-car', val: 'car' },
  { id: 15, label: 'public:bus', icon: 'xi-bus', val: 'bus' },
  { id: 16, label: 'public:taxi', icon: 'xi-taxi', val: 'taxi' },
]
const result = ref(null)
const resultList = ref(null)
const setResult = (name, payload) => {
  result.value = payload
}
const setSelect = (payload) => {
  console.log(payload)
  resultList.value = payload
}
</script>

<template>
  <div class="page-wrapper">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base(single)</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options />
      </div>
    </section>
    <section>
      <h4 class="title">Base(multiple)</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="selected-list">
          <span class="be-tag label" v-for="item in resultList" :key="item">
            {{ item }}
          </span>
        </div>
        <BeSelectBox  :is-search="true" :options :multiple="true" max-opt-height="" @select="setSelect" />
      </div>
    </section>
    <section>
      <h4 class="title">Search & Filtering</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options :is-search="true" />
      </div>
    </section>
    <section>
      <h4 class="title">Dropdown Type</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options />
      </div>
    </section>
    <section>
      <h4 class="title">Float Type</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options box-type="float" />
      </div>
    </section>
    <section>
      <h4 class="title">Selected Type</h4>
      <div class="desc">mark, test, bg 스타일을 조합하여 사용한다</div>
      <div class="contents-wrapper">
        <div class="wrapper">
          <h5>mark 타입</h5>
          <BeSelectBox :options selected-type="mark" />
        </div>
        <div class="wrapper">
          <h5>text 타입</h5>
          <BeSelectBox :options selected-type="text" />
        </div>
        <div class="wrapper">
          <h5>bg 타입</h5>
          <BeSelectBox :options selected-type="bg" />
        </div>
        <div class="wrapper">
          <h5>bg + mark 타입</h5>
          <BeSelectBox :options selected-type="bg mark" />
        </div>
        <div class="wrapper">
          <h5>text + mark 타입</h5>
          <BeSelectBox :options selected-type="text mark" />
        </div>
        <div class="wrapper">
          <h5>text + bg 타입</h5>
          <BeSelectBox :options selected-type="text bg" />
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Use Icon</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options :use-icon="true" />
      </div>
    </section>
    <section>
      <h4 class="title">Placeholder</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options placeholder="아무거나 선택하세요." />
      </div>
    </section>
    <section>
      <h4 class="title">Compact</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options class="compact" />
      </div>
    </section>
    <section>
      <h4 class="title">Option Limit Height</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options max-opt-height="120px" />
      </div>
    </section>
    <section>
      <h4 class="title">User Custom Option Key</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options="labels" option-key="label"  :use-icon="true" />
      </div>
    </section>
    <section>
      <h4 class="title">Emit</h4>
      <div class="desc">emit:select</div>
      <div class="contents-wrapper">
        <BeSelectBox :options @select="setResult" />
      </div>
      {{ result }}
    </section>
    <section>
      <h4 class="title">Model</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeSelectBox :options v-model="result" />
      </div>
      {{ result }}
    </section>
  </div>
</template>

<style lang="scss">
.selected-list {
  width: 100%;
}
</style>
