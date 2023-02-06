import { createApp } from "vue";
import App from "@/App.vue";
import components from "@/components/UI";

import "@/scss/index.scss";
const app = createApp(App);

components.forEach(function (component) {
  app.component(component.name, component);
});

app.mount("#app");
