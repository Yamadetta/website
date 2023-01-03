import Main from "@/pages/Main";
import Articles from "@/pages/Articles";
import Projects from "@/pages/Projects";
import Page404 from "@/pages/Page404";

import { createRouter, createWebHistory } from "vue-router";

// import store from '@/store';

const routeOptions = [
  {
    path: '/',
    name: "Main",
    component: Main,
    meta: {
      title: 'Главная страница'
    }
  },
  {
    path: '/projects',
    name: "Projects",
    component: Projects,
    meta: {
      title: 'Портфолио'
    }
  },
  {
    path: '/projects/:name',
    name: "ProjectPage",
    meta: {
      title: 'Проект'
    }
  },
  {
    path: '/articles',
    name: "Articles",
    component: Articles,
    meta: {
      title: 'Статьи'
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
  history: createWebHistory(),
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