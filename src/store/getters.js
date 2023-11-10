const getters = {
  GET_UNIQUE_ORGS(state) {
    const uniqueOrgs = new Set();
    state.jobs.forEach((element) => {
      uniqueOrgs.add(element.organization);
    });
    return uniqueOrgs;
  },

  GET_UNIQUE_JOB_TYPES(state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((element) => {
      uniqueJobTypes.add(element.jobType);
    });
    return uniqueJobTypes;
  },

  GET_INCLUDE_JOB_BY_ORG(state) {
    return (job) => {
      // returns all 100 jobs
      if (state.selectedOrgs.length === 0) return true;
      return state.selectedOrgs.includes(job.organization);
    };
  },

  GET_INCLUDE_JOB_BY_TYPE(state) {
    return (job) => {
      // returns all 100 jobs
      if (state.selectedJobTypes.length === 0) return true;
      return state.selectedJobTypes.includes(job.jobType);
    };
  },

  GET_FILTERED_JOBS(state, getters) {
    return state.jobs
      .filter((job) => getters.GET_INCLUDE_JOB_BY_ORG(job))
      .filter((job) => getters.GET_INCLUDE_JOB_BY_TYPE(job));
  },
};

export default getters;
