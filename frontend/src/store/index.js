import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: "authLayout",
    token: undefined,
  },
  getters: {
    getLayout(state) {
      return state.layout;
    },

    getUserToken(state) {
      return state.token;
    },
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload;
    },

    setToken(state, payload) {
      localStorage.setItem("userToken", payload);
      state.token = payload;
    },
  },
  actions: {
    //----------------  AUTH ACTIONS --------------------//
    async authLogin(context, payload) {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            ...payload,
          }
        );

        context.commit("setToken", data.token);
        context.commit("setLayout", "appLayout");
        return data.token ? true : false;
      } catch (err) {
        console.log(err);
      }
    },

    async authRegister(context, payload) {
      const { data } = await axios.post("http://localhost:5000/api/users", {
        ...payload,
      });

      data.id ? true : false;
    },
    //----------------  ENDAUTH ACTIONS --------------------//

    //----------------  CATEGORY ACTIONS --------------------//
    async addCategory(context, payload) {
      const { data } = await axios.post(
        "http://localhost:5000/api/category/add",
        {
          ...payload,
        }
      );
    },
  },
});
