import Vue from "vue";
import Vuex from "vuex";
// import VuexPersist from "vuex-persist";

Vue.use(Vuex);

// const vuexPersist = new VuexPersist({
//   key: "my-app",
//   storage: window.localStorage,
// });

export default new Vuex.Store({
  // plugins: [vuexPersist.plugin],
  state: {
    meals: [],
    categories: [],
  },
  getters: {
    meals(state) {
      return state.meals;
    },
    categories(state) {
      return state.categories;
    },
    randomMeal(state) {
      const random = Math.floor(Math.random() * 10);
      return state.meals[random];
    },
    mealById(state) {
      return (mealID) => {
        return state.meals.find((meal) => meal.idMeal === mealID);
      };
    },
  },
  mutations: {
    setMeals(state, payload) {
      state.meals = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    async fetchMeals({ commit }) {
      const meals = [];
      for (let i = 0; i < 10; i++) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        const data = await response.json();
        const meal = data.meals[0];
        meal.ingredients = [];

        for (let j = 1; j <= 20; j++) {
          if (meal[`strIngredient${j}`]) {
            meal.ingredients.push(
              `${meal[`strIngredient${j}`]} <strong> ${
                meal[`strMeasure${j}`]
              }</strong>`
            );
          } else {
            break;
          }
        }
        meals.push(meal);
      }
      commit("setMeals", meals);
    },
    async fetchCategories({ commit }) {
      const categories = [];
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const data = await response.json();
      data.categories.forEach((category, index) => {
        if (index < 9) {
          categories.push(category);
        }
      });

      commit("setCategories", categories);
    },
  },
});
