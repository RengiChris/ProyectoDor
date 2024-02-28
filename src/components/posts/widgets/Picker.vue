<script setup>  
  import {ref} from 'vue';
  import {Picker} from 'emoji-mart';

  const props = defineProps({
    picker: String, 
    target: String, 
    handler: String
  })

  let status = ref(false);
  const addEmoji = (emoji) => {
    let target = props.target;
    document.getElementById(target).value += emoji.native + "";
  }

  const showPicker = () => {
    let posX = document.getElementById(props.target).getBoundingClientRect().x;
    let posY = document.getElementById(props.target).getBoundingClientRect().y;
    if(status.value) {
        picker.style.display = "none";
        status.value = false;
    } else {
        picker.style.display = "flex";
        status.value = true;
    }
  }

  window.addEventListener('keydown', (e) => {
    if(e.key == "Escape") {
      picker.style.display = "none";
      status.value = false;
    }
  })
  
  const pickerOptions = { onEmojiSelect: addEmoji }
  const picker = new Picker(pickerOptions);

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(props.handler).addEventListener('click', (e) => {
        e.preventDefault();
        showPicker();
    })

    let posX = document.getElementById(props.target).getBoundingClientRect().x;
    let posY = document.getElementById(props.target).getBoundingClientRect().y;
    let espaciado = 190;
    picker.classList.add("customPicker");
    picker.style.left = `calc(${posX}px - 20px)`;
    picker.style.top = `calc(${posY}px + ${espaciado}px)`;
    document.body.appendChild(picker);

  });
</script>
<template></template>
<style>
  .customPicker {
    display: none;
    background:gray;
    position:absolute;
    top:0;
    left:0;
  }
</style>