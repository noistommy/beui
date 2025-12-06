<script setup>
import * as codes from '@/codes/grid'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
import PropsDataList from '@/components/PropsDataList.vue'

import { gridProps, columnProps } from '@/contents/props-data'

const columnArray = [
  { id: 1, content: 'col-1', size: 4 },
  { id: 2, content: 'col-2', size: 4 },
  { id: 3, content: 'col-3', size: 4 },
  { id: 4, content: 'col-4', size: 4 },
]
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
            <div class="be-grid">
              <div
                class="column"
                v-for="col in 12"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
            <div class="be-grid divide-6">
              <div class="rows">
                <div
                  class="column"
                  v-for="col in 6"
                  :key="`base-${col}`"
                  :data-col="`col-${col}`"
                ></div>
              </div>
              <div class="rows">
                <div
                  class="column"
                  v-for="col in 6"
                  :key="`base-${col}`"
                  :data-col="`col-${col}`"
                ></div>
              </div>
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
            <BeGrid>
              <BeColumn
                v-for="col in columnArray"
                :key="`base-${col.id}`"
                :data-col="`col-${col.content}`"
                :span="col.size"
              ></BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_component" lang="html"></CodeBlock>
        </section>
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <PropsDataList title="Grid" :datas="gridProps" />
        <PropsDataList title="Column" :datas="columnProps" />
      </template>
      <template #variants>
        <section>
          <h4 class="title">Divide</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeGrid
              v-for="div in [2, 4, 6, 8, 10]"
              :key="`grid-${div}`"
              :divide="div"
            >
              <BeColumn
                v-for="col in div"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_divide" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Fill (Left | Right) Side</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeGrid left-side>
              <BeColumn :data-col="`Fill Left`"></BeColumn>
              <BeColumn :data-col="`col-1`"></BeColumn>
            </BeGrid>
            <BeGrid right-side>
              <BeColumn :data-col="`col-1`"></BeColumn>
              <BeColumn :data-col="`Fill Right`"></BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_fill" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Widths</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-grid">
              <div
                class="column"
                v-for="col in [2, 6, 4]"
                :key="`base-${col}`"
                :class="`span-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
            <BeGrid>
              <BeColumn
                v-for="col in [4, 4, 4]"
                :key="`base-${col}`"
                :span="col"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <BeGrid>
              <BeColumn
                v-for="col in [2, 7, 3]"
                :key="`base-${col}`"
                :span="col"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_widths" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Nested</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-grid">
              <div
                class="column"
                v-for="col in [3, 8, 1]"
                :key="`base-${col}`"
                :class="`span-${col}`"
                :data-col="`col-${col}`"
              >
                <template v-if="col === 8">
                  <div class="be-grid">
                    <div
                      class="column"
                      v-for="col in [4, 4, 4]"
                      :key="`base-${col}`"
                      :class="`span-${col}`"
                      :data-col="`nested-col-${col}`"
                    ></div>
                  </div>
                </template>
              </div>
            </div>
            <BeGrid>
              <BeColumn
                v-for="col in [4, 8]"
                :key="`base-${col}`"
                :span="col"
                :data-col="`col-${col}`"
              >
                <template v-if="col === 8">
                  <BeGrid>
                    <BeColumn
                      v-for="col in [4, 4, 4]"
                      :key="`base-${col}`"
                      :span="col"
                      :data-col="`nested-col-${col}`"
                    ></BeColumn>
                  </BeGrid>
                </template>
              </BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_nested" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Align</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <h5>Left(default)</h5>
            <BeGrid :divide="8">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <h5>Center</h5>
            <BeGrid :divide="8" justify="center">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <h5>Right</h5>
            <BeGrid :divide="8" justify="right">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <h5>Between</h5>
            <BeGrid :divide="8" justify="between">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <h5>Around</h5>
            <BeGrid :divide="8" justify="around">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_align" lang="html"></CodeBlock>
        </section>
        <!-- <section>
          <h4 class="title">Align</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <h5>Top</h5>
            <BeGrid :divide="8" align="top">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <h5>Center</h5>
            <BeGrid :divide="8" align="center">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <h5>Bottom</h5>
            <BeGrid :divide="8" align="bottom">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
            <h5>Strech</h5>
            <BeGrid :divide="8" align="strech">
              <BeColumn
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_align" lang="html"></CodeBlock>
        </section> -->
        <section>
          <h4 class="title">Offset</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeGrid>
              <BeColumn
                :span="3"
                :offset="3"
                :data-col="`col-3 / offset-3`"
              ></BeColumn>
              <BeColumn
                :span="3"
                :offset="3"
                :data-col="`col-3 / offset-3`"
              ></BeColumn>
            </BeGrid>
            <BeGrid>
              <BeColumn
                :span="7"
                :offset="3"
                :data-col="`col-7 / offset-3`"
              ></BeColumn>
              <BeColumn :span="2" :data-col="`col-1`"></BeColumn>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_offset" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Rows</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeGrid>
              <h6>Row 1</h6>
              <BeRows>
                <BeColumn
                  v-for="col in 4"
                  :key="`base-${col}`"
                  :data-col="`row-1/col-${col}`"
                  :span="3"
                ></BeColumn>
              </BeRows>
              <h6>Row 2</h6>
              <BeRows>
                <BeColumn
                  v-for="col in 6"
                  :key="`base-${col}`"
                  :data-col="`row-2/col-${col}`"
                  :span="2"
                ></BeColumn>
              </BeRows>
            </BeGrid>
          </div>
          <CodeBlock :code="codes.base_rows" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Reponsive</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <BeGrid>
              <BeColumn
                v-for="col in 12"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
                :md="2"
                :sm="4"
                :xs="12"
              ></BeColumn>
            </BeGrid>
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
}
.column .be-grid {
  background-color: rgba(0, 0, 0, 0.08);
}
.column:before {
  content: attr(data-col);
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.08);
  box-shadow: inset 0 0 0 1px #efefef;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.column.span-8:before {
  content: '';
  display: none;
}
</style>
