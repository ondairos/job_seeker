<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://ondairos.github.io/portfolio/assets/IconPhotoPX-ad022387.jpg",
    };
  },
});
</script>

<template>
  <img :src="imageLink" alt="Profile Image" class="w-8 h-8 object-contain rounded-3xl" />
</template>
