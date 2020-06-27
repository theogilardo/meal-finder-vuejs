import Vue from "vue";
import App from "./App.vue";
import RandomMeal from "./components/RandomMeal.vue";
import Meals from "./components/Meals.vue";
import Meal from "./components/Meal.vue";
import Categories from "./components/Categories.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

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

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
