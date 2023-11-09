<script>
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarOrgs",
  components: {
    Accordion,
  },
};
</script>

<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input type="checkbox" class="mr-3" id="VueTube" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="w-1/2 h-8">
            <input type="checkbox" class="mr-3" id="betweenVue" />
            <label for="betweenVue">betweenVue</label>
          </li>
          <li class="w-1/2 h-8">
            <input type="checkbox" class="mr-3" id="Et Vue Brute" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input type="checkbox" class="mr-3" id="Vue and a Half Men" />
            <label for="Vue and a Half Men">Vue and a Half Men</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
