<script>

import axios from 'axios'

import ProjectCard from '../components/ProjectCard.vue'

export default {
    data(){
        return{

            projects : [],

        }
    },

    components : {

        ProjectCard,
    
    },

    created(){

    this.getProjects();


    },

    methods : {

        getProjects (){

            axios.get('http://127.0.0.1:8000/api/projects').then(res =>{

            this.projects = res.data.results;

            });

        },    

    },
}

</script>

<template>

    <div class="cards-container container py-5">

        <div v-for="project in projects" class="card ">
            <ProjectCard :project="project"></ProjectCard>
        </div>

    </div>


</template>

<style lang="scss" scoped>

.cards-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 20px;

    .card{
        width: calc(100% / 4 - (20px / 4 * 3));
    }
    
}


</style>