import { createStore } from "vuex";
import all_data from "../db.json";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
  RECEIVE_JOBS(state, payload) {
    state.jobs = payload;
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
