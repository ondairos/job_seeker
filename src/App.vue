<script setup>
import { RouterView } from "vue-router";
import MainNav from "@/components/Navigation/MainNav.vue";
</script>

<template>
  <section>
    <MainNav />
    <RouterView />
  </section>
</template>
