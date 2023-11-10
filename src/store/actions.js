import all_data from "../../db.json";

const actions = {
  fetchJobs({ commit }) {
    commit("RECEIVE_JOBS", all_data.jobs);
  },
};

export default actions;
