<script setup>
    defineProps({
        "value":String
    })
</script>
<template>
    <button>{{ value }}</button>
</template>
<style scoped>
    button{
        border-radius: 5px;
        
    }
</style>