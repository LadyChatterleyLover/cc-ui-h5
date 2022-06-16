import type { App } from 'vue'
import Dialog from './src/Dialog.vue'

export default {
  install(app: App) {
    app.component('cc-dialog', Dialog)
  }
}
