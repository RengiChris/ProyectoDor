<script setup>
  import {ref, computed} from 'vue';
  import Home from './components/Home.vue'
  import Login from './components/Login.vue'
  import Map from './components/Map.vue'
  import NoEncontrado from './components/NoEncontrado.vue'
  const routes = {
    '/': Home,
    '/login': Login, /* <Componente /> */
    '/map': Map
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NoEncontrado
  })
</script>

<template>
  <header>
    <a href="#/">Home</a> |
    <a href="#/login">Login</a> |
    <a href="#/map"> Mapa </a> |
    <a href="#/non-existent-path">Path que no existe</a>
  </header>
  <component :is="currentView" />
</template>

<style scoped>

</style>
