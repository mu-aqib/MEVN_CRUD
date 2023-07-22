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
              required
            ></b-form-input>
            <p
              v-if="v$.category.name.required.$invalid"
              class="invalid-feedback"
            >
              Category Name is required
            </p>
          </b-form-group>

          <b-button type="submit" @click.prevent="addNewCat" variant="primary"
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
  name: "add",
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
    };
  },

  methods: {
    async addNewCat() {
      const result = await this.v$.$validate();
      if (!result) return;
      const res = await store.dispatch("addCategory", this.category);
      this.category.name = "";
      if (res) this.$router.push("/category/list");
    },
  },
};
</script>
