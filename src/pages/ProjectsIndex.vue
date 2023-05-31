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
    
        <div class="wrapper">

            <div class="cards-container container py-5">
        
                <div v-for="project in projects" class="card ">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
        
            </div>

        </div>

        


   

   



</template>

<style lang="scss" scoped>

.wrapper{

    background-image: url('../assets/projects-bg.jpg');
}
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

@media only screen and (max-width: 1200px) {

    .cards-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 20px;

        .card{
            width: calc(100% / 3 - (20px / 3 * 2));
        }
        
    }

}


 @media only screen and (max-width: 992px) {


        .cards-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 20px;

        .card{
            width: calc(100% / 2 - (20px / 2 * 1));
        }
        
    }

}

@media only screen and (max-width: 768px) {


    .cards-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: 20px;

        .card{
            width: 100%;
        }
        
    }

}


</style>