<script setup>
import { ref } from 'vue';
import UserIcon from './icons/userIcon.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import SearchBar from './SearchBar.vue';
import SettingsIcon from './icons/SettingsIcon.vue';
import HomeIcon from './icons/HomeIcon.vue';
const imagen = ref(true);
const mobile = ref(false);
window.addEventListener("load", ()=>{
    if(screen.width <= 430 && mobile.value == false){
        mobile.value = true;
    }
    if(screen.width > 430 && mobile.value == true){
        mobile.value = false;
    }
});
window.addEventListener("resize", ()=>{
    if(screen.width <= 430 && mobile.value == false){
        mobile.value = true;
    }
    if(screen.width > 430 && mobile.value == true){
        mobile.value = false;
    }
});
</script>
<template>
    <nav>
        <div class="left">
            <img src="/logoPocho.png" alt="Logo de la aplicacion" class="img-fluid">
            <a href="#" v-if="!mobile">Inicio</a>
            <a href="#" v-else ><HomeIcon class="home"/></a>
            <a href="#">Cerrar Sesión</a>
        </div>
        <div class="botones">
            <SearchBar />
            <UserIcon class="icon" :imagen="imagen" />
            <NotificationIcon class="icon" cantidad="2"/>
            <SettingsIcon class="icon" />
        </div>
    </nav>
</template>