// import { createApp } from 'vue'
// import App from './App.vue'
// import "./style.css";
// createApp(App).mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/index.js";
const app = createApp(App);
app.use(router);  // ← السطر ده هو المشكلة — لو مش موجود
app.mount("#app");