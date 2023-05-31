import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectShow from './pages/ProjectShow.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({

    history : createWebHistory(),
    routes : [

        {
            path : '/',
            name : 'home',
            component : AppHome,
            meta : {
                title :'Home'
            }
        },

        {
            path : '/projects',
            name : 'projects.index',
            component : ProjectsIndex,
            meta : {
                title : 'Projects'
            }
        },

        {
            path : '/about-me',
            name : 'about',
            component : AboutUs,
            meta : {
                title : 'About'
            }
        },

        {
            path : '/projects/:slug',
            name : 'project.show',
            component : ProjectShow,
        }
    ]

});

router.beforeEach((to) =>{
    document.title = to.meta?.title ? 'Portfolio - ' + to.meta.title : 'Porfolio';
}) 

export { router };