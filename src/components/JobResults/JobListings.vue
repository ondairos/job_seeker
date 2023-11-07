<script>
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
};
</script>

<template>
  <main class="flex-auto p-8 bg-brand-gray-2 text-black">
    <ol>
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
    </ol>
  </main>
</template>
