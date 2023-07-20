<template>
  <div id="app">
    <component v-bind:is="getLayout"></component>
  </div>
</template>

<script>
import "@/assets/sass/main.scss";
import { mapGetters } from "vuex";
import axios from "axios";
// layouts
import appLayout from "./layouts/app-layout.vue";
import authLayout from "./layouts/auth-layout.vue";
export default {
  data() {
    return {};
  },
  components: {
    appLayout,
    authLayout,
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/api/data");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
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
