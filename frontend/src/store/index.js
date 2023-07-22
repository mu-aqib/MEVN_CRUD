import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: "authLayout",
    token: undefined,

    categories: undefined,
    cars: undefined,

    config: undefined,
  },
  getters: {
    getLayout(state) {
      return state.layout;
    },

    getUserToken(state) {
      return state.token;
    },

    getAllCategories(state) {
      return state.categories;
    },

    getAllCars(state) {
      return state.cars;
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

    setCategories(state, payload) {
      state.categories = payload;
    },

    setCars(state, payload) {
      const cars = payload.map((car, i) => {
        return {
          No: i,
          id: car._id,
          car_name: car.carName,
          car_type: car.carType,
          car_color: car.carColor,
          car_model: car.carModel,
          reg_no: car.carRegNo,
        };
      });
      console.log(cars);
      state.cars = cars;
    },

    setBearerToken(state, payload) {
      state.config = {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      };
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
        context.commit("setBearerToken", data.token);
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

    logOut() {
      localStorage.removeItem("userToken");
      this.state.config = undefined;
      return true;
    },

    updateConfig(context) {
      if (!context.state.config)
        context.commit("setBearerToken", localStorage.getItem("userToken"));
    },
    //----------------  CATEGORY ACTIONS --------------------//
    async addCategory(context, payload) {
      try {
        context.dispatch("updateConfig");
        const { data } = await axios.post(
          "http://localhost:5000/api/category/add",
          {
            ...payload,
          },
          context.state.config
        );

        return data ? true : false;
      } catch (err) {
        alert(err.response.data.message);
      }
    },

    async fetchAllCategories(context) {
      const { data } = await axios.get(
        "http://localhost:5000/api/category/getAll"
      );
      context.commit("setCategories", data);
    },

    async updateSingleCat(context, payload) {
      try {
        context.dispatch("updateConfig");
        const { data } = await axios.put(
          `http://localhost:5000/api/category/update/${payload.id}`,
          {
            name: payload.name,
          },
          context.state.config
        );
        return data ? true : false;
      } catch (err) {
        alert(err.response.data.message);
      }
    },

    async deleteCategory(context, payload) {
      context.dispatch("updateConfig");
      const del = await axios.delete(
        `http://localhost:5000/api/category/${payload}`,
        context.state.config
      );
      return del ? true : false;
    },

    //----------------  CAR ACTIONS --------------------//
    async addCar(context, payload) {
      try {
        context.dispatch("updateConfig");
        const { data } = await axios.post(
          "http://localhost:5000/api/car/add",
          {
            ...payload,
          },
          context.state.config
        );
        console.log(data);
      } catch (err) {
        alert(err.response.data.message);
      }
    },

    async fetchAllCars(context) {
      const { data } = await axios.get("http://localhost:5000/api/car/getAll");
      context.commit("setCars", data);
    },

    async updateSingleCar(context, payload) {
      try {
        context.dispatch("updateConfig");
        // remove id from the pyaload
        const { id, ...dataToSend } = payload;
        const { data } = await axios.put(
          `http://localhost:5000/api/car/update/${id}`,
          {
            ...dataToSend,
          },
          context.state.config
        );

        console.log(data);

        return data ? true : false;
      } catch (err) {
        alert(err.response.data.message);
      }
    },

    async deleteCar(context, payload) {
      context.dispatch("updateConfig");
      const { data } = await axios.delete(
        `http://localhost:5000/api/car/${payload}`,
        context.state.config
      );
      return data ? data.message : false;
    },
  },
});
