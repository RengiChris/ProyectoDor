<script setup>
  import {ref} from 'vue';
import Comentario from './comentarios/Comentario.vue';
  const props = defineProps([
    'event',
  ]);
  const likes = ref(props.event.likes);
  let voted = ref(false);

  const increaseLike = () => {
    let boton = document.getElementById("boton_like_" + props.event.id);

    if(!voted.value) {
      props.event.likes++;
      let show_likes = document.getElementById("likes_" + props.event.id);
      show_likes.innerHTML = props.event.likes;
    
      boton.classList.add('liked');
      voted.value = true;
    } else {
      props.event.likes--;
      let show_likes = document.getElementById("likes_" + props.event.id);
      show_likes.innerHTML = props.event.likes;
      boton.classList.remove('liked');
      voted.value = false;
    }
  
  }

  let getDiff = (postDate) => {

    let post_date = new Date(`${postDate}`);
    let now = new Date();
    let diferencia =  now - post_date;

    let segundos = Math.floor(diferencia / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    let meses = Math.floor(dias / 30);
    let anios = Math.floor(meses / 12);

    meses = meses % 12;
    dias = dias % 30;
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    let resultado = "";
    switch(resultado == "") {
      case anios > 0:
            resultado += `${anios} año${anios > 1 ? 's' : ''} `;
            break;
        case meses > 0:
            resultado += `${meses} mes${meses > 1 ? 'es' : ''} `;
            break;
        case dias > 0:
            resultado += `${dias} día${dias > 1 ? 's' : ''} `;
            break;
        case horas > 0:
            resultado += `${horas} hora${horas > 1 ? 's' : ''} `;
            break;
        case minutos > 0:
            resultado += `${minutos} minuto${minutos > 1 ? 's' : ''} `;
            break;
        case segundos > 0:
            resultado += `${segundos} segundo${segundos > 1 ? 's' : ''} `;
            break;
    }
    

    return resultado;
  }

  let handler = {
    comentarios: true
  };
  const showComments = () => {
    if(!handler.comentarios) {
      document.getElementById("comentarios").style.opacity = "1";
      handler.comentarios = true;
    } else {
      document.getElementById("comentarios").style.opacity = "0";
      handler.comentarios = false;
    }
    
  }

  const share = (post) => {
    navigator.share({
      title: document.title,
      text: post.title,
      url: window.location.href
    })
  }

</script>
<template> 
  <div class="post card flex-md-column mb-4 h-md-250" v-bind:data-category="props.event.tag + ' ' + props.event.prioridad">
    <div class="post-header d-flex flex-md-row ">
      <div class="column">
        <img class="avatar" :src="props.event.thumb" >
        <div class="texts">
          <p>{{props.event.username}}</p>
          <small><iconify-icon icon="bi:dot"></iconify-icon> {{getDiff(props.event.date)}}</small>
        </div>
      
      </div>
      <div class="tiny-column">
        <button>
          <iconify-icon icon="mingcute:more-2-fill"></iconify-icon>
        </button>
      </div>
    </div>
    <img class="card-img-right flex-auto d-none d-md-block" :src="props.event.thumb" alt="Thumbnail [200x250]" style="max-height: 650px; object-fit:scale-down; object-position:left;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18d92f891b4%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18d92f891b4%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
    <div class="card-body d-flex flex-column align-items-start">
      <div class="banner d-flex w-100 justify-content-between">
        <strong class="tag d-inline-block mb-2 text-primary">{{props.event.tag}}</strong>
        <strong class="prioridad d-inline-block mb-2 text-primary ">
          <p class="priority-icon" v-if="props.event.prioridad == 'seguidos'" >
            <iconify-icon icon="ri:user-follow-line"></iconify-icon>
            Siguiendo
          </p>
          <p class="priority-icon" v-if="props.event.prioridad == 'recomendados'" >
            ¡Recomendado!
            <iconify-icon icon="material-symbols-light:recommend"></iconify-icon> 
          </p>
        </strong>
      </div>
      <h3 class="mb-0">
        <a class="text-dark" href="#">{{props.event.title}}</a>
      </h3>
      <div class="mb-1 text-muted"></div>
      <div class="mb-1 text-muted d-flex">
        <button :id="'boton_like_'+ props.event.id" @click="(e) => increaseLike(e)">
          <iconify-icon icon="mdi:like"></iconify-icon> <b :id="'likes_'+ props.event.id">{{ likes }}</b>
        </button>
        <button  @click="(e) => showComments(e)">
          <iconify-icon icon="icon-park-outline:comments"></iconify-icon> {{ props.event.comments.length }}
        </button>
        <button @click="() => share(props.event)">
          <iconify-icon icon="ic:baseline-share"></iconify-icon>
        </button>
      </div>
      <p class="card-text mb-auto">{{props.event.desc}}</p>
  </div>
  <div class="modal">
    Modal works!
    <button class="exit">
      <iconify-icon icon="clarity:times-line"></iconify-icon>
    </button>
  </div>
  
</div>
</template>
<style scoped>
 
    .post {
      overflow:hidden;
      background:white;
      border-radius:15px;
      padding:20px;
    }
    .post img {
      border-radius:10px;
      object-fit:scale-down;
    }
    .post .banner {
      display:flex;
      align-items: center;
    }
    .post a {
      text-decoration:none;
    }
    .post .tag {
      text-transform:uppercase;
    }

    .post .prioridad {
      color:red !important;
      height:fit-content;
      padding:0;
      height:20px;
    }
    .prioridad .priority-icon  {
      display:flex;
    }

    .prioridad .priority-icon iconify-icon {
      font-size:1.5rem;
      display:flex;
    }
    .avatar img {
      width:50px;
      height:50px;

    }

    .post button {
      background:none;
      border:none;
      margin:10px 10px 10px 0px;
      padding:8px 20px;
      display:flex;
      font-size:1.1rem;
      align-items: center;
      flex-direction:row;
      width:80px;
      border-bottom:1px solid rgb(206,206,206);
    }
    .post #comentarios {
      width:100%;
      max-height:300px;
      overflow-y:scroll;
      opacity:0;
      transition:all .4s ease-in-out;
    }
    .post button iconify-icon {
      margin-right:5px;
    }

    .post button:hover {
      opacity:.7;
    }
    .post .liked {
      background:red;
      color:white;
    }
</style>