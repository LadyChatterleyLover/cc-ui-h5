<template>
  <div class="p-5">
    <div class="m-4 text-lg font-bold">基础用法</div>
    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '提示消息'
          })
        "
      >
        普通用法
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '加载提示',
            type: 'loading'
          })
        "
      >
        加载提示
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '成功提示',
            type: 'success'
          })
        "
      >
        成功提示
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '失败提示',
            type: 'fail'
          })
        "
      >
        失败提示
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '自定义图标',
            icon: GithubOutlined
          })
        "
      >
        自定义图标
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '自定义图片',
            icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png'
          })
        "
      >
        自定义图片
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '自定义位置',
            position: 'top'
          })
        "
      >
        自定义位置
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast({
            content: '底部弹出',
            position: 'bottom'
          })
        "
      >
        底部弹出
      </cc-button>
    </div>

    <div class="m-4 text-lg font-bold">指令调用</div>
    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast.loading({
            content: 'loading'
          })
        "
      >
        loading
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast.success({
            content: 'success'
          })
        "
      >
        success
      </cc-button>
    </div>

    <div class="mb-4">
      <cc-button
        type="primary"
        @click="
          Toast.fail({
            content: 'fail'
          })
        "
      >
        fail
      </cc-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from '@/components/toast/src/useToast'
import { GithubOutlined } from '@vicons/antd'
</script>
