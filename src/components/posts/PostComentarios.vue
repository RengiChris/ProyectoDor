<script setup>
  import { ref } from 'vue';
  import router from './../../router.js'
  import Comentario from './comentarios/Comentario.vue';
  import posts from '../../assets/js/posts.js';
  import ChatInput from './comentarios/ChatInput.vue';
  import { getDiff } from './helpers/getdiff.js';
  import { share } from './helpers/share.js';

  const id = router.currentRoute._value.params.id;
  let post = posts[id];

  let refs = {
    likes: ref(post.likes),
    voted: ref(false),
  }

  const comentarios = ref(post.comments)
  const increaseLike = () => {
    let boton = document.getElementById("boton_like_" + post.id);
    if (!refs.voted.value) {
      post.likes++;
      let show_likes = document.getElementById("likes_" + post.id);
      show_likes.innerHTML = post.likes;
      boton.classList.add('liked');
      refs.voted.value = true;
    } else {
      post.likes--;
      let show_likes = document.getElementById("likes_" + post.id);
      show_likes.innerHTML = post.likes;
      boton.classList.remove('liked');
      refs.voted.value = false;
    }
  }
</script>
<template>
  <div class="row justify-content-lg-center">
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  ">
      <a id="back" href="/">
        <iconify-icon icon="ep:back"></iconify-icon>
        Publicaciones
      </a>
      <div class="post card flex-md-column box-shadow h-md-250  m-0 mt-xl-5 mb-xl-4 mt-xl-5 mt-lg-5  border-0" v-bind:data-category="post.tag">
        <img id="img_post" class="card-img-right flex-auto d-md-block" :src="post.thumb" alt="Thumbnail [200x250]"
          style="max-height: 650px; object-fit:scale-down; object-position:left;"
          data-holder-rendered="true">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="tag d-inline-block mb-2 text-primary">{{ post.tag }}</strong>
          <h3 class="mb-0">
            <a class="text-dark" href="#">{{ post.title }}</a>
          </h3>
          <div class="mb-1 text-muted">{{ getDiff(post.date) }}</div>
          <div class="mb-1 text-muted d-flex">
            <button :id="'boton_like_' + post.id" @click="(e) => increaseLike(e)">
              <iconify-icon icon="mdi:like"></iconify-icon> <b :id="'likes_' + post.id">{{ refs.likes }}</b>
            </button>
            <button >
              <iconify-icon icon="icon-park-outline:comments"></iconify-icon> {{ post.comments.length }}
            </button>
            <button @click="() => share(post)">
              <iconify-icon icon="ic:baseline-share"></iconify-icon>
            </button>
          </div>
          <pre class="desc">{{ post.desc }}</pre>
          <div id="comentarios">
            <Comentario v-for="comentario in comentarios" :comment="comentario" />
          </div>
          <ChatInput :post="post" />
        </div>
      </div>
    </div>
  
  </div>
</template>
<style scoped lang="scss">
  @import './../../sass/imports/variables.scss';
  .row {
    background:#f3f3f3;
    height:100%;
    min-height:100vh;
  }

  #back {
    font-size: 1.5rem;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top:20px;
    position: absolute; 
    color:#fff;
    background:#f3f3f3;
    color:black;
    left: 10px;
    top: 0px;
    z-index:99;
    text-decoration:none;
    font-size:1.4rem;
  }

  #back  svg {
    font-size:2rem;
    margin-right:20px;
  }
  .post {
    overflow: hidden;
    a {
      text-decoration: none;
    }
    .tag {
      text-transform: uppercase;
    }
    .avatar {
      width: 50px;
      height: 50px;
    }
    .desc {
      font-family: 'Poppins';
      width: 100%;
      padding: 0;
      margin: 0;
      padding-left: 5px;
      white-space: pre-line;
    }
    .desc h1 {
      font-weight: bolder;
      font-size: 3rem;
    }

    button {
      background: none;
      border: none;
      margin: 10px 10px 10px 0px;
      padding: 8px 20px;
      display: flex;
      font-size: 1.1rem;
      align-items: center;
      flex-direction: row;
      border-bottom: 1px solid rgb(206, 206, 206);
    }

    button svg {
      margin-right: 5px;
    }

    button:hover {
      opacity: .7;
    }

    #comentarios {
      width: 100%;
      height:fit-content;
      overflow-y: scroll;
      transition: all .4s ease-in-out;
      margin:10px 0px;
    }

    #comentarios::-webkit-scrollbar {
      display: none;
    }
    .liked {
      background: $highlight;
      color: white;
    }

  }

  @media screen and (max-width: 1000px) {
    #back {
      background:transparent;
      color:#fff;
      width:100%;
    }
    .row {
      justify-content:flex-start !important;
      width:100%;
      --bs-gutter-x: 0 !important;
    }

    .col-lg-6 {
      width:100%;
    }
    .row .card {
      width:100%;
      min-height:100%;
    }
    .row .card .d-none {
      display: block !important;
    }
  }
</style>