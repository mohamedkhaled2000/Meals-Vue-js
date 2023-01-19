<template >
    <div class="p-8">
        
        <input
            type="text"
            class="rounded border-gray-500 w-full mb-3"
            placeholder="Search Ingredients..."
            v-model="keyword"
            />
        <h1 class="text-4xl font-bold mb-5">Ingredients</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <router-link  v-for="(ingredient,index) of computedIngredient" :key="index" :to="{name: 'byIngredient',params: {ingredient: ingredient.strIngredient } }" >
                <div class="bg-white shadow p-3 mb-3 ">
                    <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import axoisClient from "../axoisClient";



const ingredients = ref([]);
const keyword = ref('');

const computedIngredient = computed(() => {
    if(!computedIngredient) return ingredients;
    return ingredients.value.filter((i) => 
         i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    )
})

onMounted(() => {
    axoisClient.get('list.php?i=list')
        .then((data) => {
            ingredients.value = data.data.meals
        })
})

</script>
<style >
    
</style>