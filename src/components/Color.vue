<script setup>
import { useStore } from '../store/index'

const store = useStore()

const toggleIsShow = () => {
  store.toggleIsShow()
}
</script>

<template>
  <div style="width: 100%; height: 100vh; background-color: pink;" @click="toggleIsShow"></div>
</template>