import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({

    history : createWebHistory(),
    routes : [

        {
            path : '/',
            name : 'home',
            component : AppHome,
        },

        {
            path : '/projects',
            name : 'projects.index',
            component : ProjectsIndex,
        },

        {
            path : '/about-me',
            name : 'about',
            component : AboutUs,
        }
    ]

});

export { router };