import { createApp } from 'vue';
import App from './App.vue';
import components from "@/components/UI";
import router from "@/router";
// import directives from "@/directives";
import store from "@/store";

const app = createApp(App);

components.forEach(function (component) {
  app.component(component.name, component);
});


// directives.forEach(function (directive) {
//   app.directive(directive.name, directive);
// });


app
  .use(store)
  .use(router)
  .mount('#app');