import all_data from "../../db.json";

const mutations = {
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

export default mutations;
