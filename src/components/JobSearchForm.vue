<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>

<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    action=""
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10" for="">Role</label>
        <input
          v-model="role"
          type="text"
          placeholder="Software Engineer"
          class="w-full text-lg font-normal focus:outline-none bg-inherit"
        />
      </div>
      <span class="flex items-center h-full px-3 border-l border-r border-brand-gray-3">in</span>
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10" for="">Where?</label>
        <input
          v-model="location"
          type="text"
          placeholder="London"
          class="w-full text-lg font-normal focus:outline-none bg-inherit"
        />
      </div>
    </div>

    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>
