<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput($event: Event) {
      const target = $event.target as HTMLInputElement;
      this.$emit("handleInputData", target.value);
    },
  },
});
</script>

<template>
  <input
    :value="value"
    type="text"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none bg-inherit"
    @input="handleInput"
  />
</template>
