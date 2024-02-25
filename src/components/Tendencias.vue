<script setup>
  import { router } from './../router.js';
  import { postsPerTendencia } from './../assets/js/posts.js';
  import Post from './posts/Post.vue';
  import CrearPost from './posts/CrearPost.vue';
  const tendencia = router.currentRoute._value.params.tendencia;
  const posts = postsPerTendencia(tendencia);
</script>
<template>
  <div class="home container-fluid">
    <div class="row">
      <div id="left_bar" class="col col-sm-3"></div>
      <div id="posts" class="col col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-6">
        <a id="back" href="/"><iconify-icon icon="ep:back"></iconify-icon></a>
        <h3 class="alert">Estás viendo el feed de {{ tendencia }}</h3>
        <CrearPost v-if="posts.length >= 1" />
        <div v-for="post in posts" v-if="posts.length >= 1">
          <Post :post="post" />
        </div>
        <div v-else>
          <h6 class="alert">No se ha encontrado el contenido que buscas</h6>
        </div>
      </div>
      <div class="col col-sm-3"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import './src/sass/imports/variables', './src/sass/imports/mixins';

  #back {
    @include row_center();
    background: #f3f3f3;
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 30px;
    left: 10px;
    top: 80px;
    color: black;
    text-decoration: none;
  }

  .alert {
    padding: 0;
    padding-left: 20px;
    margin-top: 30px;
  }
  
</style>