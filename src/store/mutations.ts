// @ts-ignore
import all_data from "../../db.json";
import { GlobalState, Job } from "@/types";

const mutations = {
  LOGIN_USER(state: GlobalState) {
    state.isLoggedIn = true;
  },
  RECEIVE_JOBS(state: GlobalState, payload: Job[]) {
    state.jobs = payload;
  },
  RECEIVE_SPOTLIGHTS(state: GlobalState) {
    state.spotlights = all_data.spotlights;
  },
  ADD_SELECTED_ORGS(state: GlobalState, payload: string[]) {
    state.selectedOrgs = payload;
  },
  ADD_SELECTED_JOB_TYPES(state: GlobalState, payload: string[]) {
    state.selectedJobTypes = payload;
  },
};

export default mutations;
