<template>
  <div>
    <Header />
    <h1 class="display-3">Most popular recipes!</h1>
    <ul class="card-deck">
      <li v-for="recipe in recipes" :key="recipe.id">
        <router-link class="routerLink" to="/recipes/ + recipe.id">
          <Recipe :recipe="recipe" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
import Recipe from "./Recipe";

export default {
  data() {
    return {
      recipes: [],
      randomRecipe: "",
    };
  },
  components: {
    Recipe,
    Header,
  },
  mounted() {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=10&apiKey=8da321c03d9f42f1b5144e226ced2cae"
      )
      .then((response) => {
        console.log(response);
        this.recipes = response.data.recipes;
        this.randomRecipe = response;
        console.log(this.randomRecipe);
      })
      .catch((error) => console.log(error));
  },
};
</script>


<style scoped>
h1 {
  margin: 70px;
}
ul li {
  list-style-type: none;
}
.randomRecipe {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 50%;
  text-align: center;
  margin: 0 auto;
}
.display-3 {
  text-align: center;
  color: #e3afbc;
}
.card-deck {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>