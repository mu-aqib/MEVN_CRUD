import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import store from "./store";
import axios from "axios";

// datatables
/* fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json)) */
import { ClientTable } from "vue-tables-2";

// Global Components
import BaseBlock from "./components/BaseBlock.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue).use(IconsPlugin).use(ClientTable);
Vue.component("base-block", BaseBlock);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
