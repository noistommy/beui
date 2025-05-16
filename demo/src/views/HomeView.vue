<script setup></script>

<template>
  <main>
    <div class="be-container">
      <h3>Button</h3>
      <div class="be-button">button</div>
      <div class="be-button">
        <i class="icon left xi-arrow-left"></i>
        Left
      </div>
      <div class="be-button">
        Right
        <i class="icon right xi-arrow-right"></i>
      </div>
      <div class="be-button">
        <i class="icon left xi-angle-left"></i>
        Right
        <i class="icon right xi-angle-right"></i>
      </div>
      <div class="be-button red circle">Round</div>
      <button class="be-button blue circle border">Border</button>
      <button class="be-button purple circle outline">Outline</button>
      <button class="be-button purple circle outline disabled">Disabled</button>
      <button class="be-button purple circle outline icon">
        <i class="xi-airplane"></i>
      </button>
    </div>
    <div class="be-container">
      <h3>Input</h3>
      <div class="be-input">
        <input type="text" placeholder="Insert text" />
      </div>
      <div class="be-input">
        <input type="text" placeholder="Insert text" />
      </div>
      <div class="be-input icon left">
        <i class="icon xi-search"></i>
        <input type="text" placeholder="Insert text" />
      </div>
      <div class="be-input icon right">
        <i class="icon xi-close"></i>
        <input type="text" placeholder="Insert text" />
      </div>
      <div class="be-input icon right underline">
        <i class="icon xi-close"></i>
        <input type="text" placeholder="Insert text" />
      </div>
      <div class="be-input icon right underline disabled">
        <i class="icon xi-close"></i>
        <input type="text" placeholder="Insert text" />
      </div>
    </div>
    <div class="be-container">
      <h3>Tag</h3>
      <div class="be-tag label">test</div>
    </div>
    <div class="be-container">
      <h3></h3>
    </div>
  </main>
</template>
