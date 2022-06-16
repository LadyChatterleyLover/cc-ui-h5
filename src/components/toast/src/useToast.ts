import { createApp, type VNode } from 'vue'
import CcToast from './Toast.vue'
import CcUI from '@/components'

export interface ToastProps {
  visible?: boolean
  content: string
  icon?: any
  type?: '' | 'loading' | 'success' | 'fail'
  duration?: number | string
  position?: 'center' | 'top' | 'bottom'
}

const Toast = (config: ToastProps) => {
  const dom = document.createElement('div')
  document.body.appendChild(dom)
  let app: any = null
  let currentConfig = {
    ...config,
    visible: true,
    close: () => {
      setTimeout(() => {
        close()
        destroy()
      }, Number((config.duration = 2000)))
    }
  }

  function render(props: ToastProps) {
    app = createApp(CcToast, { ...props })
  }

  function destroy() {
    setTimeout(() => {
      app?.unmount()
      if (dom!.parentNode) {
        dom?.parentNode.removeChild(dom)
      }
    }, 300)
  }

  function close() {
    render({
      ...currentConfig,
      visible: false
    })
  }

  render(currentConfig)
  app.use(CcUI)
  app.mount(dom)
}

const useToastLoading = (config: ToastProps) => {
  Toast({
    ...config,
    type: 'loading'
  })
}
const useToastSuccess = (config: ToastProps) => {
  Toast({
    ...config,
    type: 'success'
  })
}
const useToastFail = (config: ToastProps) => {
  Toast({
    ...config,
    type: 'fail'
  })
}

Toast.loading = useToastLoading
Toast.success = useToastSuccess
Toast.fail = useToastFail

export { Toast }
