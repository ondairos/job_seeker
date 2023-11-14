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
};

export default actions;
