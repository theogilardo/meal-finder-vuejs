<template>
  <div>
    <div class="vh"></div>
    <div class="container">
      <h2>{{ meals.strMeal }}</h2>
      <img :src="meals.strMealThumb" alt />
    </div>
    <button class="btn" @click="fetch()">Randomize</button>
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
    };
  },
  methods: {
    fetch() {
      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((data) => {
          this.meals = data.meals[0];
        });
    },
  },
};
</script>

<style scoped>
.vh {
  height: 100vh;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background-color: #eeeeeec6;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 700px) {
  .container {
    width: 60%;
    height: 35%;
  }

  h2 {
    font-size: 1.5rem;
    padding: 3.5rem;
  }

  button {
    top: 73%;
  }
}

@media only screen and (max-width: 450px) {
  .container {
    width: 60%;
    height: 30%;
  }
}

.container div {
  position: relative;
  width: 100%;
  height: 100%;
}

h2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3333334c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

button {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
}

@media only screen and (max-width: 400px) {
  button {
    top: 70%;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
}
</style>
