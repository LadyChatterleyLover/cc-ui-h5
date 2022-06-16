import type { App } from 'vue'
import Toast from './src/Toast.vue'

export default {
  install(app: App) {
    app.component('cc-toast', Toast)
  }
}
