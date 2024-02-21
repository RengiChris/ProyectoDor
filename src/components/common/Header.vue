<script setup>
import {computed, ref} from 'vue';
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

</script>

<template>
    <header class="d-flex flex-column flex-md-row align-items-center justify-content-start p-1 px-md-4 bg-white border-bottom box-shadow">
        <h5 class="logo my-0 mr-md-auto">SA.</h5>
        <nav class="navegation my-2 my-md-0 mr-md-3" >
          <div class="d-inline " v-for="route in props.routes">
            <a 
              v-if="route.visible"
              @click="() => isCurrent(route.path)" 
              :class="(props.path == '#' + route.path)? 'active navigator p-2':'navigator p-2' " 
              :href="'#' + route.path"
              :data-path="route.path"
            >
            {{route.name}}
          </a> 
          </div>
          
        </nav>

        <nav class="navbar flex-md-nowrap p-0 mx-5">
            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        </nav>

        <nav class="buttons">
          <button>
            <iconify-icon icon="iconamoon:profile-fill"></iconify-icon>
          </button>
          <button>
            <iconify-icon icon="carbon:notification"></iconify-icon>
          </button>
        </nav>
   
   
    
  </header>

</template>

<style scoped>

</style>
