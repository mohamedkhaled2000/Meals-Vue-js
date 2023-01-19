import { createRouter ,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import MealByName from '../views/MealByName.vue';
import MealByLetter from '../views/MealByLetter.vue';
import MealDetails from '../views/MealDetails.vue';
import MealByIngredient from '../views/MealByIngredient.vue';
import Ingredient from '../views/Ingredient.vue';
import DefultLayout from '../components/DefultLayout.vue';
const routes = [
    {
        path: '/',
        component: DefultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealByName,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLatter',
                component: MealByLetter,
            },
            {
                path: '/ingredient',
                name: 'ingredient',
                component: Ingredient,
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealByIngredient,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;