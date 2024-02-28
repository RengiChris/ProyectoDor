<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

function goEdit() {

    router.push('/perfil/edit');

}


</script>

<template>
    <div id="main">
        <div class="row apartado">
            <div class="col-md-6 mb-4" id="marco">
                <div class="seccion">
                    <div id="contenedorFoto">
                        <img src="/usuario.webp" alt="Foto de perfil.">
                    </div>
                    <div>
                        <h3>Pepe#342GH</h3>
                        <h6>Usuario desde 29/04/2024</h6>
                    </div>
                </div>
            <div class="seccion">
                <div id="contenedorFollows">
                    <div>
                        Seguidos
                    </div>
                    <div>
                        32
                    </div>
                </div>
                <button @click="goEdit()">Editar Perfil</button>
            </div>
        </div>

        </div>
        <div class="row datos">
            <div class="col-md-6 mb-4 apartado">
                <h3>Bio</h3>
                <hr>
                <p>Cualquier cosa que el usuario ponga en su Bio.</p>
            </div>
            <div class="col-md-6 mb-4 apartado">
                <h3>Municipio</h3>
                <hr>
                <p>Breña Baja.</p>
            </div>
            <div class="col-md-6 mb-4 apartado">
                <h3>Otro Apartado</h3>
                <hr>
                <p>Información relevante del perfil del usuario.</p>
            </div>
            <div class="col-md-6 mb-4 apartado">
                <h3>Intereses</h3>
                <hr>
                <div id="intereses">
                    <a href="/tendencias/coding"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z"
                                clip-rule="evenodd">
                            </path>
                        </svg>coding</a>
                    <a href="/tendencias/bazares"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z"
                                clip-rule="evenodd">
                            </path>
                        </svg>bazares</a>
                    <a href="/tendencias/anime"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                            viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z"
                                clip-rule="evenodd">
                            </path>
                        </svg>anime</a>
                    <a href="/tendencias/eventos">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z"
                                clip-rule="evenodd">
                            </path>
                        </svg>eventos
                    </a>
                </div>
            </div>
        </div>
    </div></template>

<style scoped lang="scss">@import 'stylePerfil';</style>
