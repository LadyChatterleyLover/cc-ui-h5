<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="flex items-center flex-wrap">
      <div class="mr-4 mb-4">
        <cc-button>default</cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="primary">primary</cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="success">success</cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="warning">warning</cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="danger">danger</cc-button>
      </div>
    </div>

    <div class="m-4 text-lg font-bold">块级按钮</div>
    <div>
      <cc-button block type="primary"> block </cc-button>
    </div>

    <div class="m-4 text-lg font-bold">圆角按钮</div>
    <div>
      <cc-button round type="primary"> round </cc-button>
    </div>

    <div class="m-4 text-lg font-bold">图标</div>
    <div>
      <cc-button type="primary">
        <template #icon>
          <Search16Regular></Search16Regular>
        </template>
        搜索
      </cc-button>
    </div>

    <div class="m-4 text-lg font-bold">加载状态</div>
    <div class="flex items-center flex-wrap">
      <div class="mr-4 mb-4">
        <cc-button loading type="primary"> loading </cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button loading loadingType="spinner" type="primary">
          loading
        </cc-button>
      </div>
    </div>

    <div class="m-4 text-lg font-bold">禁用状态</div>
    <div class="flex items-center flex-wrap">
      <div class="mr-4 mb-4">
        <cc-button disabled type="primary"> disabled </cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button disabled>disabled</cc-button>
      </div>
    </div>

    <div class="m-4 text-lg font-bold">朴素按钮</div>
    <div class="flex items-center flex-wrap">
      <div class="mr-4 mb-4">
        <cc-button plain>default</cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="primary" plain> primary </cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="success" plain> success </cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="warning" plain> warning </cc-button>
      </div>

      <div class="mr-4 mb-4">
        <cc-button type="danger" plain> danger </cc-button>
      </div>
    </div>

    <div class="m-4 text-lg font-bold">不同尺寸</div>
    <div class="flex items-center flex-wrap">
      <div class="mr-4 mb-4">
        <cc-button type="primary" size="mini"> mini </cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="primary" size="small"> small </cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="primary" size="middle"> middle </cc-button>
      </div>
      <div class="mr-4 mb-4">
        <cc-button type="primary" size="large"> large </cc-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search16Regular } from '@vicons/fluent'
</script>

<style scoped></style>
