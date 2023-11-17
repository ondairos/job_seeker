<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";

import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarTop from "./JobFiltersSidebarTop.vue";
import JobFiltersSidebarGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarGroup.vue";
import JobFiltersSidebarSkills from "./JobFiltersSidebarSkills.vue";

import { useUniqueJobTypes, useUniqueOrgTypes, useUniqueDegrees } from "@/store/helpers";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    JobFiltersSidebarGroup,
    JobFiltersSidebarTop,
    JobFiltersSidebarSkills,
    Accordion,
  },
  setup() {
    const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
    const ADD_SELECTED_ORGS = "ADD_SELECTED_ORGS";
    const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrgs = useUniqueOrgTypes();
    const uniqueDegrees = useUniqueDegrees();

    // keep the role in the search field
    const parseSkillsSearchTerm = () => {
      const route = useRoute();
      const role = route.query.role || "";

      const store = useStore(key);
      store.commit("UPDATE_SKILLS_SEARCH_TERM", role);
    };

    onMounted(parseSkillsSearchTerm);

    return {
      uniqueJobTypes,
      uniqueOrgs,
      uniqueDegrees,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGS,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>

<template>
  <div class="flex flex-col p-4 bg-white text-black border-r border-solid border-brand-gray-1 w-96">
    <section class="pb-5">
      <JobFiltersSidebarTop />

      <accordion header="Skills and Qualifications">
        <JobFiltersSidebarSkills />
      </accordion>

      <accordion header="Degrees">
        <JobFiltersSidebarGroup
          header="Degrees"
          :uniqueValues="uniqueDegrees"
          :mutation="ADD_SELECTED_DEGREES"
        />
      </accordion>

      <accordion header="Job Types">
        <JobFiltersSidebarGroup
          header="Job Types"
          :unique-values="uniqueJobTypes"
          :mutation="ADD_SELECTED_JOB_TYPES"
        />
      </accordion>

      <accordion header="Organizations">
        <JobFiltersSidebarGroup
          header="Organizations"
          :uniqueValues="uniqueOrgs"
          :mutation="ADD_SELECTED_ORGS"
        />
      </accordion>
    </section>
  </div>
</template>
