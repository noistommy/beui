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
        <div class="be-button">
          Badge (0)
          <div class="be-badge">0</div>
        </div>
        <div class="be-button">
          Badge (1)
          <div class="be-badge red">1</div>
        </div>
        <div class="be-button">
          Badge (10)
          <div class="be-badge secondary">10</div>
        </div>
        <div class="be-button">
          Badge (N)
          <div class="be-badge attention">N</div>
        </div>
        <div class="be-button">
          Badge (N)
          <div class="be-badge success">
            <i class="icon xi-upload"></i>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4>Type</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-button">
          Float
          <div class="be-badge secondary">F</div>
        </div>
        <div class="be-button">
          Mark
          <div class="be-badge secondary mark"></div>
        </div>
      </div>
    </section>
    <section>
      <h4>Use Test</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-button">
          Fiest
          <div class="be-badge secondary">F</div>
        </div>
        <div class="be-button">
          New
          <div class="be-badge red">New</div>
        </div>
        <div class="be-button">
          Update
          <div class="be-badge blue">Upgrade</div>
        </div>
      </div>
    </section>
    <section>
      <h4>Shadow</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-button">
          Shdow on
          <div class="be-badge secondary shadow">O</div>
        </div>
        <div class="be-button">
          Shdow off
          <div class="be-badge secondary">X</div>
        </div>
      </div>
    </section>
    <section>
      <h4>Align</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-button">
          Left
          <div class="be-badge primary shadow align-left">3000</div>
        </div>
        <div class="be-button">
          Center
          <div class="be-badge primary shadow align-center">3000</div>
        </div>
        <div class="be-button">
          Right
          <div class="be-badge primary shadow align-right">3000</div>
        </div>
      </div>
    </section>
    <section>
      <h4>Color</h4>
      <div class="desc"></div>
      <div class="contents-wrapper">
        <div class="be-button" v-for="color in colors" :key="color">
          {{ color }}
          <div class="be-badge shadow" :class="color">
            <i class="icon xi-tint"></i>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
