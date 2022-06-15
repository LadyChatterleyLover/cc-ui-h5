import type { App } from 'vue'
import Icon from './icon'
import Overlay from './overlay'

const components = [Icon, Overlay]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  }
}
