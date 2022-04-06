import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, ) {
    return {
      el: to.hash
    }
  }
});

export default router;
