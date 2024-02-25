import { createApp } from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { router } from './router.js'
import App from './App.vue'
import './fonts.css'
import './style.scss'
import "~/bootstrap/scss/bootstrap.scss";
import "~/bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);
app.use(router)
app.use(BootstrapVue);
app.use(BootstrapVueIcons);
app.mount('#root')