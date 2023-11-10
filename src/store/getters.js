const getters = {
  GET_UNIQUE_ORGS(state) {
    const uniqueOrgs = new Set();
    state.jobs.forEach((element) => {
      uniqueOrgs.add(element.organization);
    });
    return uniqueOrgs;
  },
  GET_FILTERED_JOBS_BY_ORGS(state) {
    const filteredJobs = state.jobs.filter((element) =>
      state.selectedOrgs.includes(element.organization)
    );
    return filteredJobs.length > 0 ? filteredJobs : state.jobs;
  },
};

export default getters;
