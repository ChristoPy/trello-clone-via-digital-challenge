import { createWebHistory, createRouter } from "vue-router";
import board from "@/views/board.vue";
import home from "@/views/home.vue";
import login from "@/views/login.vue";
import register from "@/views/register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    meta: { closed: true },
  },
  {
    path: "/board/:id",
    name: "board",
    component: board,
    meta: { closed: true },
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;