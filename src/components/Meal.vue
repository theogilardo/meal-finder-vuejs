<template>
  <div>
    <div v-if="meal" class="container">
      <div>
        <img class="container__img" :src="meal.strMealThumb" alt />
        <div class="container__info">
          <h1>{{ meal.strMeal }}</h1>
          <h3>Recipe</h3>
          <p>{{ meal.strInstructions }}</p>
        </div>
      </div>
      <button class="btn" @click="setShow()">View Ingredients</button>
      <div v-if="show">
        <ul>
          <li v-bind:key="ingredient.id" v-for="ingredient in meal.ingredients" v-html="ingredient"></li>
        </ul>
      </div>
      <div v-if="dataAvailable">
        <h3>Recommended Recipes</h3>
        <div class="recommendations">
          <div
            v-bind:key="recommendedMeal.id"
            v-for="recommendedMeal in recommendedMeals"
            class="recommendation"
          >
            <h4>{{ recommendedMeal.strMeal }}</h4>
            <img class="recommendation__img" :src="recommendedMeal.strMealThumb" alt="photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meal",
  mounted() {
    this.fetchCategory();
  },
  data() {
    return {
      recommendedMeals: "",
      show: false,
      dataAvailable: false
    };
  },
  computed: {
    meal() {
      return JSON.parse(localStorage.getItem("mealStorage"));
    }
  },
  methods: {
    setShow() {
      this.show = !this.show;
    },
    fetchCategory() {
      if (this.meal) {
        fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.meal.strCategory}`
        )
          .then(response => response.json())
          .then(data => {
            if (data.meals) {
              this.recommendedMeals = data.meals.slice(0, 3);
              this.dataAvailable = true;
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 2.5rem auto;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #33333385;
  color: white;
  border-radius: 4px;
}

.container__info {
  text-align: left;
  margin-left: 7rem;
  align-self: flex-start;
  flex-direction: column;
  margin-left: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: "Permanent Marker", cursive;
}

h3 {
  font-size: 1.8rem;
  font-style: italic;
}

p {
  font-size: 1.6rem;
  padding-top: 1rem;
  text-align: justify;
}

.container__img {
  width: 50%;
  max-width: 40rem;
  float: left;
  padding: 0 2rem 2rem 0;
  border-radius: 4px;
  overflow: hidden;
}

.btn {
  margin: 3.5rem 0;
  color: white;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10rem;
  margin-bottom: 4rem;
}

li {
  list-style: none;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(200, 197, 197, 0.589);
}

.recommendations {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
}

.recommendation {
  position: relative;
  margin: 5px;
  width: 70%;
  height: 15rem;
}

.recommendation h4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  background-color: #33333310;
  border-radius: 4px;
}

.recommendation__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

@media only screen and (max-width: 1250px) {
  ul {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 6rem;
  }
}

@media only screen and (max-width: 900px) {
  .container {
    display: block;
    width: 90%;
  }

  .container__info {
    display: block;
  }

  .container__info {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3,
  p {
    text-align: center;
    padding: 1rem 2rem;
  }

  h1 {
    padding: 1rem 4rem;
    font-size: 2rem;
    text-align: center;
  }

  p {
    text-align: justify;
  }

  .container__img {
    margin-bottom: 2rem;
    float: none;
    padding: 0;
  }

  ul {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }

  .recommendations {
    flex-direction: column;
  }

  .recommendation {
    width: 70%;
    margin: 1rem;
  }
}

@media only screen and (max-width: 450px) {
  li {
    font-size: 1.5rem;
  }

  h1 {
    padding: 0;
  }
}
</style>
