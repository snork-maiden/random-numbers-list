<script setup lang="ts">
import { getRandomNumber } from '@/utils'
import ItemsListItem from './ItemsListItem.vue'
import { RANGES } from '@/config'

const itemsNumber = getRandomNumber(RANGES.verticalList)
</script>

<template>
  <ul class="lists">
    <li class="item" v-for="item of itemsNumber" :key="item">
      <ItemsListItem />
    </li>
  </ul>
</template>

<style scoped>
.lists {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2em;
}

.item {
  padding: 1em;
  background-color: rgb(216, 221, 247);
}
</style>
