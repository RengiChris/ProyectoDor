import { createRouter, createWebHistory } from "vue-router";
import Posts from "./components/Posts.vue";
import PostComentario from "./components/posts/PostComentarios.vue";
import Tendencias from "./components/Tendencias.vue";

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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;