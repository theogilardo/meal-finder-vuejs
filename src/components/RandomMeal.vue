
<template>
  <div class="container">
    <div>
      <button class="btn-randomize" @click="fetch()">Randomize</button>
      <img class="container__img" :src="meals.strMealThumb" alt />
      <div class="container__info">
        <h1>{{ meals.strMeal }}</h1>
        <h3>Recipe</h3>
        <p>{{ meals.strInstructions }}</p>
      </div>
      <button class="btn" @click="setShow()">View Ingredients</button>
    </div>
    <div v-if="show">
      <ul>
        <li v-bind:key="ingredient.id" v-for="ingredient in ingredients" v-html="ingredient"></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "RandomMeal",
  mounted() {
    this.fetchRandomMeal();
  },
  data() {
    return {
      meals: "",
      ingredients: [],
      records: [],
      show: false
    };
  },
  methods: {
    setShow() {
      this.show = !this.show;
    },
    formatIngredients() {
      for (let i = 1; i <= 20; i++) {
        if (this.meals[`strIngredient${i}`]) {
          this.ingredients.push(
            `${this.meals[`strIngredient${i}`]} <strong>  ${
              this.meals[`strMeasure${i}`]
            }</strong> `
          );
        } else {
          break;
        }
      }
    },
    async fetchRandomMeal() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      this.meals = data.meals[0];
      this.ingredients = [];
      this.formatIngredients();
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  height: 80%;
  min-height: 100%;
  width: 80%;
  margin: 1.5rem auto 5rem auto;
  padding: 7rem 4rem 4rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #33333366;
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
  padding: 0 2rem 0.5rem 0;
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
}

li {
  list-style: none;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(200, 197, 197, 0.589);
}

.btn-randomize {
  position: absolute;
  top: 12px;
  right: 1.5%;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  font-weight: 700;
  background-image: linear-gradient(to right bottom, #8360c3cc, #2ebf91cc);
  color: white;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
}

@media only screen and (max-width: 1250px) {
  ul {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 6rem;
  }
}

@media only screen and (max-width: 900px) {
  .btn-randomize {
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

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
    margin: 2rem 0;
    float: none;
    padding: 0;
  }

  ul {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
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

