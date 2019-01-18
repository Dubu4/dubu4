import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const resourceHost = "http://localhost:3000";
const enhanceAccessToken = () => {
  const { accessToken } = localStorage;
  if (!accessToken) return;
  axios.defaults.headers.common["Authorization"] = "Bearer ${accessToken}";
};
enhanceAccessToken();

export const store = new Vuex.Store({
  state: {
    accessToken: null,
    counter: 0
  },
  getters: {},
  mutations: {
    LOGIN(state, { accessToken }) {
      state.accessToken = accessToken;
      localStorage.accessToken = accessToken;
    },
    LOGOUT(state) {
      state.accessToken = null;
    },
    addCounter: function(state, payload) {
      if (state.counter <= 0) {
        return state.counter++;
      } else {
        return state.counter++;
      }
    },
    subCounter: function(state, payload) {
      if (state.counter <= 0) {
        return 0;
      } else {
        return state.counter--;
      }
    }
  },
  actions: {
    LOGIN({ commit }, { email, password }) {
      return axios
        .post(`${resourceHost}/login`, { email, password })
        .then(({ data }) => commit("LOGIN", data));
    },
    LOGOUT({ commit }) {
      commit("LOGOUT");
    },
    addCounter() {
      state.counter++;
    },
    subCounter() {
      state.counter--;
    }
  }
});
/*--Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})*/
