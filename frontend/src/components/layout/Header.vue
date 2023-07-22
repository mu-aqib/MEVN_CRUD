<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-container>
      <b-navbar-brand>Demo Task</b-navbar-brand>

      <b-navbar-nav class="ms-5 me-auto w-100">
        <b-nav-item href="/">Home</b-nav-item>

        <b-nav-item-dropdown text="Categories" right>
          <b-dropdown-item href="/category/add">Add</b-dropdown-item>
          <b-dropdown-item href="/category/list"
            >View Categories</b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Cars" right>
          <b-dropdown-item href="/car/add">Add Cars</b-dropdown-item>
          <b-dropdown-item href="/car/list">View Cars</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-button class="ms-auto" @click.prevent="logOutUser" size="sm"
          >Logout</b-button
        >
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import store from "../../store/index";
export default {
  data() {
    return {};
  },

  methods: {
    logOutUser() {
      store.dispatch("logOut");
      this.$router.push("/auth/login");
    },
  },
};
</script>
