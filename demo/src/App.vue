<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SlideSideLayout from './components/SlideSideLayout.vue'
import SideList from '@/components/SideList.vue'
import onMouseDown from './beComponents/flexible-view'
import './beComponents/flexible-view/flexible-view.scss'

const route = useRoute()
const toggleSide = ref(true)
const scrollRef = ref(null)
const mainTitle = ref(route.name)

watch(route, () => {
  mainTitle.value = route.name
  scrollRef.value.scrollTop = 0
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
            <div class="be-button icon">
              <i class="xi-angle-left" :class="{ 'xi-rotate-180': toggleSide }"></i>
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
        <div class="main-contents" ref="scrollRef">
          <RouterView />
        </div>
      </main>
    </template>
  </SlideSideLayout>
</template>

<style lang="scss">
$headerHeight: 80px;
main {
  margin-left: 20px;
  height: 100%;
  overflow-y: auto;
  .main-title {
    height: $headerHeight;
    padding-top: 15px;
    padding-left: 20px;
    border-bottom: 1px solid var(--brd);
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .main-contents {
    height: calc(100% - $headerHeight);
    overflow-y: auto;
  }
}
.side-nav {
  display: flex;
  flex-direction: column;

  height: 100%;
  color: var(--txt);
  .side-header {
    height: $headerHeight;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-weight: 800;
      font-size: 3em;
      padding: 10px 15px;
      font-family: 'Noto Sans Mono';
    }
    .toggle-btn {
      margin: 10px;
      transition: transform 250ms ease-in;
      transform: translateX(110%);
      &.show {
        transform: translateX(0%);
      }
    }
  }
  .side-nav-contents {
    flex-grow: 1;
  }
}

//page style
.page-wrapper {
  max-width: 780px;
  padding: 1rem;
  flex-grow: 1;
  section {
    margin-bottom: 2rem;
  }
}
.summary {
  margin-bottom: 2rem;
  // padding: 1rem;
  // width: 500px;
}
section {
  .desc {
    opacity: 0.8;
    padding: 5px 5px 10px;
  }
}
.contents-wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--brd);
  gap: 8px;
  margin-bottom: 5px;
  &:last-child {
    // &:after {
    //   content: 'component';
    //   padding: 3px 5px;
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   font-size: 0.8em;
    //   background-color: #333;
    //   color: #fff;

    // }
  }
}
.layout-h {
  display: flex;
  .side-pane {
    width: 300px;
    flex: 1 0 auto;
  }
  .flexible-handle {
    transition: all 250ms;
    border-left: 1px solid var(--brd);
    &:after {
      content: '';
      transform: translateX(-50%);
      position: absolute;
      width: 0;
      height: 100%;
      background-color: #6d9d72;
      opacity: 0.5;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
}
</style>
