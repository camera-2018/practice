import {
  createApp
} from 'vue'
import App from './App.vue'
import routes from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import {
  createPinia
} from 'pinia'
import 'uno.css'
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')