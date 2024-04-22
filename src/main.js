import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './assets/styles.css';
import App from './App.vue';
import router from './router/router.js'; 
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount('#app');