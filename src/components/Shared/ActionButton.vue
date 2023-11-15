<script lang="ts">
import { defineComponent } from "vue";
import { computed, toRefs } from "vue";

export default defineComponent({
  name: "ActionButton",

  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value: string) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },

  setup(props) {
    const { type } = toRefs(props);

    const buttonClass = computed(() => {
      return {
        [type.value]: true,
      };
    });

    return { buttonClass };
  },
});
</script>

<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  @apply px-5 py-3 font-semibold;
}

.primary {
  @apply bg-brand-blue-1 hover:shadow-blue rounded text-white;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
