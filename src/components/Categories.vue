<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div v-bind:key="category.id" v-for="category in categories">
          <p>{{ category.strCategory }}</p>
          <img :src="category.strCategoryThumb" alt="photo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3.5rem;
}

.container {
  margin: 5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  height: 80%;
  width: 50rem;
}

@media only screen and (max-width: 700px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    height: 60%;
    width: 40rem;
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 450px) {
  .container {
    grid-template-columns: 1fr;
    height: 40%;
    width: 20rem;
    font-size: 1.4rem;
  }
}

.container div {
  position: relative;
  height: 18rem;
  width: 100%;
  transition: all 0.4s;
}

.container div:hover {
  transform: scale(1.03);
}

p {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3333333f;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
