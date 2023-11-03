<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>

<template>
  <div>
    <h1>Job Page for {{ currentJobId }}</h1>
  </div>
</template>
