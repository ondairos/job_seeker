<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "JobFiltersSidebarGroup",
  components: {
    Accordion,
  },

  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: Set,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const selectedValues = ref([]);
    const store = useStore();
    const router = useRouter();

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobsResults" });
    };

    return { selectedValues, selectValue };
  },
};
</script>

<template>
  <accordion :header="header">
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
  </accordion>
</template>
