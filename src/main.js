import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "./index.css";
import { initializeWeb3 } from "./server/web3";

createApp(App).use(router).use(store).mount("#app");

initializeWeb3();
