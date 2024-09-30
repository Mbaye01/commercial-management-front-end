// main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router/index.js";

// Import Bootstrap styles and scripts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";

// Create and mount the Vue application
const app = createApp(App);

app.use(router);
app.mount("#app");
