<template>
    <div class="bg-white shadow rounded-xl hover:scale-110 hover:mx-2 transition-all">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />
        </router-link>
        <div class="px-3">
            <h3 class="font-bold mb-4">{{ meal.strMeal }}</h3>
            <p class="mb-4" v-if="meal.strInstructions" >{{ meal.strInstructions.substring(0, 200) }}</p>
            <div class="mb-6">
                <YoutubeButton :herf="meal.strYoutube"> Youtube </YoutubeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const props = defineProps({
    meal: Object
})

</script>