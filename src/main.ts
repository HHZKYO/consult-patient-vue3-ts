import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { Button } from 'vant'

import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(Button)

app.mount('#app')
