<script setup>
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia';
const { todoList, doingList } = storeToRefs(useMainStore())
function del(index) {
  todoList.value.splice(index, 1)
}
function toDoing(index) {
  doingList.value.push(todoList.value[index])
  todoList.value.splice(index, 1)
}
</script>

<template>
  <a-list :max-height="550" id="alist">
    <template #header>
      <icon-compass />Todo
    </template>
    <a-list-item v-for="(element, index) in todoList" :key="element">
      {{ element }}
      <template #extra>
        <a-space size="mini">
          <a-button type="primary" size="mini" @click="toDoing(index)">
            <template #icon>
              <icon-up-circle />
            </template>
          </a-button>
          <a-button type="primary" size="mini" status="danger" @click="del(index)">
            <template #icon>
              <icon-delete />
            </template>
          </a-button>
        </a-space>
      </template>
    </a-list-item>
  </a-list>
</template>

<style scoped>
#alist {
  width: 350px;
}
</style>