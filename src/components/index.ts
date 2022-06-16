import type { App } from 'vue'
import Icon from './icon'
import Overlay from './overlay'
import Loading from './loading'
import Button from './button'
import Popup from './popup'
import Row from './row'
import Col from './col'

const components = [Icon, Overlay, Loading, Button, Popup, Row, Col]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  }
}
