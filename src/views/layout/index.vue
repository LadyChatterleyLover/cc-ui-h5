<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <cc-row>
      <cc-col :span="6">
        <div class="bg-blue-200 leading-8 text-center">span: 6</div>
      </cc-col>
      <cc-col :span="6">
        <div class="bg-blue-300 leading-8 text-center">span: 6</div>
      </cc-col>
      <cc-col :span="6">
        <div class="bg-blue-200 leading-8 text-center">span: 6</div>
      </cc-col>
      <cc-col :span="6">
        <div class="bg-blue-300 leading-8 text-center">span: 6</div>
      </cc-col>
    </cc-row>

    <div class="m-4 text-lg font-bold">偏移量</div>
    <div class="mb-4">
      <cc-row>
        <cc-col :span="4">
          <div class="bg-blue-200 leading-8 text-center">span: 4</div>
        </cc-col>
        <cc-col :span="10" :offset="4">
          <div class="bg-blue-300 leading-8 text-center">
            offset: 4, span: 10
          </div>
        </cc-col>
      </cc-row>
    </div>
    <div>
      <cc-row>
        <cc-col :span="12" :offset="12">
          <div class="bg-blue-200 leading-8 text-center">
            offset: 12, span: 12
          </div>
        </cc-col>
      </cc-row>
    </div>

    <div class="m-4 text-lg font-bold">间距</div>
    <cc-row :gutter="20">
      <cc-col :span="6">
        <div class="bg-blue-200 leading-8 text-center">span: 6</div>
      </cc-col>
      <cc-col :span="6">
        <div class="bg-blue-300 leading-8 text-center">span: 6</div>
      </cc-col>
      <cc-col :span="6">
        <div class="bg-blue-200 leading-8 text-center">span: 6</div>
      </cc-col>
      <cc-col :span="6">
        <div class="bg-blue-300 leading-8 text-center">span: 6</div>
      </cc-col>
    </cc-row>

    <div class="m-4 text-lg font-bold">对齐方式</div>
    <div class="mb-4">
      <cc-row justify="center">
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-300 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
      </cc-row>
    </div>
    <div class="mb-4">
      <cc-row justify="end">
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-300 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
      </cc-row>
    </div>
    <div class="mb-4">
      <cc-row justify="space-between">
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-300 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
      </cc-row>
    </div>
    <div class="mb-4">
      <cc-row justify="space-around">
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-300 leading-8 text-center">span: 6</div>
        </cc-col>
        <cc-col :span="6">
          <div class="bg-blue-200 leading-8 text-center">span: 6</div>
        </cc-col>
      </cc-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
