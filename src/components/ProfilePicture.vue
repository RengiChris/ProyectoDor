<script setup>
const props = defineProps({
    source: String
})
</script>

<template>
<img class="profilePic" :src="source" alt="Imágen de perfil">
</template>
<style scoped lang="scss">
@import "../style.scss";
.profilePic{
    background-color: $grisHover;
    padding: 0.5rem;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
}
@media screen and (width >= 576px){
.profilePic{
width: 18rem;
height: 18rem;
}
}
</style>