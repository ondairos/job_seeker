// @ts-ignore
import all_data from "../../db.json";

import { Commit } from "vuex";

interface Context {
  commit: Commit;
}

const actions = {
  fetchJobs({ commit }: Context) {
    commit("RECEIVE_JOBS", all_data.jobs);
  },
  fetchDegrees({ commit }: Context) {
    commit("RECEIVE_DEGREES", all_data.degrees);
  },
};

export default actions;
