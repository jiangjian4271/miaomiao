import Vue from "vue";
import VueRouter from "vue-router";
import movieRouter from "./movie";
import mineRouter from "./mine";
import cinemaRouter from "./cinema";

Vue.use(VueRouter);

const routes = [
  movieRouter,
  mineRouter,
  cinemaRouter,
  // 下面作用：如果找不到其他路由，会重定向到电影页面
  { path: "/*", redirect: "/movie" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
