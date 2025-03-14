import './beui/beui.scss'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BeUi from './beComponents'
import Toast from './plugins/toast'
import Tooltip from './plugins/tooltip'

const app = createApp(App)

app.use(BeUi)
app.use(Toast, {
  // useTitle: false,
  // useIcon: true,
  // clickToClose: true,
  // closeButton: true,q
  position: 'top-center',
  // round: false,
  // theme: 'light',
  // timeout: 5000,
  // freeze: true,
  // transition: 'swing',
  // maxLine: 3,
  // maxWidth: 250,
  snackbar: true,
})
app.use(Tooltip, {
  // trigger: 'hover', // click | hover
  maxWidth: 250,
  // size: 'normal',
  // theme: 'dark', // light | dark
  // direction: 'top', // top | bottom | left | right
  // align: 'center', // start | center | end
  // transition: 'linear',
  // textAlign: 'left',
  // offset: 10,
  // customClass: 'be-tooltip',
})
app.use(createPinia())
app.use(router)

app.mount('#app')
