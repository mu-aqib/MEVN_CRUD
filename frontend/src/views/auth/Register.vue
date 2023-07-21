<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="6" class="mx-auto">
        <b-card class="mt-3" header="Registration Form">
          <b-form>
            <b-form-group class="mb-3" label="Your Name:" label-for="username">
              <b-form-input
                v-model="form.name"
                placeholder="Enter name"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group class="mb-3" label="Your Email:" label-for="email">
              <b-form-input
                v-model="form.email"
                placeholder="Enter email"
                type="email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="mb-3"
              label="Your Password"
              label-for="password"
            >
              <b-form-input
                v-model="form.password"
                placeholder="*******"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="mb-3"
              label="Confirm Password"
              label-for="confirm_password"
            >
              <b-form-input
                v-model="form.confirmPAssword"
                placeholder="*******"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-button
              type="submit"
              @click.prevent="registerUser"
              variant="primary"
              >Submit</b-button
            >
          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <pre>

      {{ form }}
    </pre>
  </b-container>
</template>

<script>
import store from "../../store/index";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPAssword: "",
      },
    };
  },

  methods: {
    async registerUser() {
      const result = await store.dispatch("authRegister", this.form);
      console.log(result);
    },
  },
};
</script>
