<template>
  <b-row>
    <b-col cols="6" class="mx-auto">
      <b-card class="mt-3" header="Add New Category">
        <b-form class="py-2 px-4">
          <b-form-group class="mb-3" label="Category Name" label-for="category">
            <b-form-input
              :class="{ 'is-invalid': v$.category.name.$error }"
              placeholder="Bus"
              type="text"
              class="mt-2"
              v-model="category.name"
            ></b-form-input>
            <p
              v-if="v$.category.name.required.$invalid"
              class="invalid-feedback"
            >
              Category Name is required
            </p>
          </b-form-group>

          <b-button
            type="submit"
            @click.prevent="updateSingleCat"
            variant="primary"
            >Submit</b-button
          >
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import store from "../../store/index.js";
export default {
  name: "editCategory",
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      category: {
        name: { required }, // Car Name is required
      },
    };
  },
  data() {
    return {
      category: {
        name: "",
      },
      categoryId: null,
    };
  },

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
      const result = await this.v$.$validate();
      if (!result) return;
      const res = await store.dispatch("updateSingleCat", {
        id: this.categoryId,
        ...this.category,
      });

      if (res) this.$router.push("/category/list");
    },
  },
};
</script>
