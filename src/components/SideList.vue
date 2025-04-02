<script setup>

const elementList = [
  { name: 'button', path: '/button' },
  { name: 'input', path: '/input' },
  { name: 'input-number', path: '/input-number' },
  { name: 'checkbox', path: '/checkbox' },
  { name: 'switch', path: '/switch' },
  { name: 'tag', path: '/tag' },
  { name: 'badge', path: '/badge' },
  { name: 'message', path: '/message' },
  { name: 'tabs', path: '/tabs' },
  { name: 'grid', path: '/grid' },
  { name: 'form', path: '/form' },
  { name: 'table', path: '/table' },
  { name: 'panel', path: '/panel' },
  { name: 'rate', path: '/rate' },
]

const componentList = [
  { name: 'pagination', path: '/pagination' },
  { name: 'selectbox', path: '/selectbox' },
  { name: 'list', path: '/list' },
  { name: 'tree-list', path: '/tree-list' },
]
defineProps({
  current: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="side-list-wrapper">
    <div class="list-title gray-30">
      <h5>Ready</h5>
    </div>
    <div class="be-list nav-list selection">
      <RouterLink to="/">
        <div class="item">Home</div>
      </RouterLink>
      <RouterLink to="/about">
        <div class="item">About</div>
      </RouterLink>
    </div>
    <div class="list-title gray-30">
      <h5>Element</h5>
    </div>
    <div class="be-list nav-list selection text mark">
      <div class="item" v-for="item in elementList" :key="item.name" :class="{selected: current === item.name}">
        <RouterLink :to="item.path">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <div class="list-title gray-30">
      <h5>Components</h5>
    </div>
    <div class="be-list nav-list selection text mark">
      <div class="item" v-for="item in componentList" :key="item.name" :class="{selected: current === item.name}">
        <RouterLink :to="`/components${item.path}`">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-list-wrapper {
  .list-title {
    color: var(--txt);
    padding: .5em 1em;
    background-color: #fff;
  }
  .nav-list {
    .item {
      padding: 0.5rem 1rem;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
      a {
        width: 100%;
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
