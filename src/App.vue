<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar
  },
  created() {
    this.init();
  },
  // Clears local storage once user leaves meal component
  watch: {
    $route(to, from) {
      localStorage.clear();
    }
  },
  // Retrieve data from store for the Meals and Categories component
  methods: {
    init() {
      this.$store.dispatch("fetchMeals");
      this.$store.dispatch("fetchCategories");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
}

body {
  background-image: url("assets/cooking.jpg");
  object-fit: cover;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: -5;
}

body::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  opacity: 0.25;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* 1 rem = 10px; 10px/16px = 62.5% */
  font-size: 62.5%;
}

@media only screen and (max-width: 700px) {
  .container {
    font-size: 55%;
  }
}

.btn {
  padding: 1rem 2rem;
  font-weight: 700;
  background-image: linear-gradient(to right bottom, #8360c3cc, #2ebf91cc);
  background-clip: text;
  color: transparent;
  border-radius: 4px;
  text-transform: uppercase;
  border: 4px solid transparent;
  border-image: linear-gradient(to right bottom, #8360c3cc, #2ebf91cc);
  border-image-slice: 1;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
}

.btn:hover {
  transform: translateY(-2px);
}

button,
.btn:focus {
  outline: 0;
}
</style>
