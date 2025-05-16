<script setup>
const colors = ['red', 'orange', 'yellow', 'lightgreen', 'green', 'lightblue', 'blue', 'deepblue', 'deeppurple', 'purple', 'brown', 'gray']
</script>

<template>
  <div class="page-wrapper be container">
    <div class="summary"></div>
    <section>
      <h4 class="title">Base</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tag label">BASE</div>
        <div class="be-tag label">기본태그</div>
        <div class="be-tag label round">Round</div>
        <div class="be-tag label">
          <i class="icon xi-tag"></i>
        </div>
        <div class="be-tag line"></div>
        <div class="be-tag line red"></div>
        <div class="be-tag line blue"></div>
        <div class="be-tag dot purple"></div>
        <div class="be-tag dot orange"></div>
        <div class="be-tag dot lightblue"></div>
      </div>
    </section>
    <section>
      <h4 class="title">Type: label</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tag label">BASE</div>
        <div class="be-tag label">기본태그</div>
        <div class="be-tag label">
          <i class="icon xi-tag"></i>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Type: line</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tag line"></div>
        <div class="be-tag line red"></div>
        <div class="be-tag line blue"></div>
        <div class="be-tag line green"></div>
      </div>
    </section>
    <section>
      <h4 class="title">Type: dot</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tag dot"></div>
        <div class="be-tag dot red"></div>
        <div class="be-tag dot blue"></div>
        <div class="be-tag dot green"></div>
      </div>
    </section>
    <section>
      <h4 class="title">Icon</h4>
      <div class="desc">label 타입의 경우에 사용</div>
      <div class="contents-wrapper">
        <div class="be-tag label">
            <i class="icon left xi-angle-left"></i>
          Left
        </div>
        <div class="be-tag label">
          Right
          <i class="icon right xi-angle-right"></i>
        </div>
        <div class="be-tag label blue">
            <i class="icon left xi-user"></i>
          User
        </div>
        <div class="be-tag label red">
            <i class="icon left xi-new"></i>
          New
        </div>
        <div class="be-tag label deeppurple">
          Tag
          <i class="icon right xi-close"></i>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Round</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tag label round">
            <i class="icon left xi-angle-left"></i>
          Left
        </div>
        <div class="be-tag label round">
          Right
          <i class="icon right xi-angle-right"></i>
        </div>
        <div class="be-tag label round blue">
            <i class="icon left xi-user"></i>
          User
        </div>
        <div class="be-tag label round red">
            <i class="icon left xi-new"></i>
          New
        </div>
        <div class="be-tag label round deeppurple">
          Tag
          <i class="icon right xi-close"></i>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Tags</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tags">
          <div class="be-tag label green">Tag A</div>
          <div class="be-tag label deepblue">Tag B</div>
          <div class="be-tag label orange">Tag C</div>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Tags: Hover Effect</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-tags one-of-a-kind">
          <div class="be-tag label green">Tag A</div>
          <div class="be-tag label deepblue">Tag B</div>
          <div class="be-tag label orange">Tag C</div>
        </div>
      </div>
    </section>
    <section>
      <h4 class="title">Color</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div v-for="color in colors" :key="color" class="be-tag label" :class="color">{{ color }}</div>
      </div>
    </section>
    <section>
      <h4 class="title">Color - light</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div v-for="color in colors" :key="color" class="be-tag label light" :class="color">{{ color }}</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.be-tag.label::first-letter {
  text-transform: uppercase;
}
</style>
