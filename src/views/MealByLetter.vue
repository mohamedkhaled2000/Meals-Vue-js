<template >
    <div class="p-8">
        <div class="flex gap-2 justify-center mt-5">
            <router-link :to="{ name: 'byLatter', params: { letter } }" v-for="(letter,index) of letters" :key="index">
                {{ letter }}
            </router-link>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="meals.length == 0" class="text-center text-2xl">
      No Meals Found
    </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import store from "../store";

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

const meals = computed(() => store.state.mealsByLetter);

watch(route,() => {
    store.dispatch("setMealsByLetter", route.params.letter)
});
onMounted(() => {
    store.dispatch("setMealsByLetter", route.params.letter)
})


</script>
