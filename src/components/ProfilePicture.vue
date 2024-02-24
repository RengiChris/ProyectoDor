<script setup>
const props = defineProps({
    source: String
})
</script>
<template>
<img class="profilePic" :src="source" alt="Imágen de perfil">
</template>