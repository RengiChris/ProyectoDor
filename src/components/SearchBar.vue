<script setup>
import SearchIcon from './icons/SearchIcon.vue';
import { ref } from 'vue';

const buscando = ref(false);
const mostrarBuscador = (e)=>{
    if(buscando.value == false && e.target.nextSibling != null && screen.width > 430){
        buscando.value = true;
        e.target.classList.add("icon-active");
        e.target.nextSibling.classList.add("SearchBar-active");
        e.target.nextSibling.focus();
        e.target.nextSibling.addEventListener("focusout", ()=>{
            if(e.target.nextSibling.value.length == 0){
                buscando.value = false;
                e.target.nextSibling.classList.remove("SearchBar-active");
                e.target.classList.remove("icon-active");
                e.target.nextSibling.removeEventListener("focusout", ()=>{
                    if(e.target.nextSibling.value.length == 0){
                        mostrarBuscador(e);
                    }
                })
            }
        })
    }
}
</script>
<template>
    <div class="buscador">
        <SearchIcon @mouseup="mostrarBuscador" class="icon" />
        <input type="text" class="SearchBar">
    </div>
</template>
<style scoped lang="scss">
@import "../style.scss";
.buscador{
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
.SearchBar-active{
  height: 90% !important;
  border: 5px solid $secondary !important;
  background-color: white;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
  max-width: 250px !important;
  padding-left: 0.5rem;
  caret-color: $verdeTexto;
  margin-right: 0.5em !important;
  pointer-events: all !important;
}
.SearchBar{
  transition: max-width 0.5s ease-in-out;
  max-width: 0;
  height: 0;
  border: none;
  margin-right: -0.25rem;
  pointer-events: none;
}
.buscador>input:focus{
  outline: none;
  border: 5px solid $verdeTexto !important;
}
</style>
