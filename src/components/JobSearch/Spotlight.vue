<script lang="ts">
import { defineComponent } from "vue";

import { Spotlight } from "@/types";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import { key } from "@/store";

export default defineComponent({
  name: "SpotLight",

  setup() {
    const store = useStore(key);
    const spotlights = computed((): Spotlight[] => store.getters.GET_SPOTLIGHTS);

    onMounted(() => store.commit("RECEIVE_SPOTLIGHTS"));

    return { spotlights };
  },
});
</script>

<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>
