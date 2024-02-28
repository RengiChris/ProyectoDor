<script setup>

import ProfilePicture from './ProfilePicture.vue';
import  Post from './Post.vue';
import { posts } from '../assets/posts';
import router from '../router';
const postsActuales = posts;

const redirect = () => {
    router.push('/perfil/contenido');
}
</script>

<template>

  <div class="d-flex flex-column justify-content-center align-items-center">
    <section class="profileData mt-3 d-flex w-100 flex-column flex-md-row justify-content-center align-items-center">
      <ProfilePicture source="/perfil.webp"/>
      <article class="card profile">
        <section class="card-body">
          <p class="titulo"><span class="negrita">Última Informática</span></p>
          <p class="desc">Empresa de asesoramiento en montaje de equipos informáticos a medida y venta de periféricos, ¡Te garantizamos el mejor precio de canarias!</p>
          <p><span class="negrita">Email: </span>info@ultima_informatica.com</p>
          <p><span class="negrita">Teléfono: </span>922876765</p>
          <p><span class="negrita">Dirección: </span>C/ Carlos Francisco Lorenzo Navarro, 23, 38760, Los Llanos de Aridane</p>
          <span class="badge d-flex align-items-center text-verdeApp bg-primary border border-verdeApp rounded-pill letraBadge">Tienda de Informática</span>
          <button class="btn btn-primary mt-2 bg-success border-0" @click="redirect()">Cambiar a vista comercio logueado</button>
        </section>
      </article>
    </section>
    <section class="posts">
      <h3>Publicaciones</h3>
      <div class="container">
        <div class="row tarjetas">
          <Post v-for="(valor, clave) in postsActuales" :title="valor.title" :image="valor.image" :desc="valor.desc" :type="valor.type" :tags="valor.tags" :time="valor.time"/>  
        </div> 
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import './src/sass/imports/variables';

body *{
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}
body{
  background-color: $secondary;
}

.badge{
  width: fit-content;
}
.letraBadge{
  font-size: 0.85em;
  padding: 0.5rem;
}
.card{
  margin-top: 1.5rem;
  min-width: 24rem;
}
.posts{
  width: 95%;
  margin-bottom: 9vh;
}

h3{
  margin-bottom: -0.5rem;
}

article{
  margin-bottom: 1.5rem;
}
.negrita{
  font-weight: 600;
  font-size: 1.1em;
}
.desc{
  color: #000000b0;
  font-size: 0.9em;
}
.titulo{
  font-size: 1.5em;
  margin-bottom: 0.5rem !important;
}
.tarjetas{
  display: flex;
  justify-content: center;
}
.profile{
  max-width: 95vw;
}
@media screen and (width >= 576px){
.card{
margin-top: 0;
margin-left: 1.5rem;
}
h3{
margin-bottom: 2rem;
}
.desc{
width: 90%;
}
.posts{
width: 90%;
}
.profileData{
    align-items: center;
    margin-top: 3rem !important;
    margin-bottom: 2.5rem !important;
}
.profile{
    width: 50vw;
}
.container{
max-width: 90vw !important;
}
.tarjetas{
justify-content: start;
}
}
</style>