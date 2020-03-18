import Vue from "vue";
import VueRouter from "vue-router";
import Squak from "../components/Squak.vue";
import Admin from "../components/Admin.vue";
import NewsFeed from "../components/NewsFeed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Squak,
    props: true,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    props: true,
  },
  {
    path: "/news",
    name: "News",
    component: NewsFeed,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
