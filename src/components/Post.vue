<script setup>
    const props = defineProps({
        time: String,
        image: String,
        desc: String, 
        type: String,
        title: String,
        tags: Array
    });

</script>
<template>
<div class="col">
    <div class="card shadow-sm">
        <img v-if="image != null" :src="image" alt="Imagen del post">
        <div class="card-body">
            <h4>{{ title }}</h4>
            <p class="card-text">{{desc}}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span v-if="type == 'Oferta'" class="badge d-flex align-items-center text-verdeApp bg-primary border border-verdeApp rounded-pill letraBadge">{{ type }}</span>
                <span v-if="type == 'Evento'" class="badge d-flex align-items-center text-yellow bg-primary border border-yellow rounded-pill letraBadge">{{ type }}</span>
                <span v-if="type == 'Info'" class="badge d-flex align-items-center text-blue bg-primary border border-blue rounded-pill letraBadge">{{ type }}</span>
                <div class="d-flex justify-content-center align-items-center etiquetas">
                    <p v-for="(valor, clave) in tags" class="tag"> {{ valor }}</p>
                </div>
                <small class="text-body-secondary">{{ time }}</small>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped lang="scss">
@import "../style.scss";
.card{
  margin-top: 1.5rem;
  min-width: 24rem;
}
.card>img{
  height: 16rem;
  object-fit: cover;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 16rem;
}
.tag{
  color: #495057;
  font-size: 0.75em;
  margin-bottom: 0;
  margin-right: 0.25em;
}
.etiquetas{
  flex-wrap: wrap;
}

@media screen and (width >= 576px){
  .card{
    margin-top: 0;
    margin-left: 1.5rem;
  }
  .col{
    margin-bottom: 2rem;
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
}
</style>