import '@/styles/common.scss'
import { getCategoryAPI } from '@/apis/testApi'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 获得响应的结果
getCategoryAPI().then(res => {
  
})
app.mount('#app')
