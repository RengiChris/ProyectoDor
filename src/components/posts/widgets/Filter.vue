<script setup>
    let props = defineProps([
        'filtrado'
    ]);
    let currentTags = props.filtrado;

    console.log(props.filtrado);

    const filterPost = (e, tag) => {
        let posts = document.getElementsByClassName("post");
        Array.from(posts).forEach(post => {
            console.log(post);
            if(post.dataset.category.includes(tag) || tag == "Todos") {
                post.style.display = "flex";
            } else {
                post.style.display = "none";
            };

        })

        let filters = document.getElementsByClassName("filter");

        Array.from(filters).forEach(boton => {
            if(boton == e.target) {
                boton.classList.add("selected")
            } else {
                boton.classList.remove("selected")
            }
        } )
    };

</script> 
<template>
    <div class="filters">
        <button :class="(tag == 'Home')?'selected filter':'filter'" @click="(e) => filterPost(e, tag)" v-for="tag in currentTags"> {{ tag }} </button>
    </div>
</template>
<style scoped>
    .filters {
        border-radius:10px;
        display:flex;
        flex-wrap:no-wrap;
        overflow:hidden;
        margin-bottom:5px;
    }
    .filters:last-of-type {
        margin-bottom:20px;

    }
    .filter {
        padding:15px;
        border:none;
        text-transform:uppercase;

        font-size:1rem;
        color:#8496A8;
        font-weight:normal;
        background:#fff;
        width:clamp(20%, 50%, 50%);

        transition:all .4s ease-in-out;
        border-bottom:3px solid transparent;
    }
    .selected {
        border-bottom:3px solid black;
        color:black;
        font-weight:bold;
    }
</style>