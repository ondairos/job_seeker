import { createStore } from "vuex";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  // strict: process.env.NODE_ENV !== "production"
});

export default store;
