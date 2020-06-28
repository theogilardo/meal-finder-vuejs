<template>
  <div>
    <div class="container">
      <div class="flex">
        <button class="btn" @click="filterAZ()">Sort A/Z</button>
        <button class="btn" @click="filterZA()">Sort Z/A</button>
      </div>
      <div v-bind:key="record.id" v-for="record in records">
        <router-link :to="{ name: 'meal', params: { id: record } }">
          <div class="meal-list">
            <div class="meal-info">
              <h2>{{ record.strMeal }}</h2>
              <p>
                {{`Recipe: ${record.strInstructions
                .split(' ')
                .filter((word, index) => index &lt; 25)
                .join(' ')}... ` }}
              </p>
            </div>
            <img :src="`${record.strMealThumb}`" alt="meal-photo" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import API from "../interface";

export default Vue.extend({
  name: "Shopping",
  mounted() {
    this.fetch();
  },
  data() {
    return {
      records: [] as API[],
    };
  },
  methods: {
    filterAZ() {
      this.records = this.records.sort((a: API, b: API) =>
        a.strMeal < b.strMeal ? -1 : 1
      );
    },
    filterZA() {
      this.records = this.records.sort((a: API, b: API) =>
        a.strMeal < b.strMeal ? 1 : -1
      );
    },
    fetch() {
      for (let i = 0; i < 10; i++) {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log(typeof data);
            this.records.push(data.meals[0]);
          });
      }
    },
  },
});
</script>

<style scoped>
.container {
  width: 80%;
  max-width: 700px;
  margin: 20px auto;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.8rem;
}

.btn {
  margin: 0 1rem;
}

.btn:focus {
  outline: 0;
}

a {
  text-decoration: none;
  list-style: none;
  color: inherit;
}

.meal-list {
  display: flex;
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;
  border: 2px solid beige;
  background-color: #eeeeeec6;
  height: 10rem;
  border-radius: 4px;
  transition: all 0.5s;
}

.meal-list:hover {
  transform: scale(1.04);
}

.meal-info {
  text-align: left;
  padding: 1.5rem;
}

h2 {
  font-size: 1.8rem;
}

p {
  font-size: 1rem;
  padding-right: 8rem;
}

img {
  width: 30%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 700px) {
  .meal-list {
    height: 10rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.7rem;
    padding-right: 4rem;
  }
}

@media only screen and (max-width: 450px) {
  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.5rem;
  }
}
</style>
