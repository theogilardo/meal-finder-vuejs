<template>
  <div class="navbar">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/random-meal">Random Meal</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  font-size: 1.4rem;
  background-image: linear-gradient(to right bottom, #8360c3cc, #2ebf91cc);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.navbar > div > * {
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  font-weight: 700;
}
</style>
