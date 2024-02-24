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
                <span v-if="type == 'Oferta'" class="badge d-flex align-items-center text-verdeApp bg-secondary border border-verdeApp rounded-pill letraBadge">{{ type }}</span>
                <span v-if="type == 'Evento'" class="badge d-flex align-items-center text-yellow bg-secondary border border-yellow rounded-pill letraBadge">{{ type }}</span>
                <span v-if="type == 'Info'" class="badge d-flex align-items-center text-blue bg-secondary border border-blue rounded-pill letraBadge">{{ type }}</span>
                <div class="d-flex justify-content-center align-items-center etiquetas">
                    <p v-for="(valor, clave) in tags" class="tag"> {{ valor }}</p>
                </div>
                <small class="text-body-secondary">{{ time }}</small>
            </div>
        </div>
    </div>
</div>
</template>