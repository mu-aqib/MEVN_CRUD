import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import Login from "../views/auth/Login.vue";
import Home from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  // Auth routes Login|Register
  {
    path: "/auth/login",
    name: "login",
    component: Login,
    meta: { layout: "auth", redirectIfAuthenticated: true },
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("../views/auth/Register.vue"),
    meta: { layout: "auth", redirectIfAuthenticated: true },
  },

  // Dashboard Home page
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requireAuth: true,
    },
  },
  // -------------  categories
  {
    path: "/category/add",
    name: "add_category",
    component: () => import("../views/category/add.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/category/list",
    name: "view_category",
    component: () => import("../views/category/index.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/category/edit/:id",
    name: "edit_category",
    component: () => import("../views/category/edit.vue"),
    meta: {
      requireAuth: true,
    },
  },

  // -------------  Cars
  {
    path: "/car/add",
    name: "add_car",
    component: () => import("../views/cars/add.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/car/list",
    name: "view_car",
    component: () => import("../views/cars/index.vue"),
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// access token
const getUserToken = () => {
  const token = localStorage.getItem("userToken") ?? "";
  store.state.token = token;
  return token;
};

router.beforeEach((to, from, next) => {
  // ----------  check the auth and verify the user
  if (to.meta.requireAuth) {
    if (getUserToken()) {
      next();
    } else {
      next({ name: "login" });
    }
    // getUserToken() ? next() : next({ name: "login" });
  } else if (to.meta.redirectIfAuthenticated) {
    console.log("ehheheheh");
    getUserToken() ? next({ name: "home" }) : next();
  }

  // ----------   changin the layout before accessing the route
  if (to.meta && to.meta.layout && to.meta.layout == "auth") {
    store.commit("setLayout", "authLayout");
  } else {
    store.commit("setLayout", "appLayout");
  }
  next(true);
});

export default router;
