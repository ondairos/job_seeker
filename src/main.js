import "./assets/main.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

library.add(faSearch);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
