<script setup>
import * as codes from '@/codes/tree-list'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'

import { ref } from 'vue'

const treeList = ref([
  {
    label: 'tree item level 1',
    children: [
      {
        label: 'tree item level 1-1',
        children: [
          {
            label: 'tree item level 1-1-1',
          },
        ],
      },
      {
        label: 'tree item level 1-2',
      },
    ],
  },
  {
    label: 'tree item level 2',
    children: [
      {
        label: 'tree item level 2-1',
        children: [
          {
            label: 'tree item level 2-1-1',
          },
        ],
      },
      {
        label: 'tree item level 2-2',
        children: [
          {
            label: 'tree item level 2-2-1',
          },
          {
            label: 'tree item level 2-2-2',
            children: [
              {
                label: 'tree item level 2-2-2-1',
              },
              {
                label: 'tree item level 2-2-2-2',
              },
              {
                label: 'tree item level 2-2-2-3',
              },
            ],
          },
        ],
      },
    ],
  },
])
</script>
<template>
  <div class="be container page-wrapper">
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <div class="be-tag label deepblue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeTree :tree-data="treeList" />
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Data Set</h4>
          <div class="desc"></div>
          <CodeBlock
            :code="codes.dataSet"
            lang="javascript"
            :border="false"
            :use-toggle="false"
          ></CodeBlock>
        </section>
      </template>
      <template #variants>
        <section>
          <h4>Use Mark</h4>
          <div class="desc">기본값 useMark: true</div>
          <div class="contents-wrapper">
            <div class="title">mark 사용</div>
            <BeTree :tree-data="treeList" />
            <div class="title">mark 사용 안함</div>
            <BeTree :tree-data="treeList" :use-mark="false" />
          </div>
          <CodeBlock :code="codes.use_mark" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
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
