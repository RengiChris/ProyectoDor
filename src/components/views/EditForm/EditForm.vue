<script setup>

    import ProfilePicture from "../../contenido_perfil/ProfilePicture.vue";
    import DefaultButton from "../../contenido_perfil/DefaultButton.vue";
</script>
<template>
    
    <div class="d-flex flex-column justify-content-center align-items-center">
        <section class="profileData mt-3 d-flex w-100 flex-column flex-md-row justify-content-center align-items-center">
            
            <ProfilePicture source="/perfil.webp" class="foto" />
            <article class="card profile">
                <section class="card-body">
                    <input type="text" value="Última Informática" class="negrita titulo" placeholder="Título" />

                    <textarea cols="30" rows="10" placeholder="Descripción" class="textArea">Empresa de asesoramiento en montaje de equipos informáticos a medida y venta de periféricos, ¡Te garantizamos el mejor precio de canarias!</textarea>
                    <div class="fila">
                        <span class="negrita">Email: </span>
                        <input type="text" value="info@ultima_informatica.com"  />
                    </div>
                    <div class="fila">
                        <span class="negrita">Teléfono: </span>
                        <input type="number" value="922876765" />
                    </div>
                    <div class="fila">
                        <span class="negrita">Dirección: </span>
                        <input type="text" value="C/ Carlos Francisco Lorenzo Navarro, 23, 38760, Los Llanos de Aridane" />
                    </div>
                    <div class="fila">

                        <select name="" id="">
                            <option value="" selected>Tienda de Informática</option>
                            <option value="">Tiendo de Ropa</option>
                            <option value="">Ferretería</option>
                        </select>
                    </div>
                    <div id="saveDiv">
                        <router-link to="/"><DefaultButton value="Guardar" /></router-link>
                        <DefaultButton value="Borrar Cuenta" class="btnBorrar"/>
                    </div>
                    
                    
                </section>
            </article>
        </section>
    </div>
</template>
<style scoped>
@import '../general.scss';
@import "./style.css";
</style>
