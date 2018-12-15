<template>
  <section>
    <h1>nuxt-edge + TypeScript Starter</h1>
    <tips-block message="Initialized nuxt-edge+TS project" />
  </section>
</template>

<script lang="ts">
  import { Component } from "nuxt-property-decorator";
  import PageBase from "./page-base";
  import TipsBlock from "~/components/tips-block.vue";

  @Component({
    components: {
      TipsBlock
    }
  })
  export default class PageIndex extends PageBase {
  }
</script>

<style scoped>
</style>
