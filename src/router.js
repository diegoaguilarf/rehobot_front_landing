import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/productos", component: Products },
  { path: "/productos/:category", component: Products, name: "category" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
