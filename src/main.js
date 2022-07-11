import { createApp } from 'vue'
import App from './App.vue'
import UI from '@/components/ui'
import router from '@/router/router';
import directives from '@/directives';
import store from '@/store';

const LED = createApp(App)

UI.forEach(component => {
    LED.component(component.name, component)
})

directives.forEach(directives => {
    LED.directive(directives.name, directives)
})

LED.use(router).use(store).mount('#app')
