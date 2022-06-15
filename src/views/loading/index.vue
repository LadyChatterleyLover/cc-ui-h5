<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="flex items-center flex-wrap">
      <div class="mr-4 mb-4">
        <cc-loading></cc-loading>
      </div>
      <div class="mr-4 mb-4">
        <cc-loading type="spinner"></cc-loading>
      </div>
    </div>

    <div class="m-4 text-lg font-bold">自定义颜色</div>
    <div class="mr-4 mb-4">
      <cc-loading color="#0081ff"></cc-loading>
    </div>

    <div class="m-4 text-lg font-bold">自定义尺寸</div>
    <div class="mr-4 mb-4">
      <cc-loading size="{30}"></cc-loading>
    </div>

    <div class="m-4 text-lg font-bold">加载文案</div>
    <div class="mr-4 mb-4">
      <cc-loading>加载中...</cc-loading>
    </div>

    <div class="m-4 text-lg font-bold">纵向排列</div>
    <div class="mr-4 mb-4">
      <cc-loading vertical>加载中...</cc-loading>
    </div>

    <div class="m-4 text-lg font-bold">自定义文本颜色和大小</div>
    <div class="mr-4 mb-4">
      <cc-loading color="#0081ff" textColor="#0081ff" textSize="20">
        加载中...
      </cc-loading>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
