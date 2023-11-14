import { GlobalState } from "@/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
    selectedOrgs: [],
    selectedJobTypes: [],
  };
};

export default state;
