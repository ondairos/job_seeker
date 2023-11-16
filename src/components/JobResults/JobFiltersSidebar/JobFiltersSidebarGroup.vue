<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { key } from "@/store";

export default defineComponent({
  name: "JobFiltersSidebarGroup",
  components: {},

  props: {
    uniqueValues: {
      type: [Array, Set],
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const store = useStore(key);
    const selectedValues = ref<string[]>([]);
    const router = useRouter();

    store.subscribe((mutation) => {
      if (mutation.type === "CLEAR_ALL_USER_SELECTIONS") {
        selectedValues.value = [];
      }
    });

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobsResults" });
    };

    return { selectedValues, selectValue };
  },
});
</script>

<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
          <input
            v-model="selectedValues"
            :value="value"
            :id="value"
            type="checkbox"
            class="mr-3"
            @change="selectValue"
          />
          <label :for="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>
