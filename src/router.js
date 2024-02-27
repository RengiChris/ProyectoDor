import { createRouter, createWebHistory } from "vue-router";
import Posts from "./components/Posts.vue";
import PostComentario from "./components/posts/PostComentarios.vue";
import Tendencias from "./components/Tendencias.vue";
/* antonio */
import vistaPerfilComercio from './components/vistaPerfilComercio.vue';
/* ronald */
import  EditForm  from "./components/views/EditForm/EditForm.vue"
import ProfileContent from "./components/views/ProfileContent/ProfileContent.vue"
/* rengifo */
import Perfil from "./components/views/Perfil/Perfil.vue"
import PerfilEdit from "./components/views/Perfil/PerfilEdit.vue"
export const routes = [
  {
    name: "Inicio" /* <Nombre /> */,
    path: "/", /* <Ruta que tendrá */ 
    component: Posts /* <Componente /> */,
    visible: true /* <Visibilidad en header /> */
  },
  {
    name: "Post",
    path: "/post/:id",
    component: PostComentario,
    visible: false
  },
  {
    name: "Tendencia",
    path: "/tendencias/:tendencia",
    component: Tendencias,
    visible: false
  },
  /* antonio */
  {
    name: "Vista Perfil Comercio",
    path: "/perfil/comercio",
    component: vistaPerfilComercio,
    visible: false
  },
  /* ronald */
  {
    path:"/perfil/contenido", 
    name:"ProfileContent",
    component: ProfileContent, 
    visible: false
  },
  { 
    path:"/edit_form", 
    name: "EditForm",
    component:EditForm, 
    visible: false
  },
  /* rengifo */
  { 
    path:"/perfil", 
    name: "Perfil",
    component: Perfil, 
    visible: false
  },
  { 
    path:"/perfil/edit", 
    name: "Perfil Edit",
    component: PerfilEdit, 
    visible: false
  },

];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;