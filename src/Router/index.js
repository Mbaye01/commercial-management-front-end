import { createRouter, createWebHistory } from "vue-router";
import CustomersView from "../views/CustomersView.vue";
import ProductsView from "../views/ProductsView.vue";
import OrdersView from "../views/OrdersView.vue";
import AddOrder from "../components/orders/AddOrder.vue";
import EditOrder from "../components/orders/EditOrder.vue";
import ShowOrder from "../components/orders/ShowOrder.vue";

const routes = [
  { path: "/", component: CustomersView }, // Page d'accueil sur la vue des clients
  { path: "/customers", component: CustomersView }, // Route vers la vue des clients
  { path: "/products", component: ProductsView }, // Route vers la vue des produits
  { path: "/orders", name: "orders", component: OrdersView }, // Route vers la vue des commandes
  { path: "/create", name: "create-order", component: AddOrder }, // Route pour ajouter une commande
  { path: "/edit/:id", name: "edit-order", component: EditOrder }, // Route pour modifier une commande spécifique
  { path: "/view/:id", name: "view-order", component: ShowOrder }, // Route pour visualiser une commande spécifique
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
