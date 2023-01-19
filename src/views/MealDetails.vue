<template>
    <div class="max-w-[800px] mx-auto p-8">

        <h1 class="text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>

            <div>
                <strong class="font-bold">Tag:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div class="my-4">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3">
            <div>
                <h2 class="text-2xl font-bold mb-2">Ingredient</h2>
                <ul>
                    <template v-for="(i, index) of new Array(20)" :key="index">
                        <li v-if="meal[`strIngredient${index + 1}`]"> {{ index + 1 }} - {{
                    meal[`strIngredient${index +
                        1}`] }}</li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-bold mb-2">Measure</h2>
                <ul>
                    <template v-for="(i, index) of new Array(20)" :key="index">
                        <li v-if="meal[`strMeasure${index + 1}`] != ' ' && meal[`strMeasure${index + 1}`] != ''"> {{ index + 1 }} - {{
                    meal[`strMeasure${index +
                        1}`] }}</li>
                    </template>
                </ul>
            </div>
        </div>

        <div class="mt-4">
            <YoutubeButton :herf="meal.strYoutube"> Go To Youtube </YoutubeButton>
            <a :href="meal.strSource"
                class="ml-3 px-3 py-2 rounded hover:bg-indigo-600 hover:text-white text-indigo-600 transition-colors">
                View Original Source
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axoisClient from "../axoisClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();

const meal = ref({});

onMounted(() => {
    axoisClient.get(`lookup.php?i=${route.params.id}`)
        .then((data) => meal.value = data.data.meals[0] || {});
})
</script>