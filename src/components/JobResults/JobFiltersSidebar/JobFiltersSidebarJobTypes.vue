<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { mapGetters } from "vuex";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters({
      uniqueJobTypes: "GET_UNIQUE_JOB_TYPES",
    }),
  },
  methods: {
    selectJobType() {
      this.$store.commit("ADD_SELECTED_JOB_TYPES", this.selectedJobTypes);
      this.$router.push({ name: "JobsResults" });
    },
  },
};
</script>

<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="jobType in uniqueJobTypes" :key="jobType" class="w-1/2 h-8">
            <input
              v-model="selectedJobTypes"
              :value="jobType"
              :id="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
