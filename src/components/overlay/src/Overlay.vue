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
    >
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useDisplay } from '@/hooks/useDisplay'
import { computed, type CSSProperties } from 'vue'
import './index.scss'

const props = withDefaults(
  defineProps<{
    style?: CSSProperties
    visible: boolean
    zIndex?: number | string
    duration?: number | string
    getContainer?: HTMLElement | (() => HTMLElement | null)
    background?: string
  }>(),
  {
    visible: false,
    zIndex: 999,
    duration: 300,
    background: 'rgba(0,0,0,.5)'
  }
)

const emits = defineEmits(['click'])

const [display] = useDisplay(props.visible, props.duration)

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
</script>

<style scoped lang="scss"></style>
