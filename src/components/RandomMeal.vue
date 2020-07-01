
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
    <div class="ingredients" v-if="show">
      <ul v-bind:key="ingredient.id" v-for="ingredient in ingredients">
        <li class="ingredient" v-html="ingredient"></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "RandomMeal",
  mounted() {
    this.fetch();
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

    fetch() {
      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
          this.meals = data.meals[0];
          this.ingredients = [];
          for (let i = 1; i <= 20; i++) {
            if (this.meals[`strIngredient${i}`]) {
              this.ingredients.push(
                `<strong> ${this.meals[`strIngredient${i}`]} </strong> <br> ${
                  this.meals[`strMeasure${i}`]
                }`
              );
            } else {
              break;
            }
          }
        });
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  min-height: 80%;
  width: 80%;
  margin: 1.5rem auto;
  padding: 4rem 4rem 0 4rem;
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
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  display: inherit;
}

h1 {
  font-size: 2.3rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.7rem;
  font-style: italic;
}

p {
  font-size: 1.3rem;
  padding: 1rem 7rem 1rem 0;
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
  margin: 3.5rem 0 3.5rem 0;
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

.btn-randomize {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  font-weight: 700;
  background-image: linear-gradient(to right bottom, #8360c3cc, #2ebf91cc);
  color: white;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
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
}
</style>

