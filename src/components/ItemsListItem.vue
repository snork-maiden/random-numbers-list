<script setup lang="ts">
import { getRandomNumber } from '@/utils'
import RandomNumber from './RandomNumber.vue'
import { RANGES } from '@/config'

const itemsNumber = getRandomNumber(RANGES.horizontalList)
</script>

<template>
  <ul class="list">
    <li class="item" v-for="item of itemsNumber" :key="item">
      <RandomNumber />
    </li>
  </ul>
</template>

<style scoped>
.list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
</style>
