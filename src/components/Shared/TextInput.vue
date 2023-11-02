<script>
export default {
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
    handleInput($event) {
      this.$emit("handleInputData", $event.target.value);
    },
  },
};
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
