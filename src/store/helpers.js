import { computed } from "vue";

import { useStore } from "vuex";

export const useFilteredJobs = () => {
  const store = useStore();

  return computed(() => store.getters.GET_FILTERED_JOBS);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed(() => store.getters.GET_UNIQUE_JOB_TYPES);
};

export const useUniqueOrgTypes = () => {
  const store = useStore();
  return computed(() => store.getters.GET_UNIQUE_ORGS);
};
