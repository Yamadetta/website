import { createStore } from 'vuex';

import posts from "@/store/modules/posts.js";

export default createStore({
  getters: {
    mobile() {
      return window.innerWidth <= 850;
    },
  },
  modules: {
    posts: posts
  }
});
