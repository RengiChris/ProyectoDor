<script setup>
const props = defineProps({
    class: String
});
</script>
<template>
    <svg :class="class" viewBox="0 0 24 24"><path fill="#80ED99" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z"/></svg>
</template>
<style scoped lang="scss">
@import '../../style.scss';
.icon{
  @include padding-margin-br100;
  width: 3rem;
}
</style>