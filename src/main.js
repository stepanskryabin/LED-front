import { createApp } from 'vue'
import App from './App.vue'
import UI from '@/components/ui'

const LED = createApp(App)

UI.forEach(component => {
    LED.component(component.name, component)
})

LED.mount('#app')
