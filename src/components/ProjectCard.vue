<script>

import axios from 'axios';

export default {
    data(){
        return{

            projects : [],

        }
    },


    created(){

        this.getProjects();
    },


    methods : {

        getProjects (){

            axios.get('http://127.0.0.1:8000/api/projects').then(res =>{
                
            this.projects = res.data.results;
            
            

            })

        },

    

    }
}

</script>

<template>
 <div class="container">
    <div class="card-container row">
        <div v-for="project in projects" class="card col-3 my-4 mx-2">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">{{ project.project_name }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Created by : <em>{{ project.created_by }}</em></li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Github Link</a>
                
            </div>
        </div>
    </div>
 </div>
</template>

<style lang="scss" scoped>

.card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

</style>