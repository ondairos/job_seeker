<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { mapGetters } from "vuex";

export default {
  name: "JobFiltersSidebarOrgs",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters({
      unique_orgs: "GET_UNIQUE_ORGS",
    }),
  },
  methods: {
    selectOrg() {
      this.$store.commit("ADD_SELECTED_ORGS", this.selectedOrganizations);
    },
  },
};
</script>

<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="org in unique_orgs" :key="org" class="w-1/2 h-8">
            <input
              v-model="selectedOrganizations"
              :value="org"
              :id="org"
              type="checkbox"
              class="mr-3"
              @change="selectOrg"
            />
            <label :for="org">{{ org }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
