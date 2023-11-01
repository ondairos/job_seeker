<script>
import HeadLine from "./HeadLine.vue";
import JobSearchForm from "./JobSearchForm.vue";

export default {
  name: "HeroSection",
  components: {
    HeadLine,
    JobSearchForm,
  },
};
</script>

<template>
  <main>
    <section class="text-white flex flex-col h-screen w-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <HeadLine />
          <JobSearchForm />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Vue Logo"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>
