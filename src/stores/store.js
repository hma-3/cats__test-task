import Vue from "vue";
import Vuex from "vuex";
import loadingStore from "./loading";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    loading: loadingStore,
  },
});

export default store;
