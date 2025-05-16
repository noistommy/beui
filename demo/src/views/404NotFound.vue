<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="not-found-wrapper">
    <div class="header">
      <div class="logo">
      </div>
    </div>
    <div class="not-found-wall">
      <svg height="240" width="440" xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="#333"
          stroke-width="14"
          fill="transparent"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M 120 200 v -160 l -80 120 h 100"></path>
          <path d="M 220 40 a 40, 80 0 0, 0 0, 160 a 40, 80 0 0, 0 0, -160"></path>
          <path d="M 380 200 v -160 l -80 120 h 100"></path>
          <!-- <path d="M 400 160 h 400 Q 840 160 840 200 v 300"></path> -->
        </g>
      </svg>
      <p class="error-message">
        Sorry! <span class="path-name">'{{ route.path }}'</span> page Not Found!
      </p>
      <div class="go-back-btn">
        <a class="be-button secondary huge" @click="router.go(-1)">
          <i class="icon left xi-arrow-left"></i>
          돌아가기
        </a>
        <a class="be-button primary huge" @click="router.push('/')">
          <i class="icon left xi-home"></i>
          홈으로가기
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  .header {
    text-align: center;
    padding: 15px;
  }
  .logo {
    display: inline-block;
    position: relative;
  }
  .not-found-wall {
    // position: absolute;
    // inset: 40% 0 0 0;
    // display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: #f2f2f2;
    // padding: 20px;
    font-family: 'Noto Sans mono';
    p.error-message {
      color: #333;
      font-size: 16px;
      font-weight: 600;
      span.path-name {
        font-size: 1.2em;
      }
    }
    .go-back-btn {
      padding: 20px;
    }
  }
}
</style>
