const loadingStore = {
  state: {
    isLoading: true,
  },
  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    setLoading({ commit }, value) {
      commit("setLoading", value);
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
};

export default loadingStore;
