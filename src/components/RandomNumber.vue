<script setup lang="ts">
import { RANGES } from '@/config'
import { getRandomNumber } from '@/utils'

const value = getRandomNumber(RANGES.randomNumber)
</script>

<template>
  <div class="item">{{ value }}</div>
</template>

<style scoped>
.item {
  display: grid;
  place-items: center;
  width: 3em;
  aspect-ratio: 1/1;
  border: 2px solid salmon;
  border-radius: 10px;
  cursor: default;
  user-select: none;
  transition: transform 0.2s;
}

.item:hover {
  transform: scale(0.8);
  transition: transform 0.4s;
}
</style>
