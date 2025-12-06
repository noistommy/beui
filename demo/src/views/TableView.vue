<script setup>
import * as codes from '@/codes/table'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

const usage = ''
import { tableProps } from '@/contents/props-data'

import { ref } from 'vue'
const columns = [
  { key: 'name', name: '이름', align: '', col: 2 },
  { key: 'age', name: '나이', align: 'right', col: 6 },
  { key: 'job', name: '직업', align: '', col: 4 },
]

const values = [
  { name: '김아무개', age: 11, job: '학생' },
  { name: '이아무개', age: 17, job: '대학생' },
  { name: '박아무개', age: 31, job: '회사원' },
]

const selectItem = ref({})
const setSelectItem = (payload) => {
  // console.log(payload)
  selectItem.value = payload
}
</script>

<template>
  <div class="be container page-wrapper">
    <PageContainer>
      <template #base>
        <section>
          <div class="desc">
            <div class="be-tag label lightblue">HTML</div>
          </div>
          <div class="contents-wrapper">
            <table class="be-table">
              <thead>
                <tr class="align-center">
                  <th
                    v-for="col in columns"
                    :key="col.key"
                    :class="`align-${col.align || 'center'}`"
                  >
                    {{ col.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in values" :key="`row-${i}`" class="select">
                  <td
                    v-for="col in columns"
                    :key="`cell-${i}-${col.key}`"
                    :class="`align-${col.align || 'center'}`"
                  >
                    {{ row[col.key] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock :code="codes.base_html" lang="html"></CodeBlock>
        </section>
        <section>
          <div class="desc">
            <div class="be-tag label blue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeTable :columns :values />
          </div>
          <CodeBlock :code="codes.base_component" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Data Set</h4>
          <div class="desc">
            테이블을 구성 하기 위해 <code>column</code>과 <code>data</code>를
            Array로 구성해야합니다.
          </div>
          <CodeBlock
            :code="codes.dataSet"
            lang="javascript"
            :border="false"
            :use-toggle="false"
          ></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList :datas="tableProps" />
      </template>
      <template #variants>
        <section>
          <h4>Border</h4>
          <div class="desc">
            <div class="be-tag label blue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeTable :columns :values :border="true" />
          </div>
          <CodeBlock :code="codes.border" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Striped</h4>
          <div class="desc">
            <div class="be-tag label blue">Component</div>
            striped: odd or even
          </div>
          <div class="contents-wrapper">
            <BeTable :columns :values :border="true" striped="odd" />
            <BeTable :columns :values :border="true" striped="even" />
          </div>
          <CodeBlock :code="codes.striped" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Use Footer</h4>
          <div class="desc">
            <div class="be-tag label blue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeTable :columns :values :use-foot="true" />
          </div>
        </section>
        <section>
          <h4>Grid column (divide)</h4>
          <div class="desc">
            <div class="be-tag label blue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeTable
              :columns
              :values
              :border="true"
              grid-type="divide"
              :divide-num="3"
            />
          </div>
          <CodeBlock :code="codes.grid_divide" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Grid column (widths)</h4>
          <div class="desc">
            <div class="be-tag label blue">Component</div>
          </div>
          <div class="contents-wrapper">
            <BeTable :columns :values :border="true" grid-type="widths" />
          </div>
          <CodeBlock :code="codes.grid_width" lang="vue-html"></CodeBlock>
        </section>
        <section>
          <h4>Selection</h4>
          <div class="desc">
            <div class="be-tag label blue">Component</div>
          </div>
          <div class="contents-wrapper">
            {{ selectItem }}
            <BeTable
              :columns
              :values
              :border="true"
              :selection="true"
              @select="setSelectItem"
            />
          </div>
          <CodeBlock :code="codes.selection" lang="vue-html"></CodeBlock>
        </section>
      </template>
    </PageContainer>
  </div>
</template>
