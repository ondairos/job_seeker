import "./assets/main.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "../store/index.js";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(store).use(router);

app.mount("#app");
