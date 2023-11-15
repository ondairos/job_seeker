<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import MainNav from "@/components/Navigation/MainNav.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
    RouterView,
  },
});
</script>

<template>
  <section>
    <MainNav />
    <RouterView />
  </section>
</template>
