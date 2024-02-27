<script setup>
    import { ref } from 'vue'
    const props = defineProps([
        'post'
    ]);

    const post = props.post;
    const comentarios = ref(post.comments);
    const clearForm = () => {document.getElementById("chat-send").value = ""};
    const validationWrong = (element) => {
        element.style.border = "1px solid red";
    }

    const success = (element) => {
        element.style.border = "1px solid rgb(206,206,206)";
    }
    const sendComment = (e) => {
        e.preventDefault();
        let chat = document.getElementById("chat-send");
        let comentario = chat.value;
        if(comentario != "") {
            comentarios.value.push({
                comentario: comentario,
                usuario: 'anonimo',
                thumb: 'https://randomuser.me/api/portraits/men/1.jpg'
            }) 
            clearForm();
            success(chat)
            window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
        } else {
            validationWrong(chat);
        }
        
    }

    
</script>

<template>
    <div class="wrapper-send">
        <form action="">
            <textarea id="chat-send" name="comentario"  cols="30" rows="10" placeholder="Escribe tu comentario"></textarea>
          <button @click="(e) => sendComment(e)" type="submit">
            <iconify-icon icon="tabler:send"></iconify-icon>
          </button>
        </form>
    </div>
</template>

<style scoped lang="scss">
 .wrapper-send {
      display:flex;
      align-items: center;
      width:100%;
      height:70px;
    }

    .wrapper-send form {
        display:flex;
        align-items: center;
        flex-direction:row;
        width:100%;
        height:100%;
    }

    .wrapper-send button {
      background:#86EE94;
      width:60px;
      height:100%;
      color:white;
      font-size:1.5rem;
      border:0;
      display:flex;
      align-items: center;
      justify-content: center;
      padding:10px;
      border:1px solid rgba(206,206,206);
      border-radius:0px 5px 5px 0px;
    }

    .wrapper-send textarea {
      width:100%;
      margin:5px 0px;
      height:100%;
      resize:none;
      border-radius:5px 0px 0px 5px;
      border:1px solid rgba(206,206,206);
      border-right:none;
      padding:10px 20px;
      outline-color:#86EE94;
    }

    #comentarios textarea::placeholder {
      color:rgba(206,206,206);
    }


</style>