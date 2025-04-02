<script setup>
import { ref } from 'vue'
const colors = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'blue', 'deepblue', 'deeppurple', 'purple', 'brown']
const selectColor = ref('red')

const rate = ref(0)

const setRate = (payload) => {
  rate.value = payload
}
</script>

<template>
  <div class="be container page-wrapper">
    <section>
      <h4>Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeRate />
      </div>
    </section>
    <section>
      <h4>Rate Length: 10</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeRate :rate-length="10" />
      </div>
    </section>
    <section>
      <h4>Base Size</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div :style="{ fontSize: '14px'}">
        <div class="title">폰트 14px</div>
          <BeRate />
        </div>
        <div :style="{ fontSize: '22px'}">
          <div class="title">폰트 22px</div>
          <BeRate />
        </div>
      </div>
    </section>
    <section>
      <h4>Allow half </h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeRate :use-half="true" />
      </div>
    </section>
    <section>
      <h4>Icons </h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeRate icon="xi-emoticon-smiley" />
      </div>
    </section>
    <section>
      <h4>Size</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeRate size="tiny" />
        <BeRate size="small" />
        <BeRate />
        <BeRate size="large" />
        <BeRate size="huge" />
      </div>
    </section>
    <section>
      <h4>Color</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="color-picker" :style="{ width:'100%'}">
          <div class="be-tag dot" v-for="color in colors" :key="color" :class="[color, {select: selectColor === color}]" @click="selectColor = color"></div>
        </div>
        <div>
          <div class="title">{{ selectColor }}</div>
          <BeRate :color="selectColor" :result-value="4.5"/>
        </div>
      </div>
    </section>
    <section>
      <h4>Disabled</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeRate :disabled="true" />
      </div>
    </section>
    <section>
      <h4>Emit </h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeRate @select="setRate"  :use-half="true"/>
        <BeButton >
          Result: {{ rate }}
        </BeButton>
      </div>
    </section>
  </div>

</template>
