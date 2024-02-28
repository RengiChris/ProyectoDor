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