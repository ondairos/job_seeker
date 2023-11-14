<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

export default {
  name: "SpotLight",

  setup() {
    const store = useStore();
    const spotlights = computed(() => store.getters.GET_SPOTLIGHTS);

    onMounted(() => store.commit("RECEIVE_SPOTLIGHTS"));

    return { spotlights };
  },
};
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
