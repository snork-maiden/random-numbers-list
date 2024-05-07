<script setup lang="ts">
import { onMounted } from 'vue';
import ItemsList from './components/ItemsList.vue'

//overriding style added by vuetify
onMounted(() => {
  const htmlElement = document.querySelector('html');
  htmlElement!.style.overflowY = 'hidden';
})
</script>

<template>
  <main>
    <ItemsList />
  </main>
</template>

<style scoped>

</style>
