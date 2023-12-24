import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/markdown",
    name: "markdown",
    component: () => import("../views/Markdown.vue"),
  },
  {
    path: "/jsonFormat",
    name: "jsonFormat",
    component: () => import("../views/JsonFormat.vue"),
  },
  {
    path: "/jsonCompare",
    name: "jsonCompare",
    component: () => import("../views/JsonCompare.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
