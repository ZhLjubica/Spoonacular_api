import Home from './components/Home.vue';
import Recipes from './components/Recipes.vue';
import RecipeInfo from './components/RecipeInfo.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/recipes', component: Recipes},
    { path: '/recipes/:id', component: RecipeInfo}
]