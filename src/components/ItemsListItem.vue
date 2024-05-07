<script setup lang="ts">
import { getRandomNumber } from '@/utils'
import RandomNumber from './RandomNumber.vue'
import { RANGES } from '@/config'

const itemsNumber = getRandomNumber(RANGES.horizontalList)
defineProps({
  index:{
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="index">{{ index }}</div>
    <ul class="list">
      <li class="item" v-for="item of itemsNumber" :key="item">
        <RandomNumber />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.index {
  font-size: 1.4em;
  background-color: var(--item-text-color);
  line-height: 1;
  padding: 0.3em;
  color: var(--block-color-background);
  width: fit-content;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  border-radius: 50%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin: 2em;
}
.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
</style>
