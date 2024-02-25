<script setup>
  import CrearPost from './posts/CrearPost.vue'
  import Post from './posts/Post.vue';
  import Filter from './posts/widgets/Filter.vue';
  import Calendar from './posts/widgets/Calendar.vue';
  import {posts, tags, prioridades, postsDates, postsPerDate} from './../assets/js/posts.js';
  import Hashtags from './posts/widgets/Hashtags.vue';

  let tag_list = tags();
  let lista_prioridades = prioridades();
  let postsDatesList = postsDates();

</script>

<template>
   <div class="home container-fluid">
    <div class="row">
      <div id="left_bar" class="col col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
        <Hashtags :title="'Trends'"  :desc="'Lo más popular'" :list="tags()" :type="'tendencias'" />
      </div>
      <div id="posts" class="col col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-6">
        <CrearPost />
        <Filter :filtrado="lista_prioridades" :text="'Feed por Prioridad'"/>
        <Filter :filtrado="tag_list" :text="'Feed por tus Gustos'"/>
        <div v-for="post in posts">
          <Post :post="post" />
        </div>
      </div>
      <div class="col col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
         <Calendar :title="'Eventos Próximos'" :posts="posts" :dates="postsDatesList" :post_per_date="postsPerDate" :desc="''" />
      </div>
    </div>
   </div>
</template>

<style scoped lang="scss">
  @import './src/sass/imports/variables', './src/sass/imports/mixins';
  .home {
    background: #F7F7F7;
  }
</style>
