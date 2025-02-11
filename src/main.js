import './beui/beui.scss'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BeUi from './beComponents'

const app = createApp(App)

app.use(BeUi)
app.use(createPinia())
app.use(router)

app.mount('#app')
