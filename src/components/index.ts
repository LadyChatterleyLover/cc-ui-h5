import type { App } from 'vue'
import Icon from './icon'
import Overlay from './overlay'
import Loading from './loading'
import Button from './button'

const components = [Icon, Overlay, Loading, Button]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  }
}
