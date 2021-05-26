<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="recipe.image" alt="Card image cap" />
    <div class="card-body">
      <h2>{{ recipe.title }}</h2>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a  @click="getRecipeByID()" class="btn">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["recipe"],

data(){
    return {
        recipeInformation: {},
        number: this.$router.currentRoute.params.id
    };
},
  methods: {
    getRecipeByID() {
      axios.get(`https://api.spoonacular.com/recipes/${this.number}/information&apiKey=8da321c03d9f42f1b5144e226ced2cae`)
      .then((response)=>{
          this.recipeInformation = response.data
          console.log(this.recipeInformation)
      });
    },
  },
};
</script>

<style scoped>
.card {
  height: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-top-left-radius: 20px;
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.card img {
  padding: 10px;
  border-radius: 20px;
}
.card-body a {
  position: absolute;
  bottom: 26px;
  right: 20px;
  background-color: #9a1750;
  color: #e3e2df;
  text-decoration: none;
  border: none;
  outline: none;
}
.card-body a:hover,
.card-body a:active,
.card-body a:visited {
  text-decoration: none !important;
  border: none;
  outline: none;
}
.card-body a:hover {
  color: #e3afbc;
}
</style>