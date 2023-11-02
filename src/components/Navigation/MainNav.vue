<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ImageProfile from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: { ActionButton, ImageProfile, SubNav },
  data() {
    return {
      company: "Job Seeker",
      author: "Ioannis Kantiloros",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Locations", "Life at Job Seeker", "How we hire", "Students", "Jobs"],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    handleClick() {
      return (this.isLoggedIn = !this.isLoggedIn);
    },
  },
};
</script>

<template>
  <header :class="['w-full', 'text-sm', 'text-black', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-brand-gray-1">
        <a :href="url" class="flex items-center text-black h-full text-xl"> {{ company }} </a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="item in menuItems" :key="item" class="h-full ml-9 first:ml-0">
              <a href="" class="flex items-center h-full py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ActionButton v-if="!isLoggedIn" @click="handleClick" text="Sign In" type="primary" />
          <ImageProfile v-else />
        </div>
      </div>

      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>
