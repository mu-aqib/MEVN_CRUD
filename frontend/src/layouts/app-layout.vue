<template>
  <div>
    <!--  NAVBAR  -->
    <Header></Header>

    <b-row>
      <!--  SIDEBAR  -->
      <!-- <b-col cols="2">
        <Sidebar></Sidebar>
      </b-col> -->

      <!--  MAIN CONTENT  -->
      <b-col cols="10" class="mx-auto">
        <b-container class="p-5">
          <router-view></router-view>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

export default {
  data() {
    return {};
  },
  components: {
    Sidebar,
    Header,
  },
};
</script>
