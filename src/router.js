import {ref, computed} from 'vue';
import Posts from './components/Posts.vue'
import PostComentario from './components/posts/PostComentarios.vue';
import Login from './components/Login.vue'
import Map from './components/Map.vue'
import NoEncontrado from './components/NoEncontrado.vue'

export const routes = {
        '/': {
            "component": Posts,  /* <Componente /> */
            "name": 'Inicio',  /* <Nombre /> */
            "visible": true,
            "path": '/'
        },
        '/login': {
            "component": Login,
            "name": 'Login',
            "visible": true,
            "path": '/login'
        },
        '/map': {
            "component": Map,
            "name": 'Ubicaciones',
            "visible": false,
            "path": '/map'
        },
        '/post': {
            "component": PostComentario,
            "name": 'Post',
            "visible": false,
            "path": '/post'
        }
};
   
export const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
    console.log(currentPath.value);
})

export const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'].component || NoEncontrado
})


export default routes;