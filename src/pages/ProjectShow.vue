<script>
import axios from 'axios';

export default {
    data(){
        return{

            baseUrl : 'http://127.0.0.1:8000/',

            projectSlug : '',

            project : {} ,

            projectExist : false , 

            isLoading : true, 


        }
    },

    mounted(){

        this.projectSlug = this.$route.params.slug;
        this.getProject();
    },

    methods : {

        getProject(){
            axios.get(this.baseUrl + 'api/projects/' + this.projectSlug).then(res =>{

               
            if(res.data.success) {

                this.projectExist = true ;
                this.project = res.data.project;
                this.isLoading = false;
            } else {

                this.projectExist = false ;
                this.isLoading = false;
            }

            })
        }
    },

    computed : {

        projectImage(){

        if(this.project.project_cover == null) {

            return 'https://icon-library.com/images/no-image-available-icon/no-image-available-icon-7.jpg';

        }  else {


            return this.baseUrl + 'storage/' + this.project.project_cover ; 
        }  


        }
    }
        

}

</script>

<template>

    <div v-if="isLoading" class="container d-flex justify-content-center my-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div v-else class="wrapper">

        <div v-if="projectExist" class="container py-5 card-container">

            <h1>Ecco i dettagli del post : {{ project.project_name }}</h1>
            <div  class="card " style="width: 25rem;">
                <img :src="projectImage" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title my-3"><strong>Project Title :</strong>  {{project.project_name}}</h5>
                    <p class="card-text my-3"><strong>Project Description :</strong>   {{project.project_description}}</p>
                    <div class="mb-3"><strong>Project Type :</strong>  {{ project.type ? project.type.name : 'Undefined' }}</div>
                    <div>
                        <strong>Technologies :</strong>
                        <div class="d-flex gap-3 my-2">
                            <span v-if="project.technologies.length != 0" v-for="technology in project.technologies" class="rounded-pill p-1" :style="{backgroundColor : technology.color}">{{ technology.name }}</span>
                            <span v-else> Undefined </span>
                        </div>

                    </div>
                    <div><strong>Created By : </strong><em>{{ project.created_by }}</em> </div>
                    <div><strong>Github Link : </strong><a :href=" project.github_link ">{{ project.github_link }}</a></div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <router-link :to="{name : 'projects.index'}" class="btn btn-primary">All Projects</router-link>
            </div>
    
        </div>
    
        <div v-else>
            <div class="alert alert-warning container my-4" role="alert">
                <span class="text-center">Nessun progetto trovato!</span> 
            </div>
        </div>

    </div>
        
</template>

<style lang="scss" scoped>

.wrapper{

    background-image: url('../assets/project-show-bg.jpeg');
    background-size: cover;
    background-position: center;

    h1{
        color: white;
    }

    .card-container{
        display: flex;
        flex-flow: column nowrap;
        gap: 30px;
        justify-content: center;
        align-items: center;
    
    }

}


</style>