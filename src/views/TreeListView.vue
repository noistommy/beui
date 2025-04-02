<script setup>
import { ref } from 'vue'

const treeList = ref([
  {
    label: 'tree item level 1',
    children: [
      {
        label: 'tree item level 1-1',
        children: [
          {
            label: 'tree item level 1-1-1'
          }
        ]
      },
      {
        label: 'tree item level 1-2'
      }
    ]
  },
  {
    label: 'tree item level 2',
    children: [
      {
        label: 'tree item level 2-1',
        children: [
          {
            label: 'tree item level 2-1-1'
          }
        ]
      },
      {
        label: 'tree item level 2-2',
        children: [
          {
            label: 'tree item level 2-2-1'
          },
          {
            label: 'tree item level 2-2-2',
            children: [
              {
                label: 'tree item level 2-2-2-1'
              },
              {
                label: 'tree item level 2-2-2-2'
              },
              {
                label: 'tree item level 2-2-2-3'
              }
            ]
          }
        ]
      }
    ]
  },

])

</script>
<template>
  <div class="be container page-wrapper">
    <section>
      <h4>Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <BeTree :tree-data="treeList" :use-check="true"/>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.be-tree-list {
  .be-tree {
    .custom-node {
      padding: 10px 1em;
      border-radius: 4px;
    }
  }
}
</style>