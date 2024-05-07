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
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
}
.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
</style>
