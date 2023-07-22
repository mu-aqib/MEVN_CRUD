<template>
  <b-row>
    <b-col cols="6" class="mx-auto">
      <b-card class="mt-3" header="Add New Car">
        <b-form class="py-2 px-4">
          <b-form-group class="mb-3" label="Car Name" label-for="category">
            <b-form-input
              :class="{ 'is-invalid': v$.form.carName.$error }"
              placeholder="Bus"
              v-model="form.carName"
              type="text"
            ></b-form-input>
            <p
              v-if="v$.form.carName.required.$invalid"
              class="invalid-feedback"
            >
              Car Name is required
            </p>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Color" label-for="category">
            <b-form-input
              :class="{ 'is-invalid': v$.form.carColor.$error }"
              placeholder="Bus"
              v-model="form.carColor"
              type="text"
            ></b-form-input>
            <p
              v-if="v$.form.carColor.required.$invalid"
              class="invalid-feedback"
            >
              Car Color is required
            </p>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Model" label-for="category">
            <b-form-input
              :class="{ 'is-invalid': v$.form.carModel.$error }"
              placeholder="2023"
              v-model="form.carModel"
              type="text"
            ></b-form-input>
            <p
              v-if="v$.form.carModel.required.$invalid"
              class="invalid-feedback"
            >
              Car Model is required
            </p>
          </b-form-group>

          <b-form-group
            class="mb-3"
            label="Car registration No"
            label-for="category"
          >
            <b-form-input
              :class="{ 'is-invalid': v$.form.carRegNo.$error }"
              placeholder="#0091"
              v-model="form.carRegNo"
              type="text"
            ></b-form-input>
            <p
              v-if="v$.form.carRegNo.required.$invalid"
              class="invalid-feedback"
            >
              Car Reg_No is required
            </p>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Type">
            <b-form-select
              :class="{ 'is-invalid': v$.form.carType.$error }"
              class="form-control"
              v-model="form.carType"
              :options="options"
            ></b-form-select>
            <p
              v-if="v$.form.carType.required.$invalid"
              class="invalid-feedback"
            >
              Car Type is required
            </p>
          </b-form-group>

          <b-button @click.prevent="updateCar" type="submit" variant="primary"
            >Submit</b-button
          >
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import store from "../../store/index";
export default {
  name: "editCar",
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      form: {
        carName: { required }, // Car Name is required
        carColor: { required }, // Car Color is required
        carModel: { required }, // Car Model is required
        carRegNo: { required }, // Car Registration No is required
        carType: { required }, // Car Type is required and must be numeric
      },
    };
  },
  data() {
    return {
      form: {
        carName: "",
        carColor: "",
        carModel: "",
        carRegNo: "",
        carType: null,
      },

      options: [{ value: null, text: "-- Please select an option --" }],
    };
  },

  async created() {
    await store.dispatch("fetchAllCategories");
    this.setOptions(store.getters.getAllCategories);

    // Access the "id" parameter from the URL using this.$route.params.id
    this.getSingleCar(this.$route.params.id);
  },

  methods: {
    setOptions(data) {
      const newOptions = data.map((option) => {
        return {
          value: option.id,
          text: option.name.toUpperCase(),
        };
      });

      this.options = [...this.options, ...newOptions];
    },

    // fetch single Car from DB
    async getSingleCar(id) {
      let dataObject = store.getters.getAllCars.filter(
        (singleCat) => singleCat.id === id
      );
      dataObject = dataObject[0];
      this.form.carName = dataObject.car_name;
      this.form.carColor = dataObject.car_color;
      this.form.carModel = dataObject.car_model;
      this.form.carRegNo = dataObject.reg_no;
      this.form.carType = dataObject.car_type._id;
      this.form.id = dataObject.id;
    },

    // addCar method
    async updateCar() {
      const result = await this.v$.$validate();
      // notify user form is invalid
      if (!result) return;
      const res = await store.dispatch("updateSingleCar", this.form);

      if (res) this.$router.push("/car/list");
    },
  },
};
</script>
