import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { Button } from 'vant'
import pinia from './stores'

import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Button)

app.mount('#app')
