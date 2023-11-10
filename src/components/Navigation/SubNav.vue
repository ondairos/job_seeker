<script>
import { mapGetters } from "vuex";
export default {
  name: "SubNav",
  computed: {
    ...mapGetters({
      filteredJobs: "GET_FILTERED_JOBS_BY_ORGS",
    }),
    onJobResultsPage() {
      return this.$route.name === "JobsResults";
    },
  },
};
</script>

<template>
  <div
    v-if="onJobResultsPage"
    class="w-full h-16 bg-white border-b border-solid border-brand-gray-1"
  >
    <div class="flex items-center h-full px-8">
      <div>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-2" />
        <span
          ><span class="text-brand-green-1">{{ filteredJobs.length }}</span> jobs matched</span
        >
      </div>
    </div>
  </div>
</template>
