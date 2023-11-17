<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "JobFiltersSidebarSkills",
  components: {},

  setup() {
    const store = useStore(key);

    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm;
      },
      set(value) {
        store.commit("UPDATE_SKILLS_SEARCH_TERM", value);
      },
    });

    return { skillsSearchTerm };
  },
});
</script>

<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer programming..."
    />
  </div>
</template>
