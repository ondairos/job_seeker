<script lang="ts">
import { defineComponent } from "vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default defineComponent({
  name: "JobSearchForm",

  components: {
    ActionButton,
    TextInput,
  },
  setup() {
    const router = useRouter();
    const role = ref("");
    const location = ref("");

    const searchForJobs = () => {
      router.push({ name: "JobsResults", query: { role: role.value, location: location.value } });
    };

    return { role, location, searchForJobs };
  },
});
</script>

<template>
  <form
    class="flex items-center w-full h-12 mt-14 border dark:text-white text-black border-solid border-brand-gray-3 rounded-3xl custom-sm:hidden sm:hidden md:flex xl:flex 2xl:flex"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10" for="">Role</label>
        <TextInput placeholder="Software Engineer" :value="role" @handleInputData="role = $event" />
      </div>
      <span class="flex items-center h-full px-3 border-l border-r border-brand-gray-3">in</span>
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10" for="">Where?</label>
        <TextInput placeholder="London" :value="location" @handleInputData="location = $event" />
      </div>
    </div>

    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>
