import { createApp } from 'vue'
import App from './App.vue' //if you dont put ./ then it will look for it in node modules folder
import router from './router'

createApp(App).use(router).mount('#app')
