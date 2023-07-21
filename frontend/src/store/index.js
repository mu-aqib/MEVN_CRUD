import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: "appLayout",
  },
  getters: {
    getLayout(state) {
      return state.layout;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
