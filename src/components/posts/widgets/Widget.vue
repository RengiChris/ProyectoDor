<script setup>
  const props = defineProps({
    title: String, 
    desc: String, 
    type: String, 
    list: String, 
    button_url: String, 
    button_desc: String
  })
</script>
<template>
    <div :class="`widget ${props.type} card mb-3`">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{desc}}</p>
          <div class="list" v-if="props.list" v-for="list in props.list">
            <button>
              <iconify-icon icon="gg:hashtag"></iconify-icon> 
              {{list}}  
            </button>
          </div>
          <a v-if="props.button_url" href="#" class="btn btn-primary">{{props.button_desc}}</a>
        </div>
      </div>
</template>
<style lang="scss">
    /* widget CSS */ 
    .widget {
      border:1px solid rgb(206,206,206) !important;

      .list {
        display:flex !important;
        flex-direction:row !important;
        align-items: center !important;

        button {
          background:none;
          border:none;
          padding:8px 10px;
          display:flex;
          background:#f7f7f7;
          margin:5px 0px;
          align-items:center;
          justify-content: center;
        }
      }
    }

</style>