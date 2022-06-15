import { ref, watch } from 'vue'

export const useDisplay = (
  visible: boolean,
  duration: number | string,
  type: 'block' | 'flex' | 'none' = 'block'
) => {
  const display = ref<'block' | 'flex' | 'none'>('none')

  watch(
    () => visible,
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
