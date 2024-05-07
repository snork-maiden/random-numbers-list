<script setup lang="ts">
import { getRandomNumber } from '@/utils'
import ItemsListItem from './ItemsListItem.vue'
import { RANGES } from '@/config'

const itemsNumber = getRandomNumber(RANGES.verticalList)
let items = createIncreasingArray(itemsNumber)

function createIncreasingArray(number: number): number[] {
  const result = []
  for (let i = 1; i <= number; i++) {
    result.push(i)
  }
  return result
}
</script>

<template>
  <div class="lists">
    <v-virtual-scroll :items="items" height="100vh">
        <template v-slot:default="{ item }">
            <ItemsListItem class="item" :index="item"/>
        </template>
      </v-virtual-scroll>
  </div>
</template>

<style scoped>
.lists {
  min-height: 100vh;
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
