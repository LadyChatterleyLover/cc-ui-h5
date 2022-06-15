<template>
  <div class="p-5">
    <div class="mb-4">
      <cc-button type="primary" @click="visible1 = true">
        显示遮罩层
      </cc-button>
    </div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible2 = true"> 嵌入内容 </cc-button>
    </div>
    <cc-overlay v-model="visible1"></cc-overlay>
    <cc-overlay v-model="visible2">
      <div class="flex items-center justify-center h-screen">
        <div class="w-32 h-32 bg-white"></div>
      </div>
    </cc-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

<style scoped></style>
