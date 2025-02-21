<script setup>
import { ref, computed } from 'vue'

const cbValue = ref(true)

const setSwitch = computed(() => {
  return cbValue
})
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base A</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <div class="be-switch slide" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch"></span>
        </div>
        <BeSwitch type="slide" v-model="cbValue" />
      </div>
    </section>
    <section>
      <h4 class="title">Base B</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
      <div class="contents-wrapper">
        <div class="be-switch slide inside" @click="cbValue = !cbValue">
          <input type="checkbox" :checked="cbValue">
          <span class="switch" ></span>
        </div>
        <BeSwitch type="slide" :inside="true" v-model="cbValue" />
      </div>
    </section>
    <section>
      <h4 class="title">Button</h4>
      <div class="desc">
        <div class="be-tag label">component</div>
      </div>
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
        <BeSwitch type="button" on-text="A" off-text="B" v-model="cbValue" />
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
        <BeSwitch type="slide" :inside="true" :round="true" v-model="cbValue" />
      </div>
    </section>
    <!-- <section>
      <h4 class="title">Colors</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-switch slide success " @click="cbValue = !cbValue">
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
    </section> -->
    <section>
      <h4 class="title">Emit</h4>
      <div class="desc">emit: change</div>
      <div class="contents-wrapper">
        <BeSwitch v-model="cbValue" />
      </div>
      Result: {{ setSwitch }}
    </section>
  </div>
</template>
