<script setup>
import { ref } from 'vue'

const cbValue = ref(true)
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base A</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-switch slide" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch"></span>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Base B</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-switch slide inside" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch"></span>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Button</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-switch button" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="on active">On</span>
          <span class="off">Off</span>
        </div>
        <div class="be-switch button round" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="on active">On</span>
          <span class="off">Off</span>
        </div>

      </div>
    </section>
    <section>
      <h4 class="title">Round</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-switch slide round" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch"></span>
        </div>
        <div class="be-switch slide inside round" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch"></span>
        </div>
        <div class="be-switch button round" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="on active">On</span>
          <span class="off">Off</span>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Colors</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-switch slide" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch"></span>
        </div>
        <div class="be-switch slide inside round" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch"></span>
        </div>
        <div class="be-switch button round" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="on active">On</span>
          <span class="off">Off</span>
        </div>
      </div>
    </section>
  </div>
</template>
