<script setup>
import * as codes from '@/codes/dosirak-grid'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

import { dosirakProps, dosirakColumnProps } from '@/contents/props-data'

import { ref } from 'vue'

const columnRowArray1 = [
  { id: 1, content: 'col-1', col: 2, row: 1, color: 'lightblue' },
  { id: 2, content: 'col-2', col: 1, row: 1, color: 'blue' },
  { id: 3, content: 'col-3', col: 1, row: 2, color: 'deepblue' },
  { id: 4, content: 'col-4', col: 1, row: 2, color: '' },
  { id: 5, content: 'col-5', col: 1, row: 1, color: '' },
  { id: 6, content: 'col-6', col: 2, row: 1, color: '' },
  { id: 7, content: 'col-7', col: 1, row: 1, color: '' },
]
const columnRowArray2 = [
  { id: 1, content: 'col-1', col: 2, row: 1 },
  { id: 2, content: 'col-2', col: 1, row: 1 },
  { id: 3, content: 'col-3', col: 1, row: 2 },
  { id: 4, content: 'col-4', col: 1, row: 1 },
  { id: 5, content: 'col-5', col: 1, row: 1 },
  { id: 6, content: 'col-6', col: 1, row: 2 },
  { id: 7, content: 'col-7', col: 2, row: 1 },
  { id: 8, content: 'col-8', col: 1, row: 1 },
  { id: 9, content: 'col-9', col: 2, row: 1 },
  { id: 10, content: 'col-10', col: 2, row: 1 },
  // { id: 11, content: 'col-11', col: 1, row: 1 },
]
const columnRowArray3 = [
  { id: 1, content: 'col-1', col: 4, row: 1, color: '' },
  { id: 2, content: 'col-2', col: 2, row: 1, color: '' },
  { id: 3, content: 'col-3', col: 4, row: 1, color: '' },
  { id: 4, content: 'col-4', col: 5, row: 1, color: '' },
  { id: 5, content: 'col-5', col: 5, row: 1, color: '' },
  { id: 6, content: 'col-6', col: 2, row: 2, color: '' },
  { id: 7, content: 'col-7', col: 2, row: 1, color: '' },
]

const isDense = ref(false)
const flow = ref('row')
const gap = ref(10)
const gridColumn = ref(4)
const gridRow = ref(4)
</script>
<template>
  <div class="be container page-wrapper">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4 class="title"></h4>
          <div class="desc">
            <span class="be-tag label lightblue">HTML</span>
          </div>
          <div class="contents-wrapper">
            <div
              class="be-grid2 dosirak round-l"
              :style="{
                '--grid-col-num': 4,
                '--grid-row-num': 4,
                '--grid-auto-row': 150,
              }"
            >
              <div
                class="column"
                v-for="col in columnRowArray1"
                :class="`col-${col.col} row-${col.row}`"
                :key="`base-1-${col.id}`"
                :data-col="`${col.content}`"
              ></div>
            </div>
          </div>
          <CodeBlock :code="codes.base" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title"></h4>
          <div class="desc">
            <span class="be-tag label deepblue">Component</span>
          </div>
          <div class="contents-wrapper">
            <BeDosirakGrid :column-number="4" dense round="l">
              <BeColumn
                v-for="col in columnRowArray2"
                :key="`base-2-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_component" lang="html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList title="Dosirak" :datas="dosirakProps" />
        <PropsDataList title="Column" :datas="dosirakColumnProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Grid Column Size</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="control-head">
              <BeInputNumber v-model="gridColumn" :min="2" />
            </div>

            <BeDosirakGrid :column-number="gridColumn" dense round="l">
              <BeColumn
                v-for="col in columnRowArray1"
                :key="`base-3-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_grid_column" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Grid Row Size</h4>
          <div class="desc">설정 전 row-height를 반드시 지정해야합니다.</div>
          <div class="contents-wrapper">
            <div class="control-head">
              <BeInputNumber v-model="gridRow" :min="3" />
            </div>

            <BeDosirakGrid
              :column-number="4"
              :row-number="gridRow"
              row-height="10rem"
              dense
              round="l"
            >
              <BeColumn
                v-for="col in columnRowArray1"
                :key="`base-4-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_grid_row" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Gap Size</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="control-head">
              <BeInputNumber v-model="gap" />
            </div>

            <BeDosirakGrid :column-number="4" :grid-gap="gap" dense round="l">
              <BeColumn
                v-for="col in columnRowArray1"
                :key="`base-5-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_gap" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Dense</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="control-head">
              <BeSwitch round v-model="isDense" />
              Dense {{ isDense ? '사용' : '사용안함' }}
            </div>

            <BeDosirakGrid :column-number="4" :dense="isDense" round="l">
              <BeColumn
                v-for="col in columnRowArray1"
                :key="`base-6-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_dense" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Flow</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="control-head">
              <div class="be-buttons">
                <div
                  class="be-button"
                  :class="{ selected: flow === 'row' }"
                  @click="flow = 'row'"
                >
                  Row
                </div>
                <div
                  class="be-button"
                  :class="{ selected: flow === 'column' }"
                  @click="flow = 'column'"
                >
                  Column
                </div>
              </div>
            </div>

            <BeDosirakGrid
              :column-number="4"
              :row-number="4"
              row-height="12rem"
              :flow="flow"
              round="l"
            >
              <BeColumn
                v-for="col in columnRowArray1"
                :key="`base-7-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
                :class="`be-${col.color}-bg`"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_flow" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Divide</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeDosirakGrid :divide="4" round="l">
              <BeColumn
                v-for="col in 12"
                :key="`base-8-${col}`"
                :data-col="`col-1-1`"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_divide" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Widths</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeDosirakGrid :column-number="4" dense round="l">
              <BeColumn
                v-for="col in [
                  [2, 1],
                  [1, 1],
                  [1, 2],
                  [1, 1],
                  [2, 1],
                ]"
                :key="`base-9-${col[0]}`"
                :col="col[0]"
                :row="col[1]"
                :data-col="`col-${col[0]} / row-${col[1]}`"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_widths" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Reponsive</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeDosirakGrid :column-number="4" dense round="l">
              <BeColumn
                v-for="col in columnRowArray2"
                :key="`base-10-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
                :xs="4"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_reponsive" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">test</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeDosirakGrid
              :column-number="12"
              :row-number="3"
              dense
              round="m"
              row-height="150px"
            >
              <BeColumn
                v-for="col in columnRowArray3"
                :key="`base-10-${col.id}`"
                :data-col="`${col.content}`"
                :col="col.col"
                :row="col.row"
              ></BeColumn>
            </BeDosirakGrid>
          </div>
          <CodeBlock :code="codes.base_reponsive" lang="html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>

<style lang="scss" scoped>
.contents-wrapper {
  display: block;
  .control-head {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--brd);
    margin-bottom: 20px;
  }
}
.column .be-grid2 {
  background-color: rgba(0, 0, 0, 0.08);
}
.column {
  overflow: hidden;
  &:before {
    content: attr(data-col);
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.08);
    // box-shadow: inset 0 0 0 1px #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ubuntu;

    color: var(--secondary);
  }
}
.column.span-8:before {
  content: '';
  display: none;
}
</style>
