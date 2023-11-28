<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { useRoute } from "vue-router";
// import { Job } from "@/types";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "JobView",
  components: {},

  setup() {
    const route = useRoute();
    const store = useStore(key);

    const style = "flex flex-row text-black";

    const currentJobId = ref(route.params.id);
    console.log("current job id ", currentJobId.value);

    // onMounted(() => {
    //   console.log("MOUNTED!!!!!");
    //   store.commit("UPDATE_NEW_CURRENT_JOB", currentJobId.value);
    // });
    // const currentJob = store.commit("UPDATE_NEW_CURRENT_JOB", currentJobId.value);
    const currentJob = computed(() => store.getters.GET_CURRENT_JOB);
    // onCreated i need to make an api call to fetch and populate the current job based on the id

    return { currentJobId, currentJob, style };
  },
});
</script>

<template>
  <main class="min-h-screen dark:text-slate-300 text-black">
    <div
      class="max-w-4xl md:px-16 md:pt-4 mx-auto mt-10 pb-4 custom-sm:px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h2 class="mb-2 text-4xl font-bold tracking-tight text-gray-600 dark:text-white">
          {{ currentJob.title }}
        </h2>
      </a>

      <div class="flex md:flex-row custom-sm:flex-col md:space-x-6 mb-4">
        <div class="custom-sm:mb-2">
          <h3 class="underline">Organization</h3>
          <p>{{ currentJob.organization }}</p>
        </div>

        <div class="custom-sm:mb-2">
          <h3 class="underline">Job type</h3>
          <p>{{ currentJob.jobType }}</p>
        </div>

        <div class="custom-sm:mb-2">
          <h3 class="underline">Date added</h3>
          <p>{{ currentJob.dateAdded }}</p>
        </div>

        <div class="custom-sm:mb-2">
          <h3 class="underline">Degree required</h3>
          <p>{{ currentJob.degree }}</p>
        </div>

        <div class="custom-sm:mb-2">
          <h3 class="underline">Locations</h3>
          <ul>
            <li v-for="location in currentJob.locations" :key="location">{{ location }}</li>
          </ul>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="underline">Description</h3>
        <p v-for="descr in currentJob.description" :key="descr">{{ descr }}</p>
      </div>

      <ul class="list-disc mb-6">
        <p class="underline mb-1">Minimum Qualifications</p>
        <li v-for="minQual in currentJob.minimumQualifications" :key="minQual">
          {{ minQual }}
        </li>
      </ul>

      <ul class="list-disc mb-6">
        <p class="underline mb-1">Preferred Qualifications</p>
        <li v-for="prefQual in currentJob.preferredQualifications" :key="prefQual">
          {{ prefQual }}
        </li>
      </ul>
    </div>
  </main>
</template>
