<template>
  <b-row>
    <b-col cols="6" class="mx-auto">
      <b-card class="mt-3" header="Login Form">
        <b-form class="py-2 px-4">
          <b-form-group class="mb-3" label="Category Name" label-for="category">
            <b-form-input placeholder="Bus" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Category Name" label-for="category">
            <b-form-input placeholder="Bus" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Category Name" label-for="category">
            <b-form-input placeholder="Bus" type="text" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "add",
  data() {
    return {};
  },
};
</script>
