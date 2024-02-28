<script setup>
import {computed, onMounted, ref} from 'vue';
  const props = defineProps([
    'path', 'routes'
  ]);

  const isCurrent = (currentPath) => {
    let navigators = document.getElementsByClassName("navigator");
    let current = false;
    Array.from(navigators).forEach(a => {
      if(a.dataset.path == currentPath) {
        a.classList.add('active');
        current = true;
      } else {
        a.classList.remove('active');
      }
     
    });
    return current;
  }

  let statusSearch = ref(false);

  const growSearch = (e) => {
    const button = e.target;
    let input = document.getElementById("search");
    console.log(statusSearch.value)
    if(!statusSearch.value) {
      statusSearch.value = true;
      button.style.borderRadius = "5px 0px 0px 5px";
      document.getElementById("search-wrapper").style.maxWidth = "100%";
      document.getElementById("search").focus();
    } else {
      statusSearch.value = false;
      button.style.borderRadius = "5px 5px 5px 5px";
      document.getElementById("search-wrapper").style.maxWidth = "39px";
      input.style.borderLeft = "none";
    }
  }
  onMounted(() => {
    document.getElementById("search").addEventListener('blur', () => {
      statusSearch.value = false;
      document.getElementById("search-wrapper").style.maxWidth = "40px";
    })
  });

  


</script>

<template>
    <header class="d-flex flex-column flex-md-row align-items-center justify-content-start p-1 px-md-4 bg-white border-bottom box-shadow">
        <h5 class="logo my-0 mr-md-auto">Social</h5>
        <nav class="navegation " >
          <div class="d-inline " v-for="route in props.routes">
            <router-link 
              v-if="route.visible"
              @click="() => isCurrent(route.path)" 
              :class="(props.path == '#' + route.path)? 'active navigator p-2':'navigator p-2' " 
              :href="'#' + route.path"
              :data-path="route.path"
            >
            {{route.name}}
          </router-link> 
          </div>
          
          
        </nav>

        <!-- <nav class="search-wrapper navbar flex-md-nowrap p-0 mx-5">
            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        </nav> -->
        <nav class="nav-search">
          <div id="search-wrapper" class="search-wrapper">
            <button @click="(e) => growSearch(e)">
              <iconify-icon icon="material-symbols-light:search"></iconify-icon>
              <!-- Desplegar el search con lupa en lado izq -->
            </button>
            <input id="search" class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
     
          </div>
        </nav>

       

        <nav class="buttons">
          <button>
            <iconify-icon icon="iconamoon:profile-fill"></iconify-icon>
          </button>
          <button>
            <iconify-icon icon="carbon:notification"></iconify-icon>
          </button>
          <button style="background:none">
            <iconify-icon icon="mdi:gear"></iconify-icon>
          </button>
        </nav>
   
   
    
  </header>

</template>
<style scoped lang="scss">
  @import '../../sass/imports/variables', '../../sass/imports/mixins';
    
  header {
    min-height:65px;
    border-bottom:1px solid rgb(206,206,206);

    h5 {
        color: $highlight !important;
        opacity:1;
        font-weight: bold;
        padding:5px;
        border-radius:10px;
        //background:linear-gradient(to bottom, #F3FF1F, $highlight); -->
        color:black;
    }

    a {
        text-decoration:none;
        color:black;
    }
    .buttons {
        display:flex;
        button {
            color:#3E3D4A;
            background:#F6F7FA;
            display:flex;
            align-items:center;
            font-size:1.6rem;
            margin-right:5px;
            border-radius:50%;
            border:none;
            padding:5px;
        }
    }

    .active {
        color: $highlight;
    }

    .navegation {
        margin:0px 10px;
    }

    .nav-search {
      width:1000px;
      display:flex;
      flex-direction:row;
      align-items: center;
      justify-content: flex-end;
      .buttons {
        margin-left:50px;
      }
    }

    .search-wrapper {
      /* background:red; */
      width:1000px !important;
      max-width: 40px;
      min-width:0;
      display:flex;
      overflow:hidden;
      transition:all .5s ease-in-out;
      button {
        border-radius:5px;
        font-size:1.6rem;
        display:flex;
        min-width:40px !important;
        align-items: center;
        justify-content:center;
        border-radius: 5px 5px 5px 5px;
        border:1px solid rgba(206,206,206);
        border-collapse: collapse;
      }

      input {
        border-radius:0px 5px 5px 0px;
        border-collapse: collapse;
        margin-left:0px;
      }
    }

  }

</style>
