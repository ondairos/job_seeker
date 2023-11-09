<script>
import { mapState } from "vuex";

import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },

  computed: {
    currentPage() {
      const currentPageString = this.$route.query.page || "1";
      return Number.parseInt(currentPageString);
    },
    previousPage() {
      const prevPage = this.currentPage - 1;
      const firstPage = 1;
      return prevPage >= firstPage ? prevPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.jobs.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    slicedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
    ...mapState(["jobs"]),
  },
  mounted() {
    this.$store.dispatch("fetchJobs");
  },
};
</script>

<template>
  <main class="flex-auto p-8 bg-brand-gray-2 text-black">
    <ol>
      <JobListing v-for="job in slicedJobs" :key="job.id" :job="job" />

      <div class="mt-8 mx-auto">
        <div class="flex flex-row flex-nowrap">
          <p class="text-sm flex-grow">Page: {{ currentPage }}</p>

          <div class="flex items-center justify-center">
            <router-link
              v-if="previousPage"
              :to="{ name: 'JobsResults', query: { page: previousPage } }"
              class="mx-3 text-sm font-semibold text-brand-blue-1"
              >Previous</router-link
            >
            <router-link
              v-if="nextPage"
              :to="{ name: 'JobsResults', query: { page: nextPage } }"
              class="mx-3 text-sm font-semibold text-brand-blue-1"
              >Next</router-link
            >
          </div>
        </div>
      </div>
    </ol>
  </main>
</template>
