<template>
  <section>
    <h1>{{ name }}</h1>
    <tips-block message="{{ description }}" />
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
