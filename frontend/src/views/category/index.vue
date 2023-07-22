<template>
  <div class="bg-light">
    <base-block
      v-if="getAllCategories"
      header="Registered Categories"
      :columns="columns"
      :data="getAllCategories"
      @delRow="delCat"
    ></base-block>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "add",
  data() {
    return {
      columns: ["id", "name", "actions"],
    };
  },

  computed: {
    ...mapGetters(["getAllCategories"]),
  },

  mounted() {
    // Call the fetchAllCategories action here using mapActions
    this.fetchAllCategories();
  },

  methods: {
    ...mapActions(["fetchAllCategories", "deleteCategory"]),
    async delCat(id) {
      await this.deleteCategory(id);
      // Refresh the categories after deletion
      this.fetchAllCategories();
    },

    async delCat(id) {
      await this.deleteCategory(id);
      // Refresh the categories after deletion
      // this.fetchAllCategories();
    },
  },
};
</script>
