<template>
  <b-row>
    <b-col cols="6" class="mx-auto">
      <b-card class="mt-3" header="Add New Car">
        <b-form class="py-2 px-4">
          <b-form-group class="mb-3" label="Car Name" label-for="category">
            <b-form-input placeholder="Bus" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Color" label-for="category">
            <b-form-input placeholder="Bus" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Model" label-for="category">
            <b-form-input placeholder="Bus" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group
            class="mb-3"
            label="Car registration No"
            label-for="category"
          >
            <b-form-input placeholder="Bus" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group class="mb-3" label="Car Company" label-for="category">
            <b-form-select :options="options"></b-form-select>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "addCar",
  data() {
    return {
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>
