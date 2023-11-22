<script lang="ts">
import { defineComponent } from "vue";
import nextElementInList from "@/utils/nextElementInList.js";

interface ActionClasses {
  [x: string]: boolean;
}

interface Data {
  action: string;
  interval: number | undefined;
}

export default defineComponent({
  name: "HeadLine",
  data(): Data {
    return {
      action: "Build",
      interval: undefined,
    };
  },
  computed: {
    actionClasses(): ActionClasses {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
});
</script>

<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter md:text-8xl custom-sm:text-6xl mb-14">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Job Seeker.</h2>
  </section>
</template>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: red;
}
</style>
