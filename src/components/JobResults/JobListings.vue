<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

import { useFilteredJobs } from "@/store/helpers";
import JobListing from "@/components/JobResults/JobListing.vue";
import useCurrentPage from "@/helpers/useCurrentPage";
import usePreviousAndNextPages from "@/helpers/usePreviousAndNextPages";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },

  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("fetchJobs"));

    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));

    const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, maxPage);

    const slicedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return { slicedJobs, previousPage, currentPage, nextPage };
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
