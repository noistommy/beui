<script setup>
import BeLogo from '@/components/BeLogo.vue'
</script>

<template>
  <main id="intro" class="be flex column center mid">
    <div class="intro-wrapper p-10">
      <h5 class="be-tag label round">Headless UI</h5>
      <h1 class="hero large">
        <BeLogo />
      </h1>
      <div class="large gray-txt-70 pt-4 pb-8">
        Unstyled UI components <br />designed to pair perfectly with Frog UI.
      </div>
      <div class="be-button primary outline bold">
        Show Components
        <i class="icon right xi-arrow-right" />
        <a class="link" href="/button" />
      </div>
      <div
        class="be flex mid center gap-4 pt-15"
        v-be-tooltip:bottom="`Frog UI + BEUI-Vue`"
      >
        <img src="@/assets/img/frog-profile.svg" />
        <i class="xi-plus-circle huge" />
        <img src="@/assets/img/be-ui-vue.svg" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#intro {
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  top: 0;
  left: 0;
  background-color: var(--bgc);
  z-index: 9999;
  text-align: center;
  .hero {
    line-height: 1.2;
  }
  img {
    background-color: var(--gray-10);
    border-radius: 8px;
  }
}
</style>
