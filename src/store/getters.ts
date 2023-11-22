import { GlobalState, Job } from "@/types";

interface IncludeJobGetters {
  GET_INCLUDE_JOB_BY_ORG: (job: Job) => boolean;
  GET_INCLUDE_JOB_BY_TYPE: (job: Job) => boolean;
  GET_INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
  GET_INCLUDE_JOB_BY_SKILL: (job: Job) => boolean;
}

const getters = {
  GET_UNIQUE_ORGS(state: GlobalState) {
    const uniqueOrgs = new Set<string>();
    state.jobs.forEach((element) => {
      uniqueOrgs.add(element.organization);
    });
    return uniqueOrgs;
  },

  GET_SPOTLIGHTS(state: GlobalState) {
    return state.spotlights;
  },

  GET_DEGREES(state: GlobalState) {
    return state.degrees;
  },
  GET_CURRENT_JOB(state: GlobalState) {
    return state.currentJob;
  },

  GET_UNIQUE_DEGREES(state: GlobalState) {
    return state.degrees.map((element) => element.degree);
  },

  GET_UNIQUE_JOB_TYPES(state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((element) => {
      uniqueJobTypes.add(element.jobType);
    });
    return uniqueJobTypes;
  },

  GET_INCLUDE_JOB_BY_ORG(state: GlobalState) {
    return (job: Job) => {
      // returns all 100 jobs
      if (state.selectedOrgs.length === 0) return true;
      return state.selectedOrgs.includes(job.organization);
    };
  },

  GET_INCLUDE_JOB_BY_TYPE(state: GlobalState) {
    return (job: Job) => {
      if (state.selectedJobTypes.length === 0) return true;
      return state.selectedJobTypes.includes(job.jobType);
    };
  },

  GET_INCLUDE_JOB_BY_DEGREE(state: GlobalState) {
    return (job: Job) => {
      if (state.selectedDegrees.length === 0) return true;
      return state.selectedDegrees.includes(job.degree);
    };
  },

  GET_INCLUDE_JOB_BY_SKILL(state: GlobalState) {
    return (job: Job) => {
      return job.title.toLowerCase().includes(state.skillsSearchTerm.toLowerCase());
    };
  },

  GET_FILTERED_JOBS(state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs
      .filter((job) => getters.GET_INCLUDE_JOB_BY_ORG(job))
      .filter((job) => getters.GET_INCLUDE_JOB_BY_TYPE(job))
      .filter((job) => getters.GET_INCLUDE_JOB_BY_DEGREE(job))
      .filter((job) => getters.GET_INCLUDE_JOB_BY_SKILL(job));
  },
};

export default getters;
