<script lang="ts">
import { defineComponent } from "vue";
import useConfirmRoute from "@/helpers/useConfirmRoute";
import { useFilteredJobs } from "@/store/helpers";

export default defineComponent({
  name: "SubNav",
  setup() {
    const filteredJobs = useFilteredJobs();

    const onJobResultsPage = useConfirmRoute("JobsResults");

    return { onJobResultsPage, filteredJobs };
  },
});
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
