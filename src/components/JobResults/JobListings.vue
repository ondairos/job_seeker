<script>
import all_jobs from "../../../db.json";

import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      data: all_jobs,
    };
  },
};
</script>

<template>
  <main class="flex-auto p-8 bg-brand-gray-2 text-black">
    <ol>
      <JobListing v-for="job in data.jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>
