<template>
  <div class="bg-light">
    <base-block
      v-if="getAllCars"
      header="Registered Cars"
      :columns="columns"
      :data="getAllCars"
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
        "id",
        "car_name",
        "car_type",
        "car_color",
        "car_model",
        "reg_no",
        "actions",
      ],
      data: [
        {
          id: "1",
          carName: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "1",
          carName: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "1",
          carName: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "1",
          carName: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
        {
          id: "1",
          carName: "Sports Car",
          car_type: "Small",
          wheel: 4,
        },
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
      await this.deleteCategory(id);
      // Refresh the categories after deletion
      this.fetchAllCategories();
    },
  },
};
</script>
