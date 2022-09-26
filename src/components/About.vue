<script setup>
import { useStore } from '../store/index'
import { storeToRefs } from 'pinia'
import Color from './Color.vue';

const store = useStore()
const { isShow } = storeToRefs(store)
const toggleIsShow = () => {
  store.toggleIsShow()
}
</script>
  
<template>
  <h1 v-if="isShow" @click="toggleIsShow">about page</h1>
  <Color v-else />
</template>