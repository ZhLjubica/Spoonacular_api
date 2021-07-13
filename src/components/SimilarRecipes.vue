<template>
  <div class="similarRecipes">
    <h1 class="display-4">Similar Recipes</h1>
    <ul class="card-deck">
      <li
        v-for="similarRecipe in similarRecipes"
        :key="similarRecipe.sourceUrl"
      >
        <div class="card" style="width: 18rem">
          <img :src="info.image" alt="card image" />
          <div class="card-body">
            <router-link
              key="reRenderKey"
              class="h3"
              :to="'/recipes/' + similarRecipe.id"
              >{{ similarRecipe.title }}</router-link
            >

            <!-- <a class="h3" href="/recipes/${similarRecipe.id}">{{
              similarRecipe.title
            }}</a> -->
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// import Recipe from "./Recipe.vue";

export default {
  props: ["number", "recipeInformation"],
  data() {
    return {
      similarRecipes: [],
      info: []
    };
  },
  components: {
    // Recipe,
  },
  methods: {
    // ...
    pageChangeHandler(selectedPage) {
      this.currentPage = selectedPage;
    },
  },
  mounted() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${this.number}/similar?apiKey=8da321c03d9f42f1b5144e226ced2cae`
      )
      .then((response) => {
        this.similarRecipes = response.data;
        console.log(this.similarRecipes);
      })
      .catch((error) => console.log(error));
    axios
      .get(
        `https://api.spoonacular.com/recipes/1089652/information?apiKey=8da321c03d9f42f1b5144e226ced2cae`
      )
      .then((response) => {
        this.info = response.data;
        console.log(this.info);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.similarRecipes {
  width: 90%;
  margin: 0 auto;
  padding: 0;
}
.card-deck {
  width: 100%;
}
.display-4 {
  text-align: center;
  color: var(--dark-color);
  text-shadow: 5px 5px 5px #fff;
  margin-bottom: 40px;
}
.card-deck li {
  list-style-type: none;
}
.card {
  height: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-top-left-radius: 20px;
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: var(--light-color);
}
.card img {
  padding: 10px;
  border-radius: 20px;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card-body a {
  font-size: 20px;
  font-weight: bold;
  color: var(--dark-color);
}
</style>