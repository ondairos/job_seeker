<script lang="ts">
import { defineComponent } from "vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
import TeamsImage from "@/assets/teams_image.jpg";

export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },

  setup() {
    const TeamsImageCover = TeamsImage;

    return { TeamsImageCover };
    // const myData = ref([]);
    // onMounted(() =>
    //   axios
    //     .get("/api")
    //     .then((res) => {
    //       myData.value = res.data;
    //       console.log("my data value", myData.value);
    //     })
    //     .catch((e) => console.log(e))
    // );
    // const myDataComputed = computed(() => myData.value);
    // return { myData: myDataComputed };
  },
});
</script>

<template>
  <div>
    <header-container>
      <template #title>
        <h1 class="w-full text-4xl font-normal">Teams</h1>
      </template>

      <template #subtitle>
        <h2 class="w-full my-4 text-base font-light">
          It's awesome working here! Why don't you come join us?
        </h2>
      </template>

      <template #image>
        <img
          :src="TeamsImageCover"
          alt="TestImage"
          class="w-2/5 rounded-xl mx-auto border-2 border-solid border-slate-100"
        />
      </template>
    </header-container>
  </div>
</template>
