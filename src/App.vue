<script setup>

  /*todo*/
  import NavBar from './components/NavBar.vue';

</script>
<template>
  <NavBar />
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>


