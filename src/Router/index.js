import { createRouter, createWebHistory } from "vue-router";
import CustomersView from "../views/CustomersView.vue";
import ProductsView from "../views/ProductsView.vue";
import OrdersView from "../views/OrdersView.vue";
import AddOrder from "../components/orders/AddOrder.vue";
import EditOrder from "../components/orders/EditOrder.vue";
import ShowOrder from "../components/orders/ShowOrder.vue";

const routes = [
  { path: "/", component: CustomersView },
  { path: "/customers", component: CustomersView },
  { path: "/products", component: ProductsView },
  { path: "/orders", name: "orders", component: OrdersView },
  { path: "/create", name: "create", component: AddOrder },
  { path: "/edit/:id", name: "edit", component: EditOrder },
  { path: "/view/id", name: "view", component: ShowOrder },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
