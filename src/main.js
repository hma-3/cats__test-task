import Vue from "vue";
import Vuex from "vuex";
import store from "./stores/store";

import App from "./App.vue";
import router from "./router";

import "@/assets/styles/reset.css";
import "@/assets/styles/colors.css";
import "@/assets/styles/base.scss";

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
