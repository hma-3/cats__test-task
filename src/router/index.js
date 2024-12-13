import Vue from "vue";
import VueRouter from "vue-router";
import store from "../stores/store";

import LoginView from "../views/LoginView.vue";
import FactsView from "../views/FactsView.vue";
import FactView from "../views/FactView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: { name: "facts" },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: (to, from, next) => {
        const isAuthorized = localStorage.getItem("username") !== null;

        if (isAuthorized) {
          next({ name: "facts" });
        } else {
          next();
        }
      },
    },
    {
      path: "/facts",
      name: "facts",
      component: FactsView,
      meta: { requiresAuth: true },
    },
    {
      path: "/fact",
      name: "fact",
      component: FactView,
      meta: { requiresAuth: true },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: { requiresAuth: true },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
      meta: { requiresAuth: true },
    },
    { path: "*", redirect: { name: "login" } },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const isAuthorized = localStorage.getItem("username") !== null;

  store.dispatch("setLoading", true);

  if (to.name === "login" && isAuthorized) {
    next({ name: "facts" });
  } else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthorized
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

router.afterEach(() => {
  store.dispatch("setLoading", false);
});

export default router;
