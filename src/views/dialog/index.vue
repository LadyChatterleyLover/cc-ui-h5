<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible1 = true">描述信息</cc-button>
      <cc-dialog
        v-model="visible1"
        title="标题"
        content="代码是写出来给人看的，附带能在机器上运行。"
      ></cc-dialog>
    </div>

    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible2 = true">无标题</cc-button>
      <cc-dialog
        v-model="visible2"
        content="代码是写出来给人看的，附带能在机器上运行。"
      ></cc-dialog>
    </div>

    <div class="m-4 text-lg font-bold">圆角按钮</div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible3 = true">确认弹框</cc-button>
      <cc-dialog
        v-model="visible3"
        title="标题"
        content="代码是写出来给人看的，附带能在机器上运行。"
        showCancelButton
      ></cc-dialog>
    </div>

    <div class="m-4 text-lg font-bold">圆角按钮</div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible4 = true">圆角按钮</cc-button>
      <cc-dialog
        v-model="visible4"
        title="标题"
        content="代码是写出来给人看的，附带能在机器上运行。"
        round
      ></cc-dialog>
    </div>

    <div class="m-4 text-lg font-bold">超长文本</div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible4 = true">超长文本</cc-button>
      <cc-dialog
        v-model="visible4"
        title="标题"
        content="代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。"
      >
        ></cc-dialog
      >
    </div>

    <div class="m-4 text-lg font-bold">自定义按钮</div>
    <div class="mb-4">
      <cc-button type="primary" @click="visible6 = true">自定义按钮</cc-button>
      <cc-dialog
        v-model="visible6"
        title="标题"
        content="代码是写出来给人看的，附带能在机器上运行。"
      >
        <template #footer>
          <div className="flex h-12 justify-center items-center">
            <cc-button type="success" size="small"> 确认 </cc-button>
          </div>
        </template>
      </cc-dialog>
    </div>

    <div class="m-4 text-lg font-bold">指令调用</div>
    <div class="mb-4">
      <cc-button type="primary" @click="Dialog({
      title: '标题',
      content: '代码是写出来给人看的，附带能在机器上运行。',
      showCancelButton: true,
      })">指令调用</cc-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {Dialog} from '@/components/dialog/src/useDialog'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)
const visible6 = ref(false)
</script>

<style scoped></style>
