<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();

function goBack(){

    router.push('/perfil');

}

</script>

<template>
  <nav id="menu">
    <a><img @click="goBack()" src="/img/back2.png" alt="Regresar"></a>
    <h3>Editar Perfil</h3>
  </nav>
  <div id="contenedorFoto">
    <img src="/img/perfil.jpg" alt="Foto de perfil del usuario">
    <a>Editar Foto</a>
  </div>
  <div id="main">
    <form action="" id="formu">
      <h5>Nombre</h5>
      <input type="text" name="nombre" id="nombre" value="Nombre">
      <h5>Apellidos</h5>
      <input type="text" name="apellidos" id="apellidos" value="Apellido1 Apellido2">
      <h5>Fecha Nac.</h5>
      <input type="date" name="fechaNac" id="fechaNac" value="2000-06-07">
      <h5>Presentación/Bio</h5>
      <input type="text" name="bio" id="bio" value="Cualquier cosa.">
    </form>
    <button>Confirmar Cambios</button>
  </div>
</template>

<style scoped lang="scss">
$verde: #6CDD99;
$blanco: #F8F9FA;
$fondoAppDark: #212529;

#menu {
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
  margin-top:20px; /* esto te lo añadi yo porque estaba muy junto el top */
}

#menu img {
  padding: 10px;
  height: 30px;
  width: 30px;
}

#contenedorFoto {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

a {
  color: $verde;
  transition: 0.3s;
}

a:hover {
  cursor: pointer;
  text-decoration: underline;
}

#contenedorFoto img {
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin-bottom: 10px;
}

img {
  cursor: pointer;
  transition: 0.3s;
}

img:hover {
  filter: drop-shadow(0px 0px 2px $verde);
}


h3,
h5 {
  margin: 0px;
  display: flex;
  align-items: center;
  color: $verde;
}

h3{
    position: relative;
    top: -4px;
}

h5 {
  margin-bottom: 10px;
}

#main {
  margin: 0px 20px;
}

#formu {
  display: flex;
  flex-direction: column;
  margin: 0px 0px 20px 0px;
}

#formu input {

  display: inline-flex;
  background-color: transparent;
  height: 30px;
  border: none;
  border-bottom: 1px solid #F8F9FA;
  margin-bottom: 20px;
  color: $blanco;

}

#formu input:focus {

  height: 30px;
  border-bottom: 1px solid $verde;
  outline: none;

}

#formu #fechaNac {
  width: 110px;
  flex-direction: row-reverse;
  text-align: center;
  border: 1px solid #F8F9FA;
  border-radius: 10px;
  padding: 5px;
  transition: 0.3s;
}

#fechaNac:hover {
  cursor: text;
  filter: drop-shadow(0px 0px 2px $verde);
}

#fechaNac::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(1);
}
</style>
