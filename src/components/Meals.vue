<template>
  <div>
    <div class="container">
      <div class="flex">
        <button class="btn" @click="filterAZ()">Sort A/Z</button>
        <button class="btn" @click="filterZA()">Sort Z/A</button>
      </div>
      <div v-bind:key="meal.id" v-for="meal in meals">
        <router-link
          @click.native="resetLocalStorage()"
          :to="{ name: 'meal', params: { id: meal.idMeal } }"
        >
          <div class="meal-list">
            <div class="meal-info">
              <h2>{{ meal.strMeal }}</h2>
              <p>{{ reduceText(meal.strInstructions) }}...</p>
            </div>
            <img :src="`${meal.strMealThumb}`" alt="meal-photo" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import API from "../interface/randomAPI";

export default Vue.extend({
  name: "Meals",
  computed: {
    meals() {
      return this.$store.getters.meals;
    }
  },
  methods: {
    // Sending data of the meal clicked to its detail page + Update local storage
    resetLocalStorage() {
      localStorage.setItem(
        "mealStorage",
        JSON.stringify(this.$store.getters.mealById(this.$route.params.id))
      );
      location.reload();
    },
    // Formating the products' description to less than 25 characters
    reduceText(meal: string) {
      return meal
        .split(" ")
        .filter((word, index) => index < 25)
        .join(" ");
    },
    // Filtering from A to Z meals
    filterAZ() {
      this.meals = this.meals.sort((a: API, b: API) =>
        a.strMeal < b.strMeal ? -1 : 1
      );
    },
    // Filtering from Z to A meals
    filterZA() {
      this.meals = this.meals.sort((a: API, b: API) =>
        a.strMeal < b.strMeal ? 1 : -1
      );
    }
  }
});
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 700px;
  margin: 20px auto;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.8rem;
}

.btn {
  margin: 0 1rem;
}

.btn:focus {
  outline: 0;
}

a {
  text-decoration: none;
  list-style: none;
  color: inherit;
}

.meal-list {
  display: flex;
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;
  border: 2px solid beige;
  background-color: #eeeeeec6;
  height: 11rem;
  border-radius: 4px;
  transition: all 0.5s;
}

.meal-list:hover {
  transform: scale(1.04);
}

.meal-info {
  flex: 1;
  text-align: left;
  padding: 1.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
  padding-right: 2rem;
}

img {
  width: 30%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 700px) {
  .meal-list {
    position: relative;
    background-color: transparent;
    color: white;
    height: 13rem;
  }

  .meal-list::after {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    opacity: 0.5;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  h2 {
    font-size: 1.9rem;
  }

  p {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 450px) {
  .meal-list {
    height: 16rem;
  }
}
</style>
