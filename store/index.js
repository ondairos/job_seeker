import { createStore } from "vuex";
import all_data from "../db.json";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
    selectedOrgs: [],
  };
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
  RECEIVE_JOBS(state, payload) {
    state.jobs = payload;
  },
  RECEIVE_SPOTLIGHTS(state) {
    state.spotlights = all_data.spotlights;
  },
  ADD_SELECTED_ORGS(state, payload) {
    state.selectedOrgs = payload;
  },
};

export const getters = {
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

export const actions = {
  fetchJobs({ commit }) {
    commit("RECEIVE_JOBS", all_data.jobs);
  },
};

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  // strict: process.env.NODE_ENV !== "production"
});

export default store;
