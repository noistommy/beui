<script setup>
import * as codes from '@/codes/grid'
import CodeBlock from '@/components/CodeBlock.vue'

import PageContainer from '@/components/PageContainer.vue'
</script>
<template>
  <div class="be container page-wrapper">
    <div class="summary"></div>
    <PageContainer>
      <template #base>
        <section>
          <h4 class="title">Base</h4>
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
      </template>
      <template #usage>
        {{ usage }}
      </template>
      <template #props>
        <span class="be-tag label lightblue">HTML</span> 으로만 정의된
        컴포넌트입니다.
      </template>
      <template #variants>
        <section>
          <h4 class="title">Divide</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div
              class="be-grid"
              v-for="div in [2, 4, 6, 8, 10]"
              :key="`grid-${div}`"
              :class="`divide-${div}`"
            >
              <div
                class="column"
                v-for="col in div"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
          </div>
          <CodeBlock :code="codes.base_divide" lang="html"></CodeBlock>
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
            <div class="be-grid">
              <div
                class="column"
                v-for="col in [4, 4, 4]"
                :key="`base-${col}`"
                :class="`span-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
            <div class="be-grid">
              <div
                class="column"
                v-for="col in [2, 7, 3]"
                :key="`base-${col}`"
                :class="`span-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
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
          </div>
          <CodeBlock :code="codes.base_nested" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Align</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <h5>Left(default)</h5>
            <div class="be-grid divide-8">
              <div
                class="column"
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
            <h5>Center</h5>
            <div class="be-grid divide-8 justify-center">
              <div
                class="column"
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
            <h5>Right</h5>
            <div class="be-grid divide-8 justify-right">
              <div
                class="column"
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
            <h5>Between</h5>
            <div class="be-grid divide-8 justify-between">
              <div
                class="column"
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
            <h5>Around</h5>
            <div class="be-grid divide-8 justify-around">
              <div
                class="column"
                v-for="col in 4"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
          </div>
          <CodeBlock :code="codes.base_align" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Offset</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-grid">
              <div
                class="column span-3 offset-3"
                :data-col="`col-3 / offset-3`"
              ></div>
              <div
                class="column span-3 offset-3"
                :data-col="`col-3 / offset-3`"
              ></div>
            </div>
            <div class="be-grid">
              <div
                class="column span-7 offset-3"
                :data-col="`col-7 / offset-3`"
              ></div>
              <div class="column span-2" :data-col="`col-1`"></div>
            </div>
          </div>
          <CodeBlock :code="codes.base_offset" lang="html"></CodeBlock>
        </section>
        <section>
          <h4 class="title">Reponsive</h4>
          <div class="desc"></div>
          <div class="contents-wrapper">
            <div class="be-grid">
              <div
                class="column span-md-2 span-sm-4 span-xs-12"
                v-for="col in 12"
                :key="`base-${col}`"
                :data-col="`col-${col}`"
              ></div>
            </div>
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
