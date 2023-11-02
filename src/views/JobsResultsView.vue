<script>
export default {
  name: "JobsResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<template>
  <section>
    <h1 class="text-white">This is an Jobs Results page</h1>
    <button @click="goToHome">Go to Home Page</button>
  </section>
</template>
