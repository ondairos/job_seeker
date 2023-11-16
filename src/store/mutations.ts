// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import all_data from "../../db.json";
import { GlobalState, Job, Degree } from "@/types";

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
  RECEIVE_DEGREES(state: GlobalState) {
    state.degrees = all_data.degrees;
  },
  ADD_SELECTED_ORGS(state: GlobalState, payload: string[]) {
    state.selectedOrgs = payload;
  },
  ADD_SELECTED_JOB_TYPES(state: GlobalState, payload: string[]) {
    state.selectedJobTypes = payload;
  },
  ADD_SELECTED_DEGREES(state: GlobalState, payload: Degree[]) {
    state.selectedDegrees = payload;
  },
  CLEAR_ALL_USER_SELECTIONS(state: GlobalState) {
    state.selectedOrgs = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
  },
};

export default mutations;
