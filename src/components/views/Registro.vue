<script setup>
    import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
    const router = useRouter();

    const usuario = ref("");
    const email = ref("");
    const password = ref("");
    const password_2 = ref("");

    function validarEmail(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return regex.test(email);
    }

    function Registro() {
        if (usuario.value === "Domingo" && (password.value.length >= 4 && password_2.value.length >= 4) && (password_2.value === password.value) && validarEmail(email.value)) {
            alert("Prueba registro, éxito");
        } else {
            alert("Prueba registro, error");
        }
    }

    function VolverLogin() {
        router.push('/login');
    }


    
    const backgroundColor = ref('#CECECE');
    const fondoActual = ref('luna');

    function cambiarFondoBlanco() {
        document.body.style.backgroundColor = '#CECECE';
        backgroundColor.value = '#CECECE';
        fondoActual.value = 'sol';
        mostrar_ocultar();
    }

    function cambiarFondoNegro() {
        document.body.style.backgroundColor = 'black';
        backgroundColor.value = 'black';
        fondoActual.value = 'luna';
        mostrar_ocultar();
    }
    
    function resetBackgroundColor() {
        document.body.style.backgroundColor = '#CECECE';
        backgroundColor.value = '#CECECE';
    }

    resetBackgroundColor();



    function mostrar_ocultar() {
        document.getElementById("luna").style.display = "block";

        if (fondoActual.value === 'sol') {
            document.getElementById("luna").style.display = "inline-block";
            document.getElementById("sol").style.display = "none";
            document.getElementById("luna").style.backgroundColor = "black";
        } else {
            document.getElementById("luna").style.display = "none";
            document.getElementById("sol").style.display = "inline-block";
            document.getElementById("sol").style.backgroundColor = "skyblue";
        }
    }

    function animarLetras() {
        const labels = document.querySelectorAll('label span');
        labels.forEach((label, index) => {
            label.style.animationDelay = `${index * 0.6}s`;
        });
    }

    onMounted(() => {
        animarLetras();
    });
</script>


<template>
    <div class="cambiarFondo">
        <button @click="cambiarFondoNegro()" id="luna"><img src="./img/luna.png" alt="Luna"></button>
        <button @click="cambiarFondoBlanco()" v-show="fondoActual.value === 'sol'" id="sol"><img src="./img/sol.png" alt="Sol"></button>
        <button @click="cambiarFondoNegro()" v-show="fondoActual.value === 'luna'" id="luna"><img src="./img/luna.png" alt="Luna"></button>
    </div>
    
    <div class="container">
        <form @submit.prevent="Registro">
            <h1>Formulario Registro</h1>
            <div class="input-box">
                <input type="text" name="usuario" v-model="usuario" required>
                <label for="usuario"><span>Nombre de usuario:</span></label>
            </div>

            <br/>

            <div class="input-box">
                <input type="email" name="email" v-model="email" required>
                <label for="email"><span>Correo electrónico: </span></label>
            </div>

            <br/>

            <div class="input-box">
                <input type="password" name="password" v-model="password" required>
                <label for="password"><span>Contraseña: </span></label>
            </div>

            <br/>

            <div class="input-box">
                <input type="password" name="password_2" v-model="password_2" required>
                <label for="password_2"><span>Confirmar Contraseña: </span></label>
            </div>

            <br/><br/>

            <input type="submit" name="registro" value="Registrarse">

            <div class="links">
                <p>¿Ya tienes cuenta? <a @click="VolverLogin()">Login</a></p>
            </div>
        </form>
    </div>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
$negro: #212524;
$blanco: white;
$verde-ligero: rgb(187, 250, 187);
$verde: green;
$verde2: #80ED99;
$verde3: #227A4A;
$verde4: #6A7A22;
$info: #22577A;
$error: #D63535;
$grisado: #CECECE;

    * {
        font-family: "Libre Baskerville", Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .cambiarFondo {
        display: flex;
        justify-content: end;

        button {
            border-radius: 50%;
            border: 2px solid $verde2;
            background-color: $verde-ligero;
            
            img {
                width: 40px;
                height: 40px;
                margin: 5px;
            }
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    form {
        background-color: $blanco;
        padding: 60px 80px 60px;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 2px solid $negro;
    }

    form h1 {
        color: $verde;
        margin-bottom: 50px;
    }

    form h1:hover {
        color: $verde2;
    }

    .input-box {
        position: relative;
        width: 350px;
        margin-bottom: 25px;
    }

    .input-box input {
        position: relative;
        width: 100%;
        padding: 10px 0px;
        background: transparent;
        border: none;
        border-bottom: 2px solid $verde;
        outline: none;
        color: $verde3;
        font-size: 1em;
        margin-top: 7px;
        letter-spacing: 0.05em;
    }

    .input-box label {
        position: absolute;
        left: 0;
        padding: 10px 0;
        pointer-events: none;
        color: $verde3;
        font-size: 15px;
        font-weight: bold;
    }

    .input-box label span {
        position: relative;
        display: inline-flex;
        letter-spacing: 0.05em;
        clip-path: inset(0 100% 0 0);
        transition: .5s;
        animation: aparecer 0.5s forwards;
    }

    @keyframes aparecer {
        0% {
            clip-path: inset(0 100% 0 0);
        }
        100% {
            clip-path: inset(0 0 0 0);
        }
    }

    .input-box input:focus ~ label span,
    .input-box input:valid ~ label span {
        color: $verde;
        letter-spacing: 0.15em;
        transform: translateY(-25px);
    }

    .input-box input:focus,
    .input-box input:valid {
        border-bottom: 2px solid $verde;
        padding: 10px 5px;
    }

    input[type="submit"] {
        background-color: $verde3;
        border: 2px solid $verde3;
        color: $verde2;
        border-radius: 35px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.1em;
        margin-bottom: 20px;
    }

    input[type="submit"]:hover {
        background-color: $verde2;
        color: $verde3;
    }

    form p a {
        font-weight: 500;
        text-decoration: none;
    }

    form p a:hover {
        color: $verde3;
        border-bottom: 2px solid $verde3;
    }
</style>
