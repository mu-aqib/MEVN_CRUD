<template>
  <b-row>
    <b-col cols="6" class="mx-auto">
      <b-card class="mt-3" header="Add New Category">
        <b-form class="py-2 px-4">
          <b-form-group class="mb-3" label="Category Name" label-for="category">
            <b-form-input
              placeholder="Bus"
              type="text"
              class="mt-2"
              v-model="category.name"
              required
            ></b-form-input>
          </b-form-group>

          <b-button
            type="submit"
            @click.prevent="updateSingleCat"
            variant="primary"
            >Update Category</b-button
          >
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import store from "../../store/index.js";
export default {
  name: "editCategory",
  data() {
    return {
      category: {
        name: "",
      },
      categoryId: null,
    };
  },

  // Call the fetchAllCategories action before the component is created
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     vm.fetchAllCategories();
  //   });
  // },

  created() {
    // Access the "id" parameter from the URL using this.$route.params.id
    const categoryId = this.$route.params.id;
    this.categoryId = categoryId;
    this.getSingleCat(categoryId);
  },

  methods: {
    // getCategory from DB
    async getSingleCat(id) {
      // const data = await store.dispatch("getSingleCat", id);
      const data = store.getters.getAllCategories.filter(
        (singleCat) => singleCat.id === id
      );

      console.log(data);
      this.category.name = data[0].name;
    },

    // Update Category
    async updateSingleCat() {
      const result = await store.dispatch("updateSingleCat", {
        id: this.categoryId,
        ...this.category,
      });

      if (result) this.$router.push("/category/list");
    },
  },
};
</script>
