<script>
import { mapState } from "vuex";

export default {
  name: "SpotLight",

  computed: {
    ...mapState(["spotlights"]),
  },
  mounted() {
    this.$store.commit("RECEIVE_SPOTLIGHTS");
  },
};
</script>

<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>
