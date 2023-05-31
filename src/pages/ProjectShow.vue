<script>
import axios from 'axios';

export default {
    data(){
        return{

            baseUrl : 'http://127.0.0.1:8000/',

            projectSlug : '',

            project : {} ,


        }
    },

    mounted(){

        this.projectSlug = this.$route.params.slug;
        this.getProject();
    },

    methods : {

        getProject(){
            axios.get(this.baseUrl + 'api/projects/' + this.projectSlug).then(res =>{

            this.project = res.data.project;
            
            })
        }
    }
        

}

</script>

<template>
    <div class="container py-5">
        <h1>{{ project.project_name }}</h1>

        
    </div>
</template>

<style lang="scss" scoped>

</style>