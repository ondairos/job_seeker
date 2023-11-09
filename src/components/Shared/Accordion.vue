<script>
export default {
  name: "AccordionSection",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div class="flex flex-wrap items-center justify-between cursor-pointer" @click="toggleIsOpen">
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Fallback content</p>
      </slot>
    </div>
  </div>
</template>
