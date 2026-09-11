import Servicios from "../views/Servicios.vue"
import Biblioteca from "../views/Biblioteca.vue"
import Bienestar from "../views/Bienestar.vue"
import Cafeteria from "../views/Cafeteria.vue"
import Coordinacion from "../views/Coordinacion.vue"
import Enfermeria from "../views/Enfermeria.vue"
import Acerca from "../views/Acerca.vue"
import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    {path:"/", component:Servicios},
    {path:"/Biblioteca", component:Biblioteca},
    {path:"/Bienestar", component:Bienestar},
    {path:"/Cafeteria", component:Cafeteria},
    {path:"/Coordinacion", component:Coordinacion},
    {path:"/Enfermeria", component:Enfermeria},
    {path:"/Acerca", component:Acerca}
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})
