import * as Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";

import './assets/main.css'

const app = Vue.createApp(App);
app.use(router);
window.vm = app.mount('#app');

