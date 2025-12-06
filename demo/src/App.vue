<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SlideSideLayout from './components/SlideSideLayout.vue'
import SideList from '@/components/SideList.vue'
// import onMouseDown from './beComponents/flexible-view'
import './beComponents/flexible-view/flexible-view.scss'

import { Analytics } from '@vercel/analytics/vue'

import { elementList, viewsList, layoutList } from '@/contents'
const navList = [...elementList, ...viewsList, ...layoutList]

const route = useRoute()
const toggleSide = ref(true)

const mainTitle = ref(route.name)

const prevInfo = ref(null)
const nextInfo = ref(null)

watch(route, () => {
  mainTitle.value = route.name
  setPrevNext()
  // toggleSide.value = false
})

const setPrevNext = () => {
  const currentIdx = navList.findIndex((item) => item.name === mainTitle.value)

  prevInfo.value = navList[currentIdx - 1] || null
  nextInfo.value = navList[currentIdx + 1] || null
}
</script>

<template>
  <Analytics />
  <header class="main-header">
    <div class="be container">
      <div
        class="toggle-btn"
        :class="{ show: toggleSide }"
        @click="toggleSide = !toggleSide"
      >
        <div class="be-button icon round">
          <i class="xi-angle-left" :class="{ 'xi-rotate-180': toggleSide }"></i>
        </div>
      </div>
      <div class="logo">
        <div class="title">BEUI <span class="sub">VUE</span></div>
        <!-- <div class="description">Vue 3 전용 공용 UI 라이브러리</div> -->
      </div>
      <div class="links">
        <div class="be-button icon round compact large" v-be-tooltip="`Github`">
          <a
            class="link"
            href="https://github.com/noistommy/beui.git"
            target="_blank"
          ></a>
          <i class="xi-github"></i>
        </div>
        <div class="be-button icon round compact large" v-be-tooltip="`NPM`">
          <a
            class="link"
            href="https://www.npmjs.com/package/noist-beui"
            target="_blank"
          ></a>
          <i class="xi-package"></i>
        </div>
      </div>
    </div>
  </header>
  <main>
    <SlideSideLayout
      :is-show="toggleSide"
      type="push"
      dimmed
      :current="mainTitle"
    >
      <template #side>
        <div class="nav-contents">
          <SideList :current="mainTitle" @select="setPrevNext" />
        </div>
      </template>
      <template #main>
        <div class="main">
          <div class="main-title">
            <h1 class="title">{{ mainTitle }}</h1>
            <div class="description"></div>
          </div>
          <div class="main-contents">
            <RouterView />
          </div>
          <div class="main-footer">
            <div class="prev-next">
              <div class="prev">
                <template v-if="prevInfo">
                  <RouterLink
                    :to="prevInfo.path"
                    class="prev-btn be-button compact"
                  >
                    <i class="icon left xi-angle-left"></i>
                    <span>{{ prevInfo.name }}</span>
                  </RouterLink>
                </template>
              </div>
              <div class="next">
                <template v-if="nextInfo">
                  <RouterLink
                    :to="nextInfo.path"
                    class="prev-btn be-button compact"
                  >
                    <span>{{ nextInfo.name }}</span>
                    <i class="icon right xi-angle-right"></i>
                  </RouterLink>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SlideSideLayout>
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

$headerHeight: 56px;

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Ubuntu';
}
.main-header {
  height: $headerHeight;
  .container {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    container-name: head-container;
  }
}

.logo {
  flex-grow: 1;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  .title {
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 24px;
    color: #000;
    .sub {
      color: #a1a1a1;
    }
  }
  .description {
    font-size: 14px;
    color: #666;
    margin-top: -10px;
  }
}

main {
  height: calc(100dvh - $headerHeight);
  .nav-contents {
    height: 100%;
  }
}
.main-pane {
  overflow-y: auto;
}
.main {
  height: 100%;
  max-width: 780px;
  margin: 0 auto;

  .main-title {
    padding-top: 15px;
    padding-left: 20px;
    & > .title {
      font-size: 45px;
      font-weight: 700;
      margin: 20px 0;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    .description {
      color: #c4c4c4;
      padding: 10px 10px 20px;
    }
  }
  .main-footer {
    padding: 15px;
    border-top: 1px solid var(--brd);
    .prev-next {
      display: flex;
      justify-content: space-between;
      .prev,
      .next {
        a span {
          &:first-letter {
            text-transform: uppercase;
          }
        }
      }
    }
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
h1.title {
  margin: 72px 0 24px 0;
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
