import {createApp} from 'vue'
import type {CSSProperties} from 'vue'
import CcDialog from './Dialog.vue'
import CcUI from '@/components'

export interface DialogProps {
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
}

const Dialog = (config: DialogProps) => {
  const dom = document.createElement('div')
  document.body.appendChild(dom)
  const app = createApp(CcDialog, {
    close: () => {
      setTimeout(() => {
        app.unmount()
        if (dom.parentNode) {
          dom.parentNode.removeChild(dom)
        }
      }, 300)
    },
    modelValue: true,
    title: config.title || '',
    content: config.content || '',
    round: config.round || false,
    width: config.width || 320,
    showConfirmButton: config.showConfirmButton || true,
    showCancelButton: config.showCancelButton || false,
    confirmButtonText: config.confirmButtonText || '确认',
    confirmButtonColor: config.confirmButtonColor || '#ed1c24',
    cancelButtonText: config.cancelButtonText || '取消',
    cancelButtonColor: config.cancelButtonColor || 'blank',
    closeOnClickOverlay: config.closeOnClickOverlay || false,
  })
  app.use(CcUI)
  app.mount(dom)
}

export {
  Dialog
}

