import type { App } from 'vue'
import Popup from './src/Popup.vue'

export default {
  install(app: App) {
    app.component('cc-popup', Popup)
  }
}
