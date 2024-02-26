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
<style scoped lang="scss">
@import "../style.scss";
nav{
  @include flex-wFh7;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  border-bottom: solid 1px #E9ECEF;
  padding: 0.5rem;
}
nav img{
  width: 6rem;
  max-height: 90%;
  padding-left: 1rem;
}
.botones{
  @include flex-wFh7;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  bottom: -0.1%;
  left: 0;
  z-index: 10;
  background-color: $primary;
}
.home{
  @include padding-margin-br100;
  width: 3.5rem;
  position: relative;
  left: 0.75rem;
}
.home:hover{
  cursor: pointer;
  background-color: $secondary;
}
.left{
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
.left>img{
    padding: 0;
    margin: 0;
  }
.left>a{
  text-decoration: none;
  color: black;
}
.left>*{
  margin: 0.5rem;
}
@media screen and (width >= 576px){
  .botones{
    position: static;
    width: auto;
    padding-right: 1rem;
    max-height: 100%
  }
  nav{
    justify-content: space-between;
  }
  .left{
    width: auto;
  }
}
</style>