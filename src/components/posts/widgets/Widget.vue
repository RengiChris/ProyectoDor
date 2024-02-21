<script setup>
  const props = defineProps([
    'title', 'desc', 'type', 'list', 'button_url', 'button_desc'
  ])
</script>
<template>
    <div :class="props.type + ' widget card mb-3'">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{desc}}</p>
          <div class="trendings" v-if="props.list" v-for="list in props.list">
            <button>
              <iconify-icon icon="gg:hashtag"></iconify-icon> 
              {{list}}  1 
            </button>
          </div>
          <a v-if="props.button_url" href="#" class="btn btn-primary">{{props.button_desc}}</a>
        </div>
      </div>
</template>
<style scoped>
    .modal {
        display: flex;
    }

    .widget .trendings {
      display:flex !important;
      flex-direction:row !important;
      align-items: center !important;
      /*background:blue;
*/
    }

    .trendings button {
     background:none;
     border:none;
     padding:8px 10px;
     display:flex;
     background:#f7f7f7;
     margin:5px 0px;
     align-items:center;
     justify-content: center;
    }
</style>