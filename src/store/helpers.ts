import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
import { Job } from "@/types";

export const useFilteredJobs = () => {
  const store = useStore(key);

  return computed<Job[]>(() => store.getters.GET_FILTERED_JOBS);
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters.GET_UNIQUE_JOB_TYPES);
};

export const useUniqueOrgTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters.GET_UNIQUE_ORGS);
};

export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<string[]>(() => store.getters.GET_UNIQUE_DEGREES);
};
