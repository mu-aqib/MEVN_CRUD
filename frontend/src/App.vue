<template>
  <div id="app">
    <component v-bind:is="getLayout"></component>
  </div>
</template>

<script>
import "@/assets/sass/main.scss";
import { mapGetters } from "vuex";

// layouts
import appLayout from "./layouts/app-layout.vue";
import authLayout from "./layouts/auth-layout.vue";
export default {
  data() {
    return {
      h: "hmm",
    };
  },
  components: {
    appLayout,
    authLayout,
  },

  computed: {
    ...mapGetters(["getLayout"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
</style>
