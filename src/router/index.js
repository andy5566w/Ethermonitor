import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/block/:id",
    name: "singlePageOfBlock",
    component: () => import("../views/SinglePage/Block.vue"),
  },
  {
    path: "/tx/:id",
    name: "singlePageOfTx",
    component: () => import("../views/SinglePage/Transaction.vue"),
  },
  {
    path: "/blocks",
    name: "Multiple-blocks",
    component: () => import("../views/Lists/Blocks.vue"),
  },
  {
    path: "/transactions",
    name: "Multiple-Txs",
    component: () => import("../views/Lists/Transactions.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
