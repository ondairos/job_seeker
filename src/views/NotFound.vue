<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  mounted() {
    this.$router.push({ name: "NotFound" });
  },
});
</script>
<template lang="">
  <div></div>
</template>
