<template>
  <div key="reRrenderKey">
    <Header />
    <div class="box">
      <div class="image">
        <img
          v-if="recipeInformation.image"
          :src="recipeInformation.image"
          alt="Image"
        />
        <img v-else src="../assets/defaultPicture2.jpg" alt="Image" />
      </div>
      <div class="recipeBody">
        <h1>{{ recipeInformation.title }}</h1>
        <div class="ingredients">
          <Ingredients :ingredients="ingredients" />
        </div>
        <div class="recipeInfo">
          <div class="readyInMinutes">
            <p>{{ recipeInformation.readyInMinutes }} minutes</p>
            <img src="../assets/clockIcon.png" alt="readyInMinutes" />
          </div>
          <div class="servings">
            <p>{{ recipeInformation.servings }}</p>
            <img src="../assets/servingsIcon.jpg" alt="servings" />
          </div>
        </div>
        <div class="recipePreparation">
          <h6>Preparation:</h6>
          <p>{{ instructions }}</p>
        </div>
      </div>
    </div>
    <SimilarRecipes :number="number" :recipeInformation="recipeInformation" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
import Ingredients from "./Ingredients.vue";
import SimilarRecipes from "./SimilarRecipes.vue";
export default {
  data() {
    return {
      recipeInformation: {},
      ingredients: [],
      number: this.$router.currentRoute.params.id,
      instructions: {},
    };
  },
  components: {
    Header,
    Ingredients,
    SimilarRecipes,
  },
  methods: {
    init() {
      console.log(this.$route.params.id);
    },
  },
  mounted() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${this.number}/information?apiKey=8da321c03d9f42f1b5144e226ced2cae`
      )
      .then((response) => {
        this.recipeInformation = response.data;
        console.log(this.recipeInformation);
        this.ingredients = response.data.extendedIngredients;
        // console.log(this.ingredients);
        this.instructions = response.data.instructions.replace(
          /<\/?[^>]+(>|$)/g,
          ""
        );
      });
  },
  watch: {},
};
</script>


<style scoped>
.box {
  width: 70%;
  min-height: 1200px;
  margin: 50px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.box h1 {
  width: 70%;
  font-size: 45px;
  color: var(--light-color);
  text-shadow: 5px 5px 5px #000;
  position: absolute;
  bottom: 55px;
  margin: 5px auto;
  text-align: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.image {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  position: relative;
}
.box .image img {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  width: 100%;
  height: 100%;
  filter: brightness(60%);
}
.ingredients {
  width: 100%;
  display: block;
  overflow: auto;
}
.recipePreparation {
  overflow: auto;
}
.recipeBody {
  padding-top: 20px;
  height: 700px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 150px auto;
  grid-template-areas:
    " i i i i i p p p p p p p "
    " i i i i i b b b b b b b ";
}
.ingredients {
  grid-area: i;
}
.recipeInfo {
  grid-area: p;
  /* height: 150px; */
  display: flex;
  justify-content: space-around;
}
.recipeInfo img {
  height: 50px;
  width: 50px;
}
.recipeInfo .readyInMinutes,
.recipeInfo .servings {
  display: inline-block;
}
.recipeInfo .readyInMinutes p,
.recipeInfo .servings p {
  text-align: center;
}
.recipeInfo .servings img {
  border-radius: 50%;
}
.recipePreparation {
  padding-right: 20px;
  grid-area: b;
}
</style>
