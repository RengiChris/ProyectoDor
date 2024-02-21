<script setup>
  import PostDiv from './posts/PostDiv.vue'
  import Post from './posts/Post.vue';
  import Filter from './posts/widgets/Filter.vue';
  import Widget from './posts/widgets/Widget.vue';
  import Calendar from './posts/widgets/Calendar.vue';
  import {posts, tags, prioridades} from './../assets/js/posts.js';

  const login = true;
  if(!login) {
    window.location.assign('#/login');
  }
  let tag_list = tags();
  let lista_prioridades = prioridades();
  lista_prioridades.push('Todos');

</script>

<template>
   <div class="home container-fluid">
    <div class="row">
      <!-- Left side -->
      <div id="left_bar" class="col col-sm-3"></div>
      <!-- Center -->
      <div id="posts" class="col col-sm-5">
        <PostDiv />
        <Filter :filtrado="lista_prioridades"/>
        <Filter :filtrado="tag_list"/>
        <div v-for="post in posts">
          <Post 
            :event="post"
            />
        </div>
      </div>
      <!-- Right side -->
      <div class="col col-sm-3">
        <Widget 
          :title="'Eventos'"
          :desc="'¿Buscas eventos?'"
          :type="'relacionados'"
          :button_desc="'Encontrar más eventos'"
          :button_url="'https://localhost:5173/#/'"
         />
         <Widget 
          :title="'Trends'"
          :desc="'Lo más popular'"
          :list="tags()"
          :type="'tendencias'"
         />

         <Calendar 
         :title="'Eventos Próximos'"
         :desc="''" 
         />
      </div>
    </div>
   </div>
</template>

<style scoped>
  .home {
    background:#f7f7f7;
  }
</style>
