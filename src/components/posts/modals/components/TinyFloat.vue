<script setup>
  import { ref } from 'vue'
  const props = defineProps({
    status: Object, 
    type: String
  });

  const status = ref(props.status);
  let options = [
    {
      name: 'Ver comercio',
      icon: 'icon-park-outline:go-on',
      url: '/perfil/comercio' /* cambiar por el perfil de la empresa */
    }
  ];

  let optionsAyuntamientos = [
    {
      name: 'Ver ayuntamiento',
      icon: 'fluent:building-32-regular',
      url: '/perfil/ayuntamiento' /* cambiar por el perfil de la empresa o cliente ?? */
    }
  ];
</script>
<template>
    <div class="tiny-modal" :style="`max-height: ${(status)? 'fit-content' : '0px'};`">
      <template  v-if="props.type == 'comercio'">
        <button class="option" v-for="option in options" >
          <iconify-icon :icon="option.icon"></iconify-icon>
          <span> {{ option.name }} </span>
        </button>
      </template>
      <template  v-if="props.type == 'ayuntamiento'">
        <button class="option" v-for="option in optionsAyuntamientos" >
          <iconify-icon :icon="option.icon"></iconify-icon>
          <span> {{ option.name }}</span>
        </button>
      </template>
      
      </div>
</template>
<style scoped lang="scss">
  @import './src/sass/imports/variables', './src/sass/imports/mixins';
  .tiny-modal {
      display: flex;
      flex-direction:column;
      position: absolute;
      top:100px;
      right:10px;
      width:200px;
      height:fit-content;
      background:rgba(255,255,255,1);
      backdrop-filter: blur(2px);
      border-radius:5px;
      overflow:hidden;
      max-height: 0px;
      transition:max-height .5s ease-in-out;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

      .option {
        @include row_center();
        border:none;
        min-width:100% !important;
        min-height:50px;
        background:none !important;

        span {
          font-size:.8rem;
          width:70%;
          text-align:center !important;
        }

        iconify-icon {
          font-size:1.3rem;
          width:20%;
          margin-left:10px;
        }
      }
  }
</style>