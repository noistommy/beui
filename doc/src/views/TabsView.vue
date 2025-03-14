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


const selectedTab =ref('run')
</script>

<template>
  <div id="ListPage" class="page-wrapper be container">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tabs">
          <div class="tab-menu">
            <div class="tab-item tab" v-for="tab in optionList" :key="tab" :class="{active: tab.option === selectedTab}" @click="selectedTab = tab.option">{{ tab.option }}</div>
          </div>
          <div class="tab-contents">
            {{ selectedTab }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Vertical</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tabs vertical">
          <div class="tab-menu">
            <div class="tab-item tab" v-for="tab in optionList" :key="tab" :class="{active: tab.option === selectedTab}" @click="selectedTab = tab.option">{{ tab.option }}</div>
          </div>
          <div class="tab-contents">
            {{ selectedTab }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Active with line</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tabs line">
          <div class="tab-menu">
            <div class="tab-item tab" v-for="tab in optionList" :key="tab" :class="{active: tab.option === selectedTab}" @click="selectedTab = tab.option">{{ tab.option }}</div>
          </div>
          <div class="tab-contents">
            {{ selectedTab }}
          </div>
        </div>
        <div class="be-tabs line vertical">
          <div class="tab-menu">
            <div class="tab-item tab" v-for="tab in optionList" :key="tab" :class="{active: tab.option === selectedTab}" @click="selectedTab = tab.option">{{ tab.option }}</div>
          </div>
          <div class="tab-contents">
            {{ selectedTab }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tabs button">
          <div class="tab-menu">
            <div class="tab-item tab" v-for="tab in optionList" :key="tab" :class="{active: tab.option === selectedTab}" @click="selectedTab = tab.option">{{ tab.option }}</div>
          </div>
          <div class="tab-contents">
            {{ selectedTab }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tabs browser">
          <div class="tab-menu">
            <div class="tab-item tab" v-for="tab in optionList" :key="tab" :class="{active: tab.option === selectedTab}" @click="selectedTab = tab.option">
              <div class="tabText ellipsis">{{ tab.option }}</div>
              <div class="btn-close"><i class="icon xi-close"></i></div>

            </div>
          </div>
          <div class="tab-contents">
            {{ selectedTab }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">

</style>
