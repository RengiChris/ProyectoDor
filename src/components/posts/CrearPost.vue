<script setup>
  import Picker from './widgets/Picker.vue';
</script>
<template>
  <div class="post-it card mb-4 box-shadow h-md-250">
    <form>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">
          <small class="aviso">
            <iconify-icon icon="material-symbols:info-outline"></iconify-icon>
            Tu post estará en estado de moderación hasta su verificación.</small>
        </label>
        <textarea id="post_textarea" class="form-control mt-3" rows="3"
          placeholder="¿Qué quieres promocionar?"></textarea>
        <button class="mt-3">
          <iconify-icon id="emoji-controller-post" icon="fluent:emoji-16-regular"></iconify-icon>
        </button>
      </div>
      <Picker :picker="'post-area'" :target="'post_textarea'" :handler="'emoji-controller-post'" />
    </form>
  </div>
</template>
<style scoped lang="scss">
  @import './src/sass/imports/variables', './src/sass/imports/mixins';

  #post_textarea {
    resize: none;
  }

  .post-it {
    margin-top: 20px;
    padding: 20px;
  }

  .aviso {
    @include row_center();
    padding: 5px 0px;
    font-size: 1rem;
  }

  .aviso svg {
    margin-right: 10px;
    color: $alert;
    font-size: 1.8rem;
  }

  .post-it button {
    @include row_center();
    background: #f3f3f3;
    border-radius: 50%;
    padding: 3px;
    font-size: 1.8rem;
    border: none;
  }

</style>