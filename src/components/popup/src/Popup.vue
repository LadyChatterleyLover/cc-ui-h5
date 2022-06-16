<template>
  <cc-overlay
    v-model="visible"
    :background="overlay ? 'rgba(0,0,0,.5)' : '#fff'"
    :getContainer="container"
    :duration="duration"
    :closeOnClickOverlay="closeOnClickOverlay"
    @click="handleClick"
  >
    <div
      @click.stop
      class="fixed max-h-full bg-white"
      :class="[
        `cc-popup-${position}`,
        `${
          visible ? `cc-popup-${position}-show` : `cc-popup-${position}-hidden`
        }`,
        `${round ? `rounded-t-3xl` : ``}`,
        `${
          position === 'center'
            ? `
              top-1/2 
              left-1/2 
              -translate-x-1/2
              -translate-y-1/2
              px-8
              py-12`
            : ''
        }
        `
      ]"
      :style="{
        ...style,
        zIndex: Number(zIndex),
        animationDuration,
        display
      }"
    >
      <div
        v-if="closeable"
        class="absolute"
        :class="[
          `${closeIconPosition === 'top-right' ? 'right-2 top-2' : ''}`,
          `${closeIconPosition === 'top-left' ? 'left-2 top-2' : ''}`,
          `${closeIconPosition === 'bottom-right' ? 'right-2 bottom-2' : ''}`,
          `${closeIconPosition === 'bottom-left' ? 'left-2 bottom-2' : ''}`
        ]"
        @click="handleClose"
      >
        <cc-icon :size="24" color="#c8c9cc">
          <component :is="closeIcon"></component>
        </cc-icon>
      </div>
      <slot></slot>
    </div>
  </cc-overlay>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { CSSProperties } from 'vue'
import { useDisplay } from '@/hooks/useDisplay'
import type { Position } from '@/types'
import { Close } from '@vicons/ionicons5'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    zIndex?: string | number
    position?: Position
    overlay?: boolean
    duration?: number | string
    round?: boolean
    closeable?: boolean
    closeOnClickOverlay?: boolean
    closeIcon?: any
    closeIconPosition?:
      | 'top-right'
      | 'top-left'
      | 'bottom-left'
      | 'bottom-right'
    style?: CSSProperties
    getContainer?: HTMLElement | (() => HTMLElement | null)
  }>(),
  {
    modelValue: false,
    position: 'center',
    overlay: true,
    duration: 300,
    zIndex: 999,
    round: false,
    closeOnClickOverlay: false,
    closeable: false,
    closeIcon: Close,
    closeIconPosition: 'top-right'
  }
)
const emits = defineEmits(['click', 'close', 'update:modelValue'])

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
    return () => document.body
  }
})

const animationDuration = computed(() => Number(props.duration) / 1000 + 's')

const handleClick = (e: MouseEvent) => {
  emits('click', e)
}

const handleClose = (e: MouseEvent) => {
  emits('close')
  emits('update:modelValue', false)
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
.cc-popup {
  &-top {
    width: 100%;
    top: 0;
    &-show {
      animation: top-show linear forwards;
    }
    &-hidden {
      animation: top-hidden linear forwards;
    }
  }
  &-bottom {
    width: 100%;
    bottom: 0;
    &-show {
      animation: bottom-show linear forwards;
    }
    &-hidden {
      animation: bottom-hidden linear forwards;
    }
  }
  &-left {
    height: 100%;
    left: 0;
    &-show {
      animation: left-show linear forwards;
    }
    &-hidden {
      animation: left-hidden linear forwards;
    }
  }
  &-right {
    height: 100%;
    right: 0;
    &-show {
      animation: right-show linear forwards;
    }
    &-hidden {
      animation: right-hidden linear forwards;
    }
  }
}

@keyframes top-show {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes top-hidden {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

@keyframes bottom-show {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes bottom-hidden {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

@keyframes left-show {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes left-hidden {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes right-show {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes right-hidden {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
