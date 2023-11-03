import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/jobs/results",
      name: "JobsResults",
      component: () => import(/* webpackChunkName: "jobs" */ "@/views/JobsResultsView.vue"),
    },
    {
      path: "/jobs/results/:id",
      name: "JobList",
      component: () => import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue"),
    },
  ],
});

export default router;
