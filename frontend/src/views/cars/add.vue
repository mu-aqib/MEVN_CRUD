<template>
  <b-row>
    <b-col cols="6" class="mx-auto">
      <b-card class="mt-3" header="Add New Car">
        <b-form class="py-2 px-4">
          <b-form-group class="mb-3" label="Car Name" label-for="category">
            <b-form-input
              placeholder="Bus"
              v-model="form.carName"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Color" label-for="category">
            <b-form-input
              placeholder="Bus"
              v-model="form.carColor"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Model" label-for="category">
            <b-form-input
              placeholder="2023"
              v-model="form.carModel"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="mb-3"
            label="Car registration No"
            label-for="category"
          >
            <b-form-input
              placeholder="#0091"
              v-model="form.carRegNo"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Type">
            <b-form-select
              class="form-control"
              v-model="form.carType"
              :options="options"
            ></b-form-select>
          </b-form-group>

          <b-button @click.prevent="addNewCar" type="submit" variant="primary"
            >Submit</b-button
          >
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import store from "../../store/index";
export default {
  name: "addCar",
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

  // computed: {
  //   ...mapGetters(["getAllCategories"]),
  // },

  async mounted() {
    await store.dispatch("fetchAllCategories");
    this.setOptions(store.getters.getAllCategories);
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

    // addCar method
    addNewCar() {
      store.dispatch("addCar", this.form);
      this.resetForm();
    },

    resetForm() {
      this.form = {
        carName: "",
        carColor: "",
        carModel: "",
        carRegNo: "",
        carType: null,
      };
    },
  },
};
</script>
