<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  data(){
    return {

    }
  },

  components : {

    AppHeader,
    AppFooter,
   
  }
}

</script>

<template>

  
  <div class="wrapper">

    <AppHeader></AppHeader>
  
    
    <router-view></router-view>
    
  
  
  
    <AppFooter></AppFooter>

  </div>

  
</template>

<style lang="scss" scoped>

.wrapper{
  display: flex;
  flex-flow: column nowrap;
  
  

  

}

</style>
