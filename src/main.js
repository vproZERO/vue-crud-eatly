import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import { createRouter , createWebHistory } from 'vue-router'
import ProjectCreate from './pages/ProjectCreate.vue'
import ProjectList from './pages/ProjectList.vue'
import SiteBar from './pages/SiteBar.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/' , component: SiteBar},
        {path: '/admin/list', component:ProjectList},
        {path: '/admin/create', component:ProjectCreate},
        
    ],
});


createApp(App).use(router).mount('#app')
