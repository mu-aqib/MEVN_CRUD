<template>
  <div class="bg-light">
    <base-block
      v-if="getAllCars"
      header="Registered Cars"
      :columns="columns"
      :data="getAllCars"
      @delRow="delCar"
    ></base-block>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "addCars",
  data() {
    return {
      columns: [
        "No",
        "car_name",
        "car_type",
        "car_color",
        "car_model",
        "reg_no",
        "actions",
      ],
    };
  },

  computed: {
    ...mapGetters(["getAllCars"]),
  },

  mounted() {
    // Call the fetchAllCategories action here using mapActions
    this.fetchAllCars();
  },

  methods: {
    ...mapActions(["fetchAllCars", "deleteCar"]),
    async delCar(id) {
      const result = await this.deleteCar(id);
      if (result) {
        alert(result);
        this.fetchAllCars();
      }
    },
  },
};
</script>
