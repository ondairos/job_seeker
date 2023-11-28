<script lang="ts">
import { defineComponent } from "vue";

import HeadLine from "./HeadLine.vue";
import JobSearchForm from "./JobSearchForm.vue";
import Spotlight from "@/components/JobSearch/Spotlight.vue";

export default defineComponent({
  name: "HeroSection",
  components: {
    HeadLine,
    JobSearchForm,
    Spotlight,
  },
});
</script>

<template>
  <main class="flex flex-col h-screen">
    <section class="dark:text-white text-black flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <HeadLine />
          <JobSearchForm />
        </div>
        <div
          class="col-start-7 col-span-5 self-center justify-self-center custom-sm:hidden sm:hidden md:block xl:block 2xl:block"
        >
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Vue Logo"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>

    <spotlight class="flex md:flex-row custom-sm:flex-col custom-sm:mx-auto justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-sm border-slate-200 bg-slate-200 text-black w-72"
        >
          <img :src="img" class="object-contain" />

          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">{{ title }}</h3>

            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>
          <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </spotlight>
  </main>
</template>
