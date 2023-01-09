import Main from "@/pages/Main";
import About from "@/pages/About";
import PostPageById from "@/pages/PostPageById";
import Page404 from "@/pages/Page404";

import { createRouter, createWebHistory } from "vue-router";

const routeOptions = [
  {
    path: '/',
    name: "Main",
    component: Main,
    meta: {
      title: 'Vue 3 приложение'
    }
  },
  { path: '/vue3-app.html', redirect: '/' },

  {
    path: '/about',
    name: "About",
    component: About,
    meta: {
      title: 'О проекте'
    }
  },
  {
    path: '/posts/:id(\\d+)',
    name: "PostPageById",
    component: PostPageById,
    meta: {
      title: `Пост №#`
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: "Page404",
    component: Page404,
    meta: {
      title: `404 - Не найдено`
    }
  },
  {
    path: '/posts',
    name: "PostsPage",
    meta: {
      title: 'Посты'
    }
  },
  {
    path: '/posts-store',
    name: "PostsPageVueX",
    meta: {
      title: 'Посты VueX'
    }
  },
  {
    path: '/posts-composition-api',
    name: "PostsPageCompApi",
    meta: {
      title: 'Посты comp. API'
    }
  }
];



const routes = routeOptions.map(route => {
  if (route.component === undefined) {
    return {
      ...route,
      component: () => import(/* webpackChunkName: "[request]" */ `@/pages/${route.name}.vue`)
    };
  } else {
    return { ...route };
  }
});


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title.includes('#')) {
    document.title = to.meta.title.replace('#', to.params.id);
  } else {
    document.title = `${to.meta.title}`;
  }
  next();
});

export default router;