<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed } from "vue";
import { key } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  name: "AccordionSection",

  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore(key);
    const isOpen = ref(false);

    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    store.subscribe((mutation) => {
      if (mutation.type === "CLEAR_ALL_USER_SELECTIONS") {
        isOpen.value = false;
      }
    });

    const caretIcon = computed(() => (isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]));

    return { toggleIsOpen, caretIcon, isOpen };
  },
});
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
