<script>

export default {
    data(){
        return{

        }
    }
}

</script>

<template>
 <div class="container py-5">
    <div>Benvenuto!</div>

    <router-link :to="{name : 'projects.index'}">Vai ai progetti!</router-link>

    <br>

    <router-link :to="{name : 'about'}">Chi sono?</router-link>

    
 </div>
</template>

<style lang="scss" scoped>

</style>