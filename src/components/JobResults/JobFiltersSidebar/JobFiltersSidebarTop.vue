<script lang="ts">
import { defineComponent } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "JobFiltersSidebarTop",
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore(key);

    const clearSelections = () => {
      store.commit("CLEAR_ALL_USER_SELECTIONS");
    };

    return { clearSelections };
  },
});
</script>

<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <ActionButton text="Clear Filters" type="secondary" @click="clearSelections" />
    </div>
  </div>
</template>
