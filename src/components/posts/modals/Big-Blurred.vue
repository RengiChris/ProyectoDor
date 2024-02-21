<script></script>
<template>
    <div class="modal">
        Modal works!
        <button class="exit">
          <iconify-icon icon="clarity:times-line"></iconify-icon>
        </button>
      </div>
</template>
<style>
.modal {
    display: flex;
    background:rgba(255,255,255,.3);
    backdrop-filter: blur(2px);
}

.modal .exit {
  background:none;
  border:none;
}
</style>