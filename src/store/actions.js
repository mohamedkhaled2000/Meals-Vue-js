import axiosClient from '../axoisClient.js';

export function searchMeals({commit},keyword){
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchMeals',data.meals);
        });
}

export function setMealsByLetter({commit},letter){
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            commit('setMealsLetter',data.meals);
        });
}
export function setMealsByIngredent({commit},ingredent){
    axiosClient.get(`filter.php?i=${ingredent}`)
        .then(({data}) => {
            commit('mealsByIngredent',data.meals);
        });
}