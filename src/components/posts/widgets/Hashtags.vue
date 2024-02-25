<script setup>
  const props = defineProps({
    title: String, 
    desc: String, 
    type: String, 
    list: Array, 
    button_url: String, 
    button_desc: String
  })
</script>
<template>
    <div :class="props.type + ' widget card mb-3'">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{desc}}</p>
          <div class="trendings" v-for="(list, index) in props.list" >
            <a :href="`tendencias/${list.toLowerCase()}`" :data-index="index" >
              <iconify-icon icon="gg:hashtag" ></iconify-icon> 
              {{list.toLowerCase()}}  
            </a>
          </div>
          <a v-if="props.button_url" href="#" class="btn btn-primary">{{props.button_desc}}</a>
        </div>
      </div>
</template>
<style scoped lang="scss">
  @import './../../../sass/imports/mixins.scss',  './../../../sass/imports/variables.scss';

  .widget {
    width:100%;
    height:fit-content;
  }
  .widget .trendings {
    width:100%;
    display:inline;
    a {
      background:none;
      width:fit-content;
      border:none;
      display:inline-flex;
      align-items: center;
      padding:8px 10px;
      border-radius:5px;
      background:#f7f7f7;
      margin:5px 5px;
      text-decoration:none;
    }
    /* ajuste para los impares */
    @for $n from 0 through 20 {
      @if($n % 2 == 0) {
        button[data-index="#{$n}"] {
          margin-left:0;
          }
        }
      } 
    }
</style>