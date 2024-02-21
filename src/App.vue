<script setup>
  import {routes, currentView, currentPath} from './router.js'
  import Header from './components/common/Header.vue'

</script>

<template>
  <Header :path="currentPath" :routes="routes" />
  <component :is="currentView" />
</template>

<style scoped>

</style>
