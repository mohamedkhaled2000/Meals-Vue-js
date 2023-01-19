<template >

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of ingredients" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="ingredients.length == 0" class="text-center text-2xl">
      No Meals Found
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";


const route = useRoute();
const ingredients = computed(() => store.state.mealsByIngredent);


onMounted(() => {
    store.dispatch('setMealsByIngredent',route.params.ingredient);
})

</script>
<style >
    
</style>