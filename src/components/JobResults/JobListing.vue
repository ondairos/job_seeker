<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Job } from "@/types";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "JobListing",

  props: {
    job: {
      type: Object as PropType<Job>,
      required: true,
    },
  },
  setup(props) {
    const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);
    const store = useStore(key);

    const handleClick = (job: object) => {
      console.log("test click");
      //populate state value with currentJob
      store.commit("UPDATE_CURRENT_JOB", job);
    };

    return { jobPageLink, handleClick };
  },
});
</script>

<template>
  <li class="mb-7">
    <router-link
      :to="{ name: 'JobList', params: { id: job.id } }"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
      @click="handleClick(job)"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li v-for="location in job.locations" :key="location" class="inline-block mr-5">
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li v-for="qual in job.minimumQualifications" :key="qual">{{ qual }}</li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-brand-blue-1">Expand</router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>
