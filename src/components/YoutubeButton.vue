<template>
    <a :href="href"
        class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600 bg-red-500 text-white transition-colors">
        <slot />
    </a>
</template>

<script setup>

const props = defineProps({
    href: String
})

</script>