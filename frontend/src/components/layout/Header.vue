<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-container>
      <b-navbar-brand>Demo Task</b-navbar-brand>

      <b-navbar-nav class="ms-5 me-auto">
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
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
