import type { App } from 'vue'
import Icon from './icon'
import Overlay from './overlay'
import Loading from './loading'
import Button from './button'
import Popup from './popup'
import Row from './row'
import Col from './col'
import Space from './space'
import Dialog from './dialog'
import Toast from './toast'
import Divider from './divider'

const components = [
  Icon,
  Overlay,
  Loading,
  Button,
  Popup,
  Row,
  Col,
  Space,
  Dialog,
  Toast,
  Divider
]

export default {
  install(app: App) {
    components.map((c) => {
      app.use(c)
    })
  }
}
