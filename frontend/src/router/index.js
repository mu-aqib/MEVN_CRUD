import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login.vue";
import Home from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  // Auth routes Login|Register
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/auth/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },

  // Dashboard Home page
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // -------------  categories
  {
    path: "/category/add",
    name: "add_category",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/category/add.vue"),
  },
  {
    path: "/category/list",
    name: "view_category",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/category/index.vue"),
  },

  // -------------  Cars
  {
    path: "/car/add",
    name: "add_car",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cars/add.vue"),
  },
  {
    path: "/car/list",
    name: "add_car",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cars/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
