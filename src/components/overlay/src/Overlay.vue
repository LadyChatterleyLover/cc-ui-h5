<template>
  <teleport :to="container">
    <div
      class="cc-overlay fixed top-0 bottom-0 left-0 right-0"
      :class="[`${visible ? 'cc-overlay-show' : 'cc-overlay-hidden'}`]"
      :style="{
        display,
        zIndex: Number(zIndex),
        background,
        animationDuration
      }"
      @click="handleClick"
    >
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useDisplay } from '@/hooks/useDisplay'
import { ref, computed, watch, type CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    style?: CSSProperties
    zIndex?: number | string
    duration?: number | string
    getContainer?: HTMLElement | (() => HTMLElement | null)
    background?: string
  }>(),
  {
    modelValue: false,
    zIndex: 999,
    duration: 300,
    background: 'rgba(0,0,0,.5)'
  }
)

const emits = defineEmits(['click', 'update:modelValue'])
const visible = ref<boolean>(false)

const [display] = useDisplay(visible, props.duration)

const container = computed(() => {
  if (props.getContainer) {
    if (typeof props.getContainer === 'function') {
      return props.getContainer()
    } else {
      return props.getContainer
    }
  } else {
    return document.body
  }
})

const animationDuration = computed(() => Number(props.duration) / 1000 + 's')

const handleClick = (e: MouseEvent) => {
  emits('update:modelValue', !props.modelValue)
  emits('click', e)
}

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.cc-overlay {
  opacity: 0;
  &-show {
    animation: show linear forwards;
  }
  &-hidden {
    animation: hidden linear forwards;
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
