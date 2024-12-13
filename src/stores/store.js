import Vue from "vue";
import Vuex from "vuex";
import authStore from "./auth";
import loadingStore from "./loading";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: authStore,
    loading: loadingStore,
  },
});

export default store;
