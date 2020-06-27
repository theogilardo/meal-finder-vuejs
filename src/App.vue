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
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
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
  background-color: white;
  color: #333;
  border: none;
  background-image: linear-gradient(to right bottom, #8360c3cc, #2ebf91cc);
  -webkit-background-clip: text;
  color: transparent;
  border-radius: 4px;
  text-transform: uppercase;
  border: 4px solid transparent;
  border-image: linear-gradient(to right bottom, #8360c3cc, #2ebf91cc);
  border-image-slice: 1;
  transition: all 0.5s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn:focus {
  outline: 0;
}
</style>
