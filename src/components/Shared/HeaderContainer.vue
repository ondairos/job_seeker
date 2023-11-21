<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderContainer",
});
</script>

<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title"> Sample Title </slot>
      <slot name="subtitle">Sample Subtitle</slot>

      <slot name="image">Sample Image</slot>
    </div>
  </div>
</template>
