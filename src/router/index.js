import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: () => import("@/views/AboutView.vue") },
  { path: "/product/:id(\\d+)", name: "ProductDetails", component: () => import("@/views/ProductView.vue"), props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;