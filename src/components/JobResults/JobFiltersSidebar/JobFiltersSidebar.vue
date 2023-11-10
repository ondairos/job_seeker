<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarOrgs from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrgs.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    JobFiltersSidebarOrgs,
    JobFiltersSidebarJobTypes,
  },
};
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

      <JobFiltersSidebarJobTypes />
      <JobFiltersSidebarOrgs />
    </section>
  </div>
</template>
