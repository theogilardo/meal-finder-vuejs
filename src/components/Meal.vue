<template>
  <div class="container">
    <div>
      <img class="container__img" :src="details.strMealThumb" alt />
      <div class="container__info">
        <h1>{{ details.strMeal }}</h1>
        <h3>Recipe</h3>
        <p>{{ details.strInstructions }}</p>
      </div>
    </div>
    <button class="btn" @click="setShow()">View Ingredients</button>
    <div class="ingredients" v-if="show">
      <ul v-bind:key="ingredient.id" v-for="ingredient in ingredients">
        <li class="ingredient" v-html="ingredient"></li>
      </ul>
    </div>
    <div v-if="dataAvailable">
      <h3>Recommended Recipes</h3>
      <div class="recommendations">
        <div v-bind:key="record.id" v-for="record in records" class="recommendation">
          <h4>{{ record.strMeal }}</h4>
          <img class="recommendation__img" :src="record.strMealThumb" alt="photo" />
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
    this.formatIngredients();
  },
  data() {
    return {
      details: this.$route.params.id,
      ingredients: [],
      records: [],
      show: false,
      dataAvailable: false
    };
  },
  methods: {
    setShow() {
      this.show = !this.show;
    },
    formatIngredients() {
      for (let i = 1; i <= 20; i++) {
        if (this.details[`strIngredient${i}`]) {
          this.ingredients.push(
            `<strong> ${this.details[`strIngredient${i}`]} </strong> <br> ${
              this.details[`strMeasure${i}`]
            }`
          );
        } else {
          break;
        }
      }
    },
    fetchCategory() {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.details.strCategory}`
      )
        .then(response => response.json())
        .then(data => {
          if (data.meals) {
            data.meals.forEach((meal, index) => {
              if (index < 3) {
                this.records.push(meal);
              }
            });
            this.dataAvailable = true;
          }
        });
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
  margin: 5rem;
  color: white;
  border: 4px solid white;
}

.ingredients {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 4rem;
}

.ingredient {
  list-style: none;
  text-align: center;
  color: white;
  background-image: linear-gradient(to right bottom, #8360c3, #2ebf91);
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
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

@media only screen and (max-width: 700px) {
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

  .ingredients {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .ingredient {
    padding: 1rem;
    font-size: 1.4rem;
    margin: 1rem 2rem;
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
  h1 {
    padding: 0;
  }

  p {
    font-size: 1.35rem;
    padding: 0;
  }
}
</style>
