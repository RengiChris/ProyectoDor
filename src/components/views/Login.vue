<script setup>
    import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
    const router = useRouter();

    const usuario = ref("");
    const password = ref("");

    function Login() {
        if (usuario.value === "Domingo" && password.value === "1234") {
            alert("Prueba login, acceso correcto");
        } else {
            alert("Prueba login, acceso incorrecto");
        }
    }

    function Registrarse() {
        router.push('/registro');
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
        const labels = document.querySelectorAll('label');
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
        <h1>Formulario Login</h1>
        <div class="form">
            <form @submit.prevent="Login">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="text" name="usuario" v-model="usuario" required>
                    <label for="usuario"><span>Usuario: </span></label>
                </div>

                <br/>

                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" name="password" v-model="password" required>
                    <label for="password"><span>Contraseña: </span></label>
                </div>

                <div class="links">
                    <label for="acordarse"><input type="checkbox" name="acordarse">Acordarse</label>
                    <a href="">¿Se te ha olvidado la contraseña?</a>
                </div>

                <div class="envio">
                    <input type="submit" name="login" value="Login">
                </div>

                <br/>
                
                <p>¿No tienes cuenta?: <a id="registro" @click="Registrarse()">Regístrate</a></p>
            </form>
        </div>
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
            }
        }
    }

    .container {
        font-family: 'Times New Roman', Times, serif;
        padding: 20px;
        border-radius: 20px;
        width: 30%;
        margin: 0 auto;
        border: 2px solid $negro;
        background-color: $blanco;
        margin-top: 100px;

        h1 {
            color: $verde3;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 50px;
            margin-top: 10px;
        }

        h1:hover {
            color: $verde2;
        }
    }

    .input-box {
        position: relative;
        margin: 0 auto;
        width: 450px;
        border-bottom: 2px solid $verde3;
        margin-bottom: 20px;
    }

    .input-box label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 15px;
        font-weight: bold;
        color: $verde3;
        pointer-events: none;
        transition: .5s;
        letter-spacing: 0.05em;
        animation: aparecer 0.5s forwards;
    }
    
    .input-box label span {
        position: relative;
        display: inline-flex;
    }

    @keyframes aparecer {
        0% {
            clip-path: inset(0 100% 0 0);
        }
        100% {
            clip-path: inset(0 0 0 0);
        }
    }

    .input-box input {
        width: 100%;
        height: 50px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        color: $verde3;
        padding-left: 5px;
    }

    .input-box input:focus ~ label span,
    .input-box input:valid ~ label span {
        color: $verde;
        letter-spacing: 0.15em;
    }

    .input-box input:focus ~ label,
    .input-box input:valid ~ label {
        top: -10px;
        letter-spacing: 0.05em;
    }

    .input-box .icon {
        position: absolute;
        right: 8px;
        color: $verde;
        font-size: 1.2em;
        line-height: 57px;
    }


    .links {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
        margin-top: 15px;
    }
    
    .links label:hover {
        color: $verde;
    }
    
    a {
        text-decoration: none;
        color: $info;
        border-bottom: 2px solid $blanco;
    }

    a:hover {
        color: $verde3;
        border-bottom: 2px solid $verde3;
    }

    p {
        margin: 0 auto;
        margin-top: 5px;
        display: flex;
        width: 60%;
        text-align: center;
        justify-content: center;
    }

    #registro {
        margin-left: 5px;
        border-bottom: 2px solid $blanco;
    }

    #registro:hover {
        color: $verde3;
        border-bottom: 2px solid $verde3;
    }

    .envio {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    input[type="submit"] {
        background-color: $verde3;
        border: 2px solid $verde3;
        color: $verde2;
        border-radius: 35px;
        width: 80%;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        margin-top: 30px;
        letter-spacing: 0.1em;
    }

    input[type="submit"]:hover {
        background-color: $verde2;
        color: $verde3;
    }
</style>


