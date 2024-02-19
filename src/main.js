import '@/styles/common.scss'
import {useIntersectionObserver} from '@vueuse/core'
import {lazyPlugin} from "@/directives";
import { componentPlugin } from '@/components'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
app.use(componentPlugin)