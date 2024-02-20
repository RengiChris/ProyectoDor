import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import Perfil from './views/Perfil.vue'
import PerfilEdit from './views/PerfilEdit.vue'


const routes = [
    {path: '/', component: Perfil},
    {path: '/edit', component: PerfilEdit}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
