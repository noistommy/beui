<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SlideSideLayout from './components/SlideSideLayout.vue'
import SideList from '@/components/SideList.vue'

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
          <SideList :current="mainTitle" />
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

<style lang="scss">
$headerHeight: 58px;
main {
  padding: 10px;
  margin-left: 20px;
  height: 100%;
  overflow-y: auto;
  .main-title {
    height: $headerHeight;
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
  }
}

//page style
.page-wrapper {
  width: 1024px;
  section {
    margin-bottom: 2rem;
  }
  overflow-y: auto;
}
.summary {
  margin-bottom: 2rem;
  // padding: 1rem;
  // width: 500px;
}
section {
  .desc {
    opacity: .8;
    padding: 5px 5px 10px ;
  }
}
.contents-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--brd);
  gap: 8px;

}
</style>
