<script setup>
    const props = defineProps({
        comment: Object
    });
</script>
<template>
    <div class="comentario avatar card mt-2 flex-row p-2 w-100">
        <img  class="rounded-circle" :src="props.comment.thumb" :alt="props.comment.usuario.toLowerCase()+'_avatar'" loading="lazy">
        <div class="card-body p-1 px-3">
          <h6 class="card-subtitle mb-2  text-muted">{{ props.comment.usuario.toLowerCase() }} </h6>
            <span>{{ props.comment.comentario}}</span>
        </div>
      </div>
</template>
<style scoped>
    .comentario {
        width:100%;
        border:none;
        border-radius:0;
        margin:10px 0px;
    }

    .comentario img {
        width:35px;
        height:35px;
        background:#f7f7f7;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .comentario h6 {
        font-size:.9rem;
        font-weight:bold;
        margin-bottom:3px !important;
    }
    .comentario span {
        font-size:.9rem;
        white-space:pre-wrap;
    }
</style>