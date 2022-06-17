<template>
  <cc-overlay
    v-model="visible"
    :getContainer="container"
    :closeOnClickOverlay="closeOnClickOverlay"
  >
    <div class="flex items-center justify-center h-screen">
      <div
        class="bg-white rounded-2xl fixed"
        :class="[`${visible ? 'cc-dialog-show' : 'cc-dialog-hidden'}`]"
        :style="{ ...style, width: width + 'px' }"
      >
        <div
          class="font-bold pt-7 leading-6 text-center"
          v-if="title || $slots.title"
        >
          <slot v-if="$slots.title" name="title"></slot>
          <div v-else>{{ title }}</div>
        </div>
        <div
          class="p-6 overflow-y-auto text-sm leading-5 whitespace-pre-wrap text-center break-words"
          :style="{
            color: title ? '#646566' : 'blank',
            maxHeight: 'calc(70vh - 200px)'
          }"
        >
          <slot v-if="$slots.content" name="content"></slot>
          <div v-else>{{ content }}</div>
        </div>
        <div>
          <slot v-if="$slots.footer" name="footer"></slot>
          <div v-else class="flex items-center border-t border-solid">
            <div
              v-if="showCancelButton"
              class="flex-1 flex items-center justify-center h-12"
              @click="cancel"
            >
              <cc-button
                v-if="round"
                round
                type="warning"
                size="small"
                style="width: 80%"
                >{{ cancelButtonText }}</cc-button
              >
              <div v-else>{{ cancelButtonText }}</div>
            </div>
            <div
              @click="confirm"
              class="flex-1 flex items-center justify-center h-12"
            >
              <div
                v-if="showConfirmButton"
                class="flex-1 flex items-center justify-center h-12"
                @click="cancel"
              >
                <cc-button
                  v-if="round"
                  round
                  type="warning"
                  size="small"
                  style="width: 80%"
                  >{{ confirmButtonText }}</cc-button
                >
                <div v-else class="text-primary">{{ confirmButtonText }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </cc-overlay>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { ref, computed, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    title?: string
    content?: string
    footer?: string
    width?: number | string
    showConfirmButton?: boolean
    showCancelButton?: boolean
    confirmButtonText?: string
    confirmButtonColor?: string
    cancelButtonText?: string
    cancelButtonColor?: string
    closeOnClickOverlay?: boolean
    onMaskClick?: boolean
    round?: boolean
    getContainer?: HTMLElement | (() => HTMLElement) | null
    style?: CSSProperties
    close?: (e: MouseEvent) => void
  }>(),
  {
    modelValue: false,
    title: '',
    content: '',
    round: false,
    width: 320,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确认',
    confirmButtonColor: '#ed1c24',
    cancelButtonText: '取消',
    cancelButtonColor: 'blank',
    closeOnClickOverlay: false,
    getContainer: null
  }
)
const emits = defineEmits(['click', 'cancel', 'confirm', 'update:modelValue'])

const visible = ref<boolean>(false)

const container = computed(() => {
  if (props.getContainer) {
    if (typeof props.getContainer === 'function') {
      return props.getContainer()
    } else {
      return props.getContainer
    }
  } else {
    return () => document.body
  }
})

const confirm = (e: MouseEvent) => {
  emits('confirm', e)
  props.close?.(e)
  setTimeout(() => {
    emits('update:modelValue', false)
  }, 300)
}

const cancel = (e: MouseEvent) => {
  emits('cancel', e)
  props.close?.(e)
  setTimeout(() => {
    emits('update:modelValue', false)
  }, 300)
}

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
  },
  { immediate: true }
)
watch(
  () => visible.value,
  (val) => {
    emits('update:modelValue', val)
  }
)
</script>

<style scoped lang="scss">
.cc-dialog {
  &-show {
    animation: dialog-show 0.3s linear forwards;
  }
  &-hidden {
    animation: dialog-hidden 0.3s linear forwards;
  }
}

@keyframes dialog-show {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}
@keyframes dialog-hidden {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.8);
  }
}
</style>
