import {ref, computed} from 'vue';
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Map from './components/Map.vue'
import NoEncontrado from './components/NoEncontrado.vue'

export const routes = {
    '/': Home,
    '/login': Login, /* <Componente /> */
    '/map': Map
}

export const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
currentPath.value = window.location.hash
})

export const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NoEncontrado
})


export default routes;