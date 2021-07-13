<template>
  <div class="extendedIngredients">
    <h6>Ingredients:</h6>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.title">
        <p class="ingredientName">{{ ingredient.name }}</p>
        <p class="ingredientAmount">
          {{ ingredient.measures.metric.amount }}
          <span v-if="ingredient.measures.metric.unitShort">{{
            ingredient.measures.metric.unitShort
          }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["ingredients"],
};
</script>


<style scoped>
.extendedIngredients {
  width: 100%;
  margin-top: 10px;
  height: 670px;
  overflow: hidden;
  /* border: 1px solid red; */
}
.extendedIngredients h6 {
  color: var(--middle-color);
  margin-left: 5px;
  font-weight: bold;
}
.extendedIngredients ul {
  width: 100%;
  height: 100%;
  list-style: none;
}
.extendedIngredients ul li {
  display: flex;
  justify-content: space-around;
}
.extendedIngredients ul li .ingredientName,
.extendedIngredients ul li .ingredientAmount {
  display: inline-block;
  width: 47%;
}
.extendedIngredients ul li .ingredientAmount {
}
</style>