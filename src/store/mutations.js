export function setSearchMeals(state,meals) {
    state.setSearchMeals = meals || [];
}
export function setMealsLetter(state,meals) {
    state.mealsByLetter = meals || [];
}
export function mealsByIngredent(state,meals) {
    state.mealsByIngredent = meals || [];
}