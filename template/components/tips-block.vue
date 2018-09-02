<template>
  <div class="tips">
    <h2>A Tips</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "nuxt-property-decorator";

  @Component
  export default class TipsBlock extends Vue {
    @Prop() message
  }
</script>

<style scoped>
  .tips {
    border: 1px solid #325d72;
    padding: 15px;
  }
  h2 {
    font-size: 1.2em;
  }
</style>
