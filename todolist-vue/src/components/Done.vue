<script setup>
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia';
const { doneList } = storeToRefs(useMainStore())
function del(index) {
  doneList.value.splice(index, 1)
}
</script>

<template>
  <a-list :max-height="550" id="alist">
    <template #header>
      <icon-check-circle />Done
    </template>
    <a-list-item v-for="(element, index) in doneList" :key="element">
      {{ element }}
      <template #extra>
        <a-button type="primary" size="mini" status="danger" @click="del(index)">
          <template #icon>
            <icon-delete />
          </template>
        </a-button>
      </template>
    </a-list-item>
  </a-list>
</template>

<style scoped>
#alist {
  width: 350px;
}
</style>