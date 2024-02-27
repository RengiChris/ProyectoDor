<script setup>
  import { ref, provide } from 'vue';
  import router from './../../router.js';
  import TinyFloat from './modals/components/TinyFloat.vue';

  import { getDiff } from './helpers/getdiff.js';
  import { share } from './helpers/share.js';

  const props = defineProps({
    post: Object
  });

  const post = props.post;
  const refs = {
    modalButton: ref(null),
    modalTargetStatus: ref(false),
    likes: ref(props.post.likes),
    voted: ref(false)
  };


  let status = false;
  const handleModal = () => {
    if (!status) {
      refs.modalTargetStatus.value = true;
      status = true;
    } else {
      status = false;
      refs.modalTargetStatus.value = false;
    }
  }

  const increaseLike = (post) => {
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

  const redirect = (id) => {
    router.push(`/post/${id}`);
  }
</script>
<template>
  <div class="post card flex-md-column mb-4 h-md-250" v-bind:data-category="post.tag + ' ' + post.prioridad">
    <div class="post-header d-flex flex-md-row ">
      <div class="column">
        <img class="avatar" :src="props.post.avatar">
        <div class="texts">
          <p>{{ post.username }}</p>
          <small><iconify-icon icon="bi:dot"></iconify-icon> {{ getDiff(post.date) }}</small>
        </div>

      </div>
      <div class="tiny-column">
        <button :ref="refs.modalButton" @click="() => handleModal()" data-status="false">
          <iconify-icon icon="mingcute:more-2-fill"></iconify-icon>
        </button>
        <Tiny-Float :status="refs.modalTargetStatus" :type="post.type" />
      </div>
    </div>
    <img @click="redirect(post.id)" class="card-img-right flex-auto" :src="post.thumb" alt="Thumbnail [200x250]"
      loading="lazy" style="max-height: 650px; object-fit:scale-down; object-position:left;" data-holder-rendered="true">
    <div class="card-body d-flex flex-column align-items-start">
      <div class="banner d-flex w-100 justify-content-between">
        <strong class="tag d-inline-block mb-2 text-primary">{{ post.tag }}</strong>
        <strong class="prioridad d-inline-block mb-2 text-primary ">
          <p class="priority-icon" v-if="post.prioridad == 'seguidos'">
            <iconify-icon icon="ri:user-follow-line"></iconify-icon>
            Siguiendo
          </p>
          <p class="priority-icon" v-if="post.prioridad == 'recomendados'">
            ¡Recomendado!
            <iconify-icon icon="material-symbols-light:recommend"></iconify-icon>
          </p>
        </strong>
      </div>
      <h3 class="mb-0">
        <a class="text-dark" @click="redirect(post.id)">{{ post.title }}</a>
      </h3>
      <div class="mb-1 text-muted"></div>
      <div class="mb-1 text-muted d-flex">
        <button :id="'boton_like_' + post.id" @click="() => increaseLike(props.post)">
          <iconify-icon icon="mdi:like"></iconify-icon> <b :id="'likes_' + post.id">{{ refs.likes }}</b>
        </button>
        <button @click="redirect(post.id)">
          <iconify-icon icon="icon-park-outline:comments"></iconify-icon> {{ props.post.comments.length }}
        </button>
        <button @click="() => share(props.post)">
          <iconify-icon icon="ic:baseline-share"></iconify-icon>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import './src/sass/imports/variables', './src/sass/imports/mixins';
  /*nested css*/
  .post {
    overflow: hidden;
    background: white;
    border-radius: 15px;
    padding: 10px 20px;
    margin: 10px 0px;
    border-bottom: 1px solid rgb(206, 206, 206);
    a {
      text-decoration: none;
    }
    h3 {
      color: $highlight !important;
    }

    .avatar {
      width: 60px;
      height: 60px;
      object-fit: scale-down;
      object-position: center;
    }

    .post-header {
      padding: 0px 0px 10px 0px;
      .tiny-column {
        width: 5%;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content !important;
          border: none;
          font-size: 1.8rem;
        }
      }
      .column {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .texts {
          margin: 0;
          width: 100%;
          p {
            margin-left: 10px;
            margin-bottom: 0px;
            font-size: .95rem;
            font-weight: bold;
            text-transform: lowercase;
          }
          small {
            font-size: .8rem;
            margin-left: 10px;
          }
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover !important;
        }
       
      }
    
    }

    /*nested*/
    button {
      background: none;
      border: none;
      margin: 10px 10px 10px 0px;
      padding: 8px 20px;
      display: flex;
      font-size: 1.1rem;
      align-items: center;
      flex-direction: row;
      width: 80px;
      svg {
        margin-right: 5px;
      }
    }

    #comentarios {
      width: 100%;
      max-height: 300px;
      overflow-y: scroll;
      opacity: 0;
      transition: all .4s ease-in-out;
    }

    

    .card-body {
      h3 {
        font-size: 1.1rem;
        cursor: pointer;
      }
      .liked {
        background: #80ED99 !important;
        color: white !important;
      }
    }
    .card-body 

    img {
      border-radius: 10px;
      object-fit: scale-down;
      cursor: pointer;
    }
    .banner {
      display: flex;
      align-items: center;

      .prioridad {
        color: $highlight !important;
        height: fit-content;
        padding: 0;
        font-size: 1.1rem !important;
        height: 20px;

        .priority-icon iconify-icon, .priority-icon svg {
          font-size: 1.5rem;
          display: flex;
        }
      }

      .prioridad .priority-icon {
        display: flex;
        font-size: .8rem;
      }

      

      button:hover {
        opacity: .7;
      }

      .tag {
        text-transform: uppercase;
        color: $highlight_dark !important;
      }
    }
  }

</style>