import Vue from "vue";
import VueRouter from "vue-router";
// import Head from "../views/Head.vue";
// import Work from "../components/Work";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/work",
  //   name: "Work",
  //   component: Work,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
