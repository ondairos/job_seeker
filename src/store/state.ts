import { GlobalState } from "@/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
    selectedOrgs: [],
    selectedJobTypes: [],
    selectedDegrees: [],
    degrees: [],
    skillsSearchTerm: "",
    currentJob: {},
  };
};

export default state;
