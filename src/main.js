import { createApp, configureCompat } from 'vue'
import Vue from 'vue';
import { router } from './router.js'
import { Icon } from '@iconify/vue'
import App from './App.vue'


import './fonts.css'
import './style.scss'

import "~/bootstrap/dist/css/bootstrap.min.css";
import "~/bootstrap-vue/dist/bootstrap-vue.min.css";



const app = createApp(App);
app.component('iconify-icon', Icon);
app.use(router);


/* comentar esto si da errores de Vue */
Vue.config.productionTip = false;
configureCompat({ RENDER_FUNCTION: false });
app.mount('#root')