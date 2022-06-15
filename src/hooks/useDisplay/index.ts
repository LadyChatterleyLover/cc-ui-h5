import { ref, watch, type Ref } from 'vue'

export const useDisplay = (
  visible: Ref<boolean>,
  duration: number | string,
  type: 'block' | 'flex' | 'none' = 'block'
) => {
  const display = ref<'block' | 'flex' | 'none'>('none')

  watch(
    () => visible.value,
    (val) => {
      if (val) {
        display.value = type
      } else {
        setTimeout(() => {
          display.value = 'none'
        }, Number(duration))
      }
    }
  )

  return [display]
}
