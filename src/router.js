import { createRouter, createWebHistory } from "vue-router";

import Main from "@/pages/Main.vue"
import Tasks from "@/pages/Tasks.vue"

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/tasks",
    component: Tasks
  }
]

const router = createRouter({
  // window.location.pathname     test for github Pages
  history: createWebHistory(),
  routes
})

export default router