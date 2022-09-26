<script setup>
import { ref } from 'vue';
import Color from './Color.vue';
const isShow = ref(true)
</script>
  
<template>
    <h1 v-if="isShow">about page</h1>
    <Color v-else/>
</template>