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
        <BeTree :tree-data="treeList"/>
      </div>
    </section>
    <section>
      <h4>Use Mark</h4>
      <div class="desc">기본값 useMark: true</div>
      <div class="contents-wrapper">
        <div class="title">mark 사용</div>
        <BeTree :tree-data="treeList"/>
        <div class="title">mark 사용 안함</div>
        <BeTree :tree-data="treeList" :use-mark="false"/>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.be-tree-list {
  .be-tree {
    .custom-node {
      // border-radius: 4px;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
}
</style>