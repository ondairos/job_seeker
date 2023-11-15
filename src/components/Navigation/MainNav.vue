<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ImageProfile from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";

import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "MainNav",
  components: { ActionButton, ImageProfile, SubNav },
  data() {
    return {
      company: "Job Seeker",
      author: "Ioannis Kantiloros",
      menuItems: [
        {
          text: "Teams",
          url: "/teams",
        },
        {
          text: "Locations",
          url: "/",
        },
        {
          text: "Life at Job Seeker",
          url: "/",
        },
        {
          text: "How we hire",
          url: "/",
        },
        {
          text: "Students",
          url: "/",
        },
        {
          text: "Jobs",
          url: "/jobs/results",
        },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState({
      isLoggedIn: "isLoggedIn",
    }),
  },
  methods: {
    handleClick() {
      this.$store.commit("LOGIN_USER");
    },
    ...mapMutations(["LOGIN_USER"]),
  },
});
</script>

<template>
  <header :class="['w-full', 'text-sm', 'text-black', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-brand-gray-1">
        <router-link to="/" class="flex items-center text-black h-full text-xl">{{
          company
        }}</router-link>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="item in menuItems" :key="item.text" class="h-full ml-9 first:ml-0">
              <router-link :to="item.url" class="flex items-center h-full py-2.5">{{
                item.text
              }}</router-link>
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
