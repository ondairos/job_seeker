<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobsResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>

<template>
  <section class="flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <JobListings />
  </section>
</template>
