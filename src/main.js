import * as Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import axios from 'axios'

import './assets/main.css'
window.axios =axios;

var app = Vue.createApp(App);
app.use(router);
window.vm = app.mount('#app');

