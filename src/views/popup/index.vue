<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible1 = true">
        展示弹出层
      </cc-button>
      <cc-popup v-model="visible1">
        <div>内容</div>
      </cc-popup>
    </div>

    <div>
      <div class="m-4 text-lg font-bold">不同位置</div>
      <div class="mb-4">
        <cc-button type="primary" @click="visible2 = true">顶部弹出</cc-button>
        <cc-popup
          v-model="visible2"
          position="top"
          style="height: 30%"
        ></cc-popup>
      </div>

      <div class="mb-4">
        <cc-button type="primary" @click="visible3 = true">底部弹出</cc-button>
        <cc-popup
          v-model="visible3"
          position="bottom"
          style="height: 30%"
          @click="handleClick"
        ></cc-popup>
      </div>

      <div class="mb-4">
        <cc-button type="primary" @click="visible4 = true">左侧弹出</cc-button>
        <cc-popup
          v-model="visible4"
          position="left"
          style="width: 30%"
        ></cc-popup>
      </div>

      <div class="mb-4">
        <cc-button type="primary" @click="visible5 = true">右侧弹出</cc-button>
        <cc-popup
          v-model="visible5"
          position="right"
          style="width: 30%"
        ></cc-popup>
      </div>
    </div>

    <div>
      <div class="m-4 text-lg font-bold">关闭按钮</div>
      <div class="mb-4">
        <cc-button type="primary" @click="visible6 = true">关闭按钮</cc-button>
        <cc-popup
          v-model="visible6"
          position="bottom"
          closeable
          style="height: 30%"
        ></cc-popup>
      </div>

      <div class="mb-4">
        <cc-button type="primary" @click="visible7 = true">图标位置</cc-button>
        <cc-popup
          v-model="visible7"
          position="bottom"
          closeIconPosition="top-left"
          closeable
          style="height: 30%"
        ></cc-popup>
      </div>

      <div class="mb-4">
        <cc-button type="primary" @click="visible8 = true"
          >自定义图标</cc-button
        >
        <cc-popup
          v-model="visible8"
          position="bottom"
          closeable
          :closeIcon="CloseCircleSharp"
          style="height: 30%"
        ></cc-popup>
      </div>
    </div>

    <div>
      <div class="m-4 text-lg font-bold">圆角弹框</div>
      <div class="mb-4">
        <cc-button type="primary" @click="visible9 = true">圆角弹框</cc-button>
        <cc-popup
          v-model="visible9"
          position="bottom"
          closeable
          round
          style="height: 30%"
        ></cc-popup>
      </div>
    </div>

    <div>
      <div class="m-4 text-lg font-bold">点击遮罩层不关闭</div>
      <div class="mb-4">
        <cc-button type="primary" @click="visible10 = true"
          >点击遮罩层不关闭</cc-button
        >
        <cc-popup
          v-model="visible10"
          closeOnClickOverlay
          position="bottom"
          closeable
          round
          style="height: 30%"
        ></cc-popup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CloseCircleSharp } from '@vicons/ionicons5'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)
const visible6 = ref(false)
const visible7 = ref(false)
const visible8 = ref(false)
const visible9 = ref(false)
const visible10 = ref(false)

const handleClick = () => {
  console.log('click')
}
</script>

<style scoped></style>
