import { createApp } from 'vue'
import App from './App.vue'
import UI from '@/components/ui'
import router from "@/router/router";

const LED = createApp(App)

UI.forEach(component => {
    LED.component(component.name, component)
})

LED.use(router).mount('#app')
