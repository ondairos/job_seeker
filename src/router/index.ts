import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
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
    {
      path: "/teams",
      name: "Teams",
      component: () => import("@/views/TeamsView.vue"),
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
