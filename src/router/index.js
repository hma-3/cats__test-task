import Vue from "vue";
import VueRouter from "vue-router";
import store from "../stores/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL || "/",
  routes: [
    {
      path: "/",
      redirect: { name: "facts" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      beforeEnter: (to, from, next) => {
        const isAuthorized = store.getters.checkAuth;

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
      component: () => import("../views/FactsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/fact",
      name: "fact",
      component: () => import("../views/FactView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
      meta: { requiresAuth: true },
    },
    { path: "*", redirect: "/login" },
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
  const isAuthorized = store.getters.checkAuth;

  store.dispatch("setLoading", true);

  if (to.name === "login" && isAuthorized) {
    next("/facts");
  } else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthorized
  ) {
    next("/login");
  } else {
    next();
  }
});

router.afterEach(() => {
  store.dispatch("setLoading", false);
});

export default router;
