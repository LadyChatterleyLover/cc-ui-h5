<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
    :class="[`${visible ? 'cc-toast-show' : 'cc-toast-hidden'}`]"
    :style="{ display }"
  >
    <div
      class="absolute bg-black text-white px-8 py-2 w-fit rounded-lg"
      :class="[`${type || $slots.icon ? 'py-3' : ''}`]"
      :style="{ top: positionValue }"
    >
      <div class="my-2 flex justify-center" v-if="icon">
        <cc-icon :size="40" v-if="typeof icon !== 'string'">
          <component :is="icon"></component>
        </cc-icon>
        <img v-else :src="icon" width="40" height="40" />
      </div>
      <div v-if="!icon && type" class="my-2 flex justify-center">
        <cc-icon :size="40" v-if="type === 'success'">
          <CheckOutlined />
        </cc-icon>
        <cc-icon :size="40" v-else-if="type === 'fail'">
          <ExclamationOutlined />
        </cc-icon>
        <cc-loading :size="40" v-else-if="type === 'loading'"></cc-loading>
      </div>
      <div class="flex justify-center" :class="[`${type ? 'mb-2' : ''}`]">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import type { VNode } from 'vue'
import { ExclamationOutlined, CheckOutlined } from '@vicons/antd'
import { useDisplay } from '@/hooks/useDisplay'

const props = withDefaults(
  defineProps<{
    visible?: boolean
    icon?: VNode
    content: string
    type?: '' | 'loading' | 'success' | 'fail'
    duration?: number | string
    position?: 'center' | 'top' | 'bottom'
    getContainer?: HTMLElement | (() => HTMLElement) | null
    close?: (e?: MouseEvent) => void
  }>(),
  {
    visible: false,
    type: '',
    duration: 2000,
    position: 'center',
    content: ''
  }
)

const toastVisible = ref(false)

const [display] = useDisplay(toastVisible, props.duration, 'flex')

const positionValue = computed(() => {
  if (props.position === 'top') return '20%'
  if (props.position === 'bottom') return '80%'
})

watch(
  () => props.visible,
  (val) => {
    toastVisible.value = val
  },
  {
    immediate: true
  }
)

onMounted(() => {
  props.close?.()
})
</script>

<style lang="scss" scoped>
.cc-toast {
  opacity: 0;

  &-show {
    animation: show 0.3s linear forwards;
  }

  &-hidden {
    animation: hidden 0.3s linear forwards;
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hidden {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
