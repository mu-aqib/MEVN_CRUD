<template>
  <b-navbar type="light" variant="light" class="position-fixed left-0">
    <b-nav vertical class="align-self-start">
      <b-nav-item active to="/">Dashboard</b-nav-item>
      <b-nav-item active to="/category/add">Add Cat</b-nav-item>
      <b-nav-item active to="/category/list">View Cat</b-nav-item>
      <b-nav-item active to="/car/add">Add car</b-nav-item>
      <b-nav-item active to="/car/list">View cars</b-nav-item>
    </b-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 16%;

  padding: 1rem;
}
</style>
