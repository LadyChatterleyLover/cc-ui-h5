<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="mb-4">
      <cc-divider></cc-divider>
    </div>

    <div class="m-4 text-lg font-bold">展示文本</div>
    <div class="mb-4">
      <cc-divider>文本</cc-divider>
    </div>

    <div class="mb-4">
      <cc-divider contentPosition="left">左侧文本</cc-divider>
    </div>

    <div class="mb-4">
      <cc-divider contentPosition="right">右侧文本</cc-divider>
    </div>

    <div class="m-4 text-lg font-bold">虚线</div>
    <div class="mb-4">
      <cc-divider dashed></cc-divider>
    </div>

    <div class="m-4 text-lg font-bold">自定义样式</div>
    <div class="mb-4">
      <cc-divider
        :style="{
          color: '#1677ff',
          borderColor: '#1677ff',
          borderStyle: 'dashed'
        }"
      >
        自定义样式
      </cc-divider>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
