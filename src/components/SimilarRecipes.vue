<template>
  <div class="similarRecipes">
    <h1 class="display-4">Similar Recipes</h1>
    <!-- <ul class="card-deck">
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

            
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </li>
    </ul>  -->
    <div class="carousel-wrapper" ref="wrapper">
      <div
        class="carousel--nav__left"
        @click="moveCarousel(-1)"
        :disabled="atHeadOfList"
      ></div>
      <div class="carousel" :style="{ width: carouselWidth + 'px' }">
        <div
          class="carousel-items"
          :style="{
            transform: 'translateX' + '(' + currentOffset + 'px' + ')',
          }"
        >
          <div
            ref="card"
            class="carousel--card"
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

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="carousel--nav__right"
        @click="moveCarousel(1)"
        :disabled="atEndOfList"
      ></div>
    </div>
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
      info: [],
      currentOffset: 0,
      paginationFactor: 200,
      carouselWidth: 1000,
      numOfCards: 5,
    };
  },
  components: {
    // Recipe,
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor *
          -1 *
          (this.similarRecipes.length - this.numOfCards)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    // ...
    pageChangeHandler(selectedPage) {
      this.currentPage = selectedPage;
    },
    moveCarousel(direction) {
      this.setPagination();
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    setPagination() {
      this.paginationFactor = this.$refs.card[0].clientWidth + 30;
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
.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px auto;
}
.carousel {
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}
.carousel--overflow-container {
  overflow: hidden;
}
.carousel--nav__left,
.carousel--nav__right {
  display: inline-block;
  padding: 20px;
  border-top: 2px solid #f1f2f6;
  border-right: 2px solid #f1f2f6;
  cursor: pointer;
  margin: 0 20px;
}
.carousel--nav__left:disabled,
.carousel--nav__right:disabled {
  opacity: 0.25;
  cursor: auto;
}
.carousel--nav__left {
  transform: rotate(-135deg);
}
.carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.carousel--nav__right {
  transform: rotate(45deg);
}
.carousel--nav__right:active {
    transform: rotate(45deg) scale(0.9);
}
.carousel-items {
    display: flex;
    transition: transform 1000ms ease;
}
.carousel--card {
    cursor: pointer;
    margin: 0 15px
}
.carousel--card:first-child {
    margin-left: 0;
}
.carousel--card:last-child {
    margin-right: 0;
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