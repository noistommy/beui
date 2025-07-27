<script setup>
// const tagColor = {
//   String: 'lightblue',
//   Boolean: 'lightgreen',
//   Number: 'orange',
//   Array: 'red',
// }
defineProps({
  datas: {
    type: Array,
  },
  title: String,
  description: String,
})
</script>

<template>
  <div class="title">{{ title }}</div>
  <div class="description">{{ description }}</div>
  <div class="props-data-list">
    <div class="lh be-grid">
      <div class="column span-2">Name</div>
      <div class="column span-8">Description</div>
      <div class="column span-2 align-center">Default</div>
    </div>
    <div class="lb be-grid">
      <div class="props-item rows" v-for="(item, i) in datas" :key="i">
        <div class="column name bold span-2">
          {{ item['name'] }}
          <template v-if="item['required']">
            <span class="be-red-text">*</span>
            <!-- <i class="xi-user be-red-text" /> -->
          </template>
        </div>
        <div class="column description span-4">
          <span>{{ item['description'] }}</span>
          <span class="be-tag label">{{ item['type'] }}</span>
        </div>
        <div class="column default span-2 align-center">
          {{ item['default'] || '-' }}
        </div>
      </div>
    </div>
  </div>
  <div class="footer small">
    [<span class="be-red-text">*</span>]는 필수 props 입니다
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 20px;
}
.props-data-list {
  .lh {
    font-weight: 600;
    .column {
      padding: 8px 12px;
    }
  }
  .lb {
    color: #666;
    font-size: 0.9em;
    border: 1px solid #f2f2f2;
    .props-item {
      // background-color: #f8f8f8;
      margin-bottom: 5px;
      border-radius: 4px;
      border-bottom: 1px solid #f2f2f2;
      &:last-child {
        margin: 0;
        border: 0;
      }
      .column {
        padding: 8px 12px;
        &.name {
          color: #333;
        }
        &.description {
          flex-grow: 1;
          span + span {
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
