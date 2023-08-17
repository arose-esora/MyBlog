import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import veutify from './plugins/veutify'

createApp(App).use(veutify).mount('#app')
