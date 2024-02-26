<script setup>
const props = defineProps({
    class: String,
    imagen: Boolean
});
</script>
<template>
    <img v-if="imagen" :class="class" src="/usuario.webp" alt="Imagen de usuario">
    <svg v-if="!imagen" :class="class" viewBox="0 0 24 24"><path fill="#48B89F" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
</template>
<style scoped lang="scss">
@import "../../style.scss";
.icon{
  width: 3rem;
  padding: 0.5rem;
  background-color: $tertiary;
  border-radius: 100%;
  margin: 0 0.5rem
}
img.icon{
  height: 3rem !important;
  padding: 0.25rem;
  margin: 0 !important;
}
.icon:hover{
  cursor: pointer;
  background-color: $grisHover;
}
</style>