<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

function goBack() {

  router.push('/perfil');

}

</script>

<template>
  <div id="main">
    <div class="caja">
      <div id="contenedorFoto">
        <img src="/usuario.webp" alt="Foto de perfil del usuario.">
          <h5>Editar Foto</h5>
      </div>
      <div>
        <form action="" class="formu">
          <h5>Username</h5>
          <input type="text" name="nombre" id="nombre" value="Pepe" placeholder="Nombre">
        </form>
      </div>
    </div>
    <div class="caja" id="contenedorFormu">
      <form action="" class="formu">
        <h5>Nombre</h5>
        <input type="text" name="nombre" id="nombre" value="Pepe" placeholder="Nombre">
        <h5>Apellidos</h5>
        <input type="text" name="apellidos" id="apellidos" value="Hernández Cabrera" placeholder="Apellidos">
        <h5>Municipio</h5>
        <select name="municipio" id="select">
          <option value="brenaBaja">Breña Baja</option>
          <option value="BrenaAlta">Breña Alta</option>
          <option value="llanosAridane">Los Llanos de Aridane</option>
        </select>
        <!-- <input type="text" name="nombre" id="nombre" value="Breña Baja" placeholder="Nombre"> -->
        <h5>Email</h5>
        <input type="email" name="email" id="email" value="Pepe@pepe.com" placeholder="Nombre">
        <h5>Fecha Nac.</h5>
        <input type="date" name="fechaNac" id="fechaNac" value="2000-06-07">
        <h5>Presentación/Bio</h5>
        <input type="text" name="bio" id="bio" value="Cualquier cosa que el usuario ponga en su Bio." placeholder="Descripción corta">
      </form>
      <div class="col-md-6 mb-4 apartado">
        <h5>Intereses</h5>
        <hr>
        <div id="intereses">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z" clip-rule="evenodd">
              </path>
            </svg>coding</a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z" clip-rule="evenodd">
              </path>
            </svg>bazares</a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z" clip-rule="evenodd">
              </path>
            </svg>anime</a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd"
                d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4zm6 10v-4h-4v4z" clip-rule="evenodd">
              </path>
            </svg>eventos
          </a>
          <a>
            +
          </a>
        </div>
      </div>
      <button @click="goBack">Confirmar</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'stylePerfilEdit';
</style>
