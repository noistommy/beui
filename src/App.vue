<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SlideSideLayout from './components/SlideSideLayout.vue'

const route = useRoute()
const toggleSide = ref(true)

const mainTitle = ref(route.name)

watch(route, () => {
  mainTitle.value = route.name
})
</script>

<template>
  <SlideSideLayout :is-show="toggleSide" type="push">
    <template #side>
      <div class="side-nav gray-20">
        <div class="side-header">
          <div class="logo">
            <a href="/"> BEUI </a>
          </div>
          <div class="toggle-btn" :class="{ show: toggleSide }" @click="toggleSide = !toggleSide">
            <div class="be-button icon circle gray-70">
              <i class="xi-hamburger-out" :class="{ 'xi-rotate-180': toggleSide }"></i>
            </div>
          </div>
        </div>
        <div class="side-nav-contents">
          <div class="be-list nav-list selection">
            <RouterLink to="/">
              <div class="item">Home</div>
            </RouterLink>
            <RouterLink to="/about">
              <div class="item">About</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </template>
    <template #main>
      <main>
        <div class="main-title">
          <h2>{{ mainTitle }}</h2>
        </div>
        <RouterView />
      </main>
    </template>
  </SlideSideLayout>
</template>

<style lang="scss" scoped>
$headerHeight: 58px;
main {
  padding: 10px;
  margin-left: 20px;
  .main-title {
    &::first-letter {
      text-transform: uppercase;
    }
  }
}
.side-nav {
  display: flex;
  flex-direction: column;

  height: 100%;
  color: #fff;
  .side-header {
    height: $headerHeight;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      padding: 10px 15px;
      height: 100%;
    }
    .toggle-btn {
      transition: transform 250ms ease-in;
      transform: translateX(100%) rotate(0);
      &.show {
        transform: translateX(50%) rotate(180deg);
      }
    }
  }
  .side-nav-contents {
    flex-grow: 1;
    .nav-list {
      .item {
        padding: 0.5rem 1rem;
        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    }
  }
}
</style>
