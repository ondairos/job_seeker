<script lang="ts">
import { defineComponent } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarGroup.vue";

import { useUniqueJobTypes, useUniqueOrgTypes } from "@/store/helpers";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFiltersSidebarGroup,
  },
  setup() {
    const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
    const ADD_SELECTED_ORGS = "ADD_SELECTED_ORGS";
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrgs = useUniqueOrgTypes();

    return { uniqueJobTypes, uniqueOrgs, ADD_SELECTED_JOB_TYPES, ADD_SELECTED_ORGS };
  },
});
</script>

<template>
  <div class="flex flex-col p-4 bg-white text-black border-r border-solid border-brand-gray-1 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>

      <JobFiltersSidebarGroup
        header="Job Types"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
      />
      <JobFiltersSidebarGroup
        header="Organizations"
        :uniqueValues="uniqueOrgs"
        :mutation="ADD_SELECTED_ORGS"
      />
    </section>
  </div>
</template>
