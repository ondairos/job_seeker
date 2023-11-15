<script lang="ts">
import { defineComponent } from "vue";

import HeroSection from "@/components/JobSearch/HeroSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeroSection,
  },
});
</script>

<template>
  <main>
    <HeroSection />
  </main>
</template>
