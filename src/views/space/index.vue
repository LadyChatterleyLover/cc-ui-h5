<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div>
      <cc-space>
        <cc-button type="primary">按钮1</cc-button>
        <cc-button type="primary">按钮2</cc-button>
        <cc-button type="primary">按钮3</cc-button>
      </cc-space>
    </div>

    <div class="m-4 text-lg font-bold">间距</div>
    <div>
      <cc-space :gap="20">
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
      </cc-space>
    </div>

    <div class="m-4 text-lg font-bold">换行</div>
    <div>
      <cc-space wrap>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
      </cc-space>
    </div>

    <div class="m-4 text-lg font-bold">垂直方向</div>
    <div>
      <cc-space direction="vertical">
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
        <cc-button type="primary">按钮</cc-button>
      </cc-space>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
