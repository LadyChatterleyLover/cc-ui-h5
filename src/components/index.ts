import type { App } from 'vue'
import Icon from './icon'
import Overlay from './overlay'
import Loading from './loading'
import Button from './button'
import Popup from './popup'

const components = [Icon, Overlay, Loading, Button, Popup]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  }
}
