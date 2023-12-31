import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import components from "@/components/UI"
import store from "@/store"

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app.use(router).use(store).mount("#app")
