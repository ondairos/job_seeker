import { createStore } from "vuex";
import all_data from "../db.json";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
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
};

export const actions = {
  fetchJobs({ commit }) {
    commit("RECEIVE_JOBS", all_data.jobs);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  // strict: process.env.NODE_ENV !== "production"
});

export default store;
