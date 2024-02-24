import { createRouter, createWebHashHistory} from "vue-router";
import  EditForm  from "../views/EditForm/EditForm.vue"
import ProfileContent from "../views/ProfileContent/ProfileContent.vue"
const router = createRouter({
    history:createWebHashHistory(),
    routes :[
        {path:"/", name:"ProfileContent",component:ProfileContent},
        {path:"/edit_form", name:"EditForm",component:EditForm}
    ]
})
export default router