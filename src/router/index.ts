import Vue from "vue";
import VueRouter from "vue-router";
import RandomMeal from "../components/RandomMeal.vue";
import Meals from "../components/Meals.vue";
import Meal from "../components/Meal.vue";
import Categories from "../components/Categories.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/random-meal", component: RandomMeal },
  { path: "/categories", component: Categories },
  { path: "/", component: Meals },
  {
    path: "/meal/:id",
    name: "meal",
    component: Meal,
  },
];

// Router
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
