<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

function goEdit() {

    router.push('/Edit');

}

</script>

<template>
    <nav id="menu">
        <div>
            <h1>Titulo</h1>
        </div>
        <div>
            <img src="/img/perfil.jpg" alt="PerfilUsuario">
        </div>
    </nav>
    <div id="main">
        <div id="marco">
            <div>
                <div id="contenedorFoto">
                    <img src="/img/perfil.jpg" alt="FotoPerfil">
                </div>
                <h3>Pepe#342GH</h3>
                <h6>Usuario desde 29/04/2024</h6>
            </div>
            <div>
                <div id="contenedorFollows">
                    <div id="titulo">
                        Seguidos
                    </div>
                    <div id="cantidad">
                        32
                    </div>
                </div>
            <button @click="goEdit()">Editar Perfil</button>
            </div>
        </div>
        <div id="apartados">
            <h3>Bio</h3>
            <hr>
            <p>Cualquier cosa que el usuario ponga en su Bio.</p>
            <h3>Intereses</h3>
            <hr>
            <div id="intereses">
                <button>#Interes1</button>
                <button>#Interes2</button>
                <button>#Interes3</button>
                <button>#Interes4</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$verde: #6CDD99;
$blanco: #F8F9FA;
$fondoAppDark: #212529;

#menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    background-color: $blanco;
    padding: 0px 20px;
}

img {
    border-radius: 100%;
    cursor: pointer;
    transition: 0.3s;
}

#menu div {
    display: flex;
    align-items: center;
}

#menu div img {
    padding: 10px;
    width: 40px;
    height: 40px;
    transition: 0.3s;
}

#menu div img:hover {
    filter: drop-shadow(0px 0px 2px $verde);
}

h1 {
    font-size: 2.4em;
    margin: 0px;
    display: flex;
    align-items: center;
    color: $verde;
    cursor: pointer;
}

h3,
h6 {
    margin: 10px;
}

#main {
    margin: 0px 20px;
    padding-bottom: 20px;
}


#contenedorFoto {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

#contenedorFoto img {
    width: 120px;
    height: 120px;
}

button {
    margin-bottom: 30px;
}

#contenedorFollows {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 20px;
}

#contenedorFollows div {
    padding: 5px 10px;
    border: 1px solid $fondoAppDark;
    background-color: $verde;
    color: $fondoAppDark;
    font-weight: 600;
}

#marco {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#titulo {
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
}

#cantidad {
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
}

#apartados {
    text-align: start;
}

#apartados h3 {
    margin-top: 60px;
}

hr {
    margin-bottom: 40px;
}

#intereses {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
}

#intereses button {
    margin: 10px;
}

p {
    padding: 5px 10px;
}
</style>
