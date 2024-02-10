<script setup>
  import {currentView} from './router.js'
  import Header from './components/micro/Header.vue'
</script>

<template>
  <Header/>
  <component :is="currentView" />
</template>

<style scoped>

</style>
