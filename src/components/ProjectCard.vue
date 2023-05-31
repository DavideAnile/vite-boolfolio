<script>



export default {
    data(){
        return{

            baseUrl : 'http://127.0.0.1:8000/',
            

        }
    },

    props : {

        project : Object,
    },

    computed : {

        shortDesc(){
           
            return this.project.project_description.substring(0 , 60) + '...' ;
            
        },

        shortTitle(){

            return this.project.project_name.substring(0, 20) + '...';
        },

        projectImage(){

            if(this.project.project_cover == null){

                return 'https://icon-library.com/images/no-image-available-icon/no-image-available-icon-7.jpg'
            
            } else {
                
                return this.baseUrl + 'storage/' + this.project.project_cover;
            }

        }
    },

    


   
}

</script>

<template>
 <div class="container">
    <div class="card-container row">
        <div class="card">
            <div class="img-container">
                <img class="card-img-top my-img" :src=" projectImage " alt="Card image ">
            </div>

            <div class="body-wrapper">
                <div class="card-body">
                    <h5 class="card-title">{{ shortTitle }}</h5>
                    <div class="mb-3">Project type :  <strong>{{ project.type.name }}</strong></div>
                    <div>
                        <span>Technologies :</span>

                            <span v-if="project.technologies.length == 0"> <em> Undefined </em></span>
                            <span v-else v-for="technology in project.technologies" class="badge rounded-pill m-2" :style="{backgroundColor : technology.color}">{{  technology.name  }}</span>
                        
                    </div>
                    <span><strong>Description :</strong></span>
                    <p class="card-text py-2">{{ shortDesc }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Created by : <em>{{ project.created_by }}</em></li>
                </ul>
                <div class="card-body show-button">
                    <router-link :to="{name : 'project.show' , params : {slug : project.slug}}" class="btn btn-primary">Mostra</router-link>
                </div>
                    

            </div>
        </div>
    </div>
 </div>
</template>

<style lang="scss" scoped>

.card{
    padding: 0;

    .body-wrapper{
        padding: 0 10px;

        .show-button{
            display: flex;
            justify-content: center;
        }
    }
}

</style>
                        

