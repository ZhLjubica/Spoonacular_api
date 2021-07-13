<template>
  <div class="card" style="width: 18rem">
    <img
      v-if="recipe.image"
      class="card-img-top"
      :src="recipe.image"
      alt="Card image cap"
    />
    <img v-else src="../assets/defaultPicture2.jpg" class="card-img-top" />
    <div class="card-body">
      <router-link class="h3" :to="'/recipes/' + recipe.id">{{
        recipe.title
      }}</router-link>
      <!-- <p>{{ recipe.id }}</p> -->
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <!-- <router-link class="btn" :to="'/recipes/' + recipe.id">Go somewhere</router-link> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  props: ["recipe"],

  data() {
    return {
      recipeInformation: {},
      number: this.$router.currentRoute.params.id,
    };
  },
  methods: {
   
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
  background-color: var(--light-color);
}
.card img {
  padding: 10px;
  border-radius: 20px;
}
/* .card-body a {
  color: #000;
  text-decoration: none;
  border: none;
  outline: none;
} */
.card-body a:hover,
.card-body a:active,
.card-body a:visited {
  text-decoration: none !important;
  border: none;
  outline: none;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card-body a {
  font-size: 24px;
  font-weight: bold;
  color: var(--dark-color);
}
.card-body a:hover {
  color: var(--middle-color) ;
}
.card img {
  height: 43%;
}
</style>