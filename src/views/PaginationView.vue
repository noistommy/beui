<script setup>
import { ref } from 'vue'

const pageValue = ref(1)
const showValue = ref(1)

const setCurrent = (payload) => {
  showValue.value = payload
}
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BePagination  v-model="pageValue" :page-length="15" />
      </div>
    </section>
    <section>
      <h4 class="title">Limits</h4>
      <div class="desc">limits = 5</div>
      <div class="contents-wrapper">
        <BePagination :limits="5"  v-model="pageValue" :page-length="15" />
      </div>
    </section>
    <section>
      <h4 class="title">Compact</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BePagination :limits="5" :compact="true"  v-model="pageValue" :page-length="15" />
      </div>
    </section>
    <section>
      <h4 class="title">Round</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BePagination :limits="5" :round="true"  v-model="pageValue" :page-length="15" />
      </div>
    </section>
    <section>
      <h4 class="title">Align</h4>
      <div class="desc">left, center, right</div>
      <div class="contents-wrapper">
        <h5>left</h5>
        <BePagination :limits="5" align="left"  v-model="pageValue" :page-length="15" />
        <h5>center</h5>
        <BePagination :limits="5" align="center"  v-model="pageValue" :page-length="15" />
        <h5>right</h5>
        <BePagination :limits="5" align="right"  v-model="pageValue" :page-length="15" />
      </div>
    </section>
    <section>
      <h4 class="title">Page Type</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BePagination type="page"  v-model="pageValue" :page-length="20" />
      </div>
    </section>
    <section>
      <h4 class="title">Ellipsis Type</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BePagination :limits="5" :ellipsis="true"  v-model="pageValue" :page-length="10" />
      </div>
    </section>
    <section>
      <h4 class="title">Emit</h4>
      <div class="desc">emit: change</div>
      <div class="contents-wrapper">
        <BePagination :limits="5" :ellipsis="true"  v-model="pageValue" :page-length="10" @change="setCurrent" />
      </div>
      Result: {{ showValue }}
    </section>
  </div>
</template>
