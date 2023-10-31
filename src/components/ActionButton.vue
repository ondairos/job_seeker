<script>
export default {
  name: "ActionButton",
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        // primary: this.type === "primary",
        // secondary: this.type === "secondary",
        [this.type]: true,
      };
    },
  },
};
</script>

<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  @apply px-5 py-3 font-semibold rounded;
}

.primary {
  @apply bg-brand-blue-1 hover:shadow-blue text-white;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
