<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="mb-4">
      <cc-icon>
        <game-controller-outline />
      </cc-icon>
    </div>

    <div class="m-4 text-lg font-bold">自定义尺寸</div>
    <div class="mb-4">
      <cc-icon size="40">
        <game-controller-outline />
      </cc-icon>
    </div>

    <div class="m-4 text-lg font-bold">自定义颜色</div>
    <div class="mb-4">
      <cc-icon size="40" color="#0e7a0d">
        <game-controller />
      </cc-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GameControllerOutline, GameController } from '@vicons/ionicons5'
</script>

<style scoped></style>
