<template>
  <div class="p-8">
    <input
      type="text"
      class="rounded border-gray-500 w-full"
      placeholder="Search Meals..."
      v-model="keyword"
      @keyup="searchMeal"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
    <div v-if="meals.length == 0" class="text-center text-2xl">
      No Meals Found
    </div>
  <!-- <pre>{{ meals }}</pre> -->
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import store from "../store/index.js";

const keyword = ref("");

const meals = computed(() => store.state.setSearchMeals);

const route = useRoute();

function searchMeal() {
  if(keyword.value){
    store.dispatch("searchMeals", keyword.value);
  }else{
    store.commit('setSearchMeals',[]);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeal();
  }
});
</script>
<style></style>
