<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="6" class="mx-auto">
        <b-card class="mt-3" header="Login Form">
          <b-form class="py-2 px-4">
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

            <b-button type="submit" @click.prevent="loginUser" variant="primary"
              >Submit</b-button
            >
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["authLogin"]),
    async loginUser() {
      const result = await this.authLogin(this.form);
      if (result) {
        alert("user loggedin");
        this.$router.push("/");
      }
    },
  },
};
</script>
