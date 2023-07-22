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

    //----------------  CATEGORY ACTIONS --------------------//
    async addCategory(context, payload) {
      const { data } = await axios.post(
        "http://localhost:5000/api/category/add",
        {
          ...payload,
        }
      );
    },

    async fetchAllCategories(context) {
      const { data } = await axios.get(
        "http://localhost:5000/api/category/getAll"
      );
      context.commit("setCategories", data);
    },

    async updateSingleCat(context, payload) {
      const { data } = await axios.put(
        `http://localhost:5000/api/category/update/${payload.id}`,
        {
          name: payload.name,
        }
      );

      console.log(data);

      return data ? true : false;
    },

    async deleteCategory(context, payload) {
      const del = await axios.delete(
        `http://localhost:5000/api/category/${payload}`
      );
      return del ? true : false;
    },

    //----------------  CAR ACTIONS --------------------//
    async addCar(context, payload) {
      const { data } = await axios.post("http://localhost:5000/api/car/add", {
        ...payload,
      });

      console.log(data);
    },

    async fetchAllCars(context) {
      const { data } = await axios.get("http://localhost:5000/api/car/getAll");
      context.commit("setCars", data);
    },

    async updateSingleCar(context, payload) {
      // remove id from the pyaload
      const { id, ...dataToSend } = payload;
      const { data } = await axios.put(
        `http://localhost:5000/api/car/update/${id}`,
        {
          ...dataToSend,
        }
      );

      console.log(data);

      return data ? true : false;
    },

    async deleteCar(context, payload) {
      const { data } = await axios.delete(
        `http://localhost:5000/api/car/${payload}`
      );
      console.log(data);
      return data ? data.message : false;
    },
  },
});
