<template>
  <div class="container">
    <p>Made by Théo Gilardo</p>
    <router-link class="footer__link" to="/">Home</router-link>
    <router-link class="footer__link" to="/categories">Categories</router-link>
    <router-link class="footer__link" to="/random-meal">Random Meal</router-link>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.container {
  height: 3.5rem;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__link {
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
  margin-right: 1.5rem;
}

@media only screen and (max-width: 700px) {
  .footer__link {
    font-size: 1rem;
  }
}

p {
  font-size: 1.2rem;
  color: white;
  margin-right: auto;
  padding-left: 1.2rem;
}
</style>
