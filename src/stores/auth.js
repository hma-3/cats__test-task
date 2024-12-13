const authStore = {
  state: {
    username: localStorage.getItem("username") || null,
  },

  getters: {
    getUsername(state) {
      return state.username;
    },

    checkAuth(state) {
      return state.username ? true : false;
    },
  },

  mutations: {
    login(state, name) {
      state.username = name;
      localStorage.setItem("username", name);
    },

    logout(state) {
      state.username = null;
      localStorage.removeItem("username");
    },
  },

  actions: {
    login({ commit }, name) {
      commit("login", name);
    },

    logout({ commit }) {
      commit("logout");
    },
  },
};

export default authStore;
