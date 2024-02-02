

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';

import App from './App.vue'
import router from './router'

import "./assets/scss/style.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')