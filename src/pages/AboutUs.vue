<script>
export default {
    data(){
        return{

        }
    }
}

</script>

<template>

    <div class="wrapper">

        <div class="container my-container py-5">
            <h1>Hi, my name is  <span class="name">Davide Anile</span></h1>
            <p class="text">I'm a <span class="task">Junior Web Developer</span></p>
            <div><button><router-link :to="{name : 'projects.index'}" class="link">Show Projects</router-link></button></div>
        </div>

    </div>

</template>

<style lang="scss" scoped>

.wrapper{

background-image: url('../assets/background.webp');
background-repeat: no-repeat;
background-size: cover;

.my-container{
    display: flex;
    
    flex-flow: column nowrap;

    margin-top: 100px;

    button{
        padding: 5px 20px;
        background-color: rgba(195, 0, 255, 0.637);
        border: none;
        border-radius: 10px;

        .link{
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
            color: white;
        }
    }

    .name{
    color: rgb(23, 109, 207);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

    .text{
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 1.5em;

        .task{
            font-size: 1.7em;
            background: #BD48CF;
            background: -webkit-linear-gradient(to right, #BD48CF 0%, #FFFFFF 50%, #4E44CF 100%);
            background: -moz-linear-gradient(to right, #BD48CF 0%, #FFFFFF 50%, #4E44CF 100%);
            background: linear-gradient(to right, #BD48CF 0%, #FFFFFF 50%, #4E44CF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

}

}

</style>