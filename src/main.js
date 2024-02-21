import { createApp } from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './fonts.css'
import './style.scss'
import "~/bootstrap/scss/bootstrap.scss";
import "~/bootstrap-vue/dist/bootstrap-vue.css";
import App from './App.vue'
const app = createApp(App);
app.use(BootstrapVue);
app.use(BootstrapVueIcons);
createApp(App).mount('#root')
