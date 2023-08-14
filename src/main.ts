import './assets/base.css'
import '@dbetka/vue-material-icons/dist/index.css'
import materialIcons from '@dbetka/vue-material-icons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(materialIcons)

app.mount('#app')
