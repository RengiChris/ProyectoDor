<script setup>
    import Post from "../../components/Post.vue";
    import ProfilePicture from "../../components/ProfilePicture.vue";
    import { posts } from '../../assets/posts';
    const postsActuales = posts;
    import DefaultButton from "../../components/DefaultButton.vue";
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
          <span class="badge d-flex align-items-center text-verdeApp bg-secondary border border-verdeApp rounded-pill letraBadge">Tienda de Informática</span>
          <div id="editDiv">
            <router-link to="/edit_form"><DefaultButton value="Editar"/></router-link>
          </div>
          
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
<style scoped>
    @import "./style.css";
</style>