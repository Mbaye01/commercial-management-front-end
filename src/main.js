// main.js

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Bootstrap styles and scripts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Import Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";

// Création et montage de l'application Vue
const app = createApp(App);

app.use(router);
app.mount("#app");
