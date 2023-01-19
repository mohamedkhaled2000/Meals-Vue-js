<template >

    <h1 class="text-3xl font-bold p-8 pb-0">Rondom Meals</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axoisClient from "../axoisClient.js";
import MealItem from "../components/MealItem.vue";

const meals = ref({});


onMounted(async () => {
  await axoisClient.get('random.php')
    .then((data) => meals.value = data.data.meals);
  
});

</script>
