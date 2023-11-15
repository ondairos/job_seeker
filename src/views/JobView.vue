<script lang="ts">
import { defineComponent } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  name: "JobView",

  setup() {
    const route = useRoute();
    const currentJobId = route.params.id;

    return { currentJobId };
  },
});
</script>

<template>
  <div>
    <h1>Job Page for {{ currentJobId }}</h1>
  </div>
</template>
