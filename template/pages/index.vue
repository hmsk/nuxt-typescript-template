<template>
  <section>
    <h1>nuxt-edge + TypeScript Starter</h1>
    <tips-block message="Initialized nuxt-edge+TS project" />
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import TipsBlock from "~/components/tips-block.vue";

  @Component({
    components: {
      TipsBlock
    }
  })
  export default class PageIndex extends Vue {
  }
</script>

<style scoped>
</style>
