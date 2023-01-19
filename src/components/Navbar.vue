<template>
    <header class="bg-white shadow h-16 flex justify-between item-center">
        <router-link :to="{ name: 'home' }" class="inline-flex items-center px-5 h-full">Home</router-link>
        <div>
            <router-link :to="{ name: 'byName' }"
                class="inline-flex items-center transition-colors px-2 h-full hover:bg-orange-600 hover:text-white">Search For
                Meals</router-link>
            <router-link :to="{ name: 'byLatter' }"
                class="inline-flex items-center transition-colors px-2 h-full hover:bg-orange-600 hover:text-white">Search By
                Letter</router-link>
            <router-link :to="{ name: 'ingredient' }"
                class="inline-flex items-center transition-colors px-2 h-full hover:bg-orange-600 hover:text-white">Search By
                Ingredients</router-link>
        </div>
    </header>
</template>

<script setup></script>