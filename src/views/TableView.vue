<script setup>
import { ref } from 'vue'
const columns = [
  { key: 'name', name: '이름', align: '', col: 2},
  { key: 'age', name: '나이', align: 'right', col: 6},
  { key: 'job', name: '직업', align: '', col: 4},
]

const values = [
  { name: '김아무개', age: 11, job: '학생' },
  { name: '이아무개', age: 17, job: '대학생' },
  { name: '박아무개', age: 31, job: '회사원' }
]

const selectItem = ref({})
const setSelectItem = (payload) => {
  // console.log(payload)
  selectItem.value = payload
}
</script>

<template>
  <div class="be container page-wrapper">
    <section>
      <h4>Base</h4>
      <div class="desc">
        <div class="be-tag label purple">CSS</div>
      </div>
      <div class="contents-wrapper">
        <table class="be-table">
          <thead>
            <tr class="align-center">
              <th v-for="col in columns" :key="col.key" :class="`align-${col.align || 'center'}`">{{ col.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in values" :key="`row-${i}`"  class="select">
              <td v-for="col in columns" :key="`cell-${i}-${col.key}`" :class="`align-${col.align || 'center'}`">
                {{ row[col.key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h4>Base Component</h4>
      <div class="desc">
        <div class="be-tag label blue">Compoennt</div>
      </div>
      <div class="contents-wrapper">
        <BeTable :columns :values />
      </div>
    </section>
    <section>
      <h4>Border</h4>
      <div class="desc">
        <div class="be-tag label blue">Compoennt</div>
      </div>
      <div class="contents-wrapper">
        <BeTable :columns :values :border="true" />
      </div>
    </section>
    <section>
      <h4>Striped</h4>
      <div class="desc">
        <div class="be-tag label blue">Compoennt</div> striped: odd or even
      </div>
      <div class="contents-wrapper">
        <BeTable :columns :values :border="true" striped="odd" />
        <BeTable :columns :values :border="true" striped="even" />
      </div>
    </section>
    <section>
      <h4>Use Footer</h4>
      <div class="desc">
        <div class="be-tag label blue">Compoennt</div>
      </div>
      <div class="contents-wrapper">
        <BeTable :columns :values :use-foot="true" />
      </div>
    </section>
    <section>
      <h4>Grid column (divide)</h4>
      <div class="desc">
        <div class="be-tag label blue">Compoennt</div>
      </div>
      <div class="contents-wrapper">
        <BeTable :columns :values :border="true" grid-type="divide" :divide-num="3" />
      </div>
    </section>
    <section>
      <h4>Grid column (widths)</h4>
      <div class="desc">
        <div class="be-tag label blue">Compoennt</div>
      </div>
      <div class="contents-wrapper">
        <BeTable :columns :values :border="true" grid-type="widths" />
      </div>
    </section>
    <section>
      <h4>Selection</h4>
      <div class="desc">
        <div class="be-tag label blue">Compoennt</div>
      </div>
      <div class="contents-wrapper">
        {{ selectItem }}
        <BeTable :columns :values :border="true" :selection="true" @select="setSelectItem"/>
      </div>
    </section>
  </div>
</template>
