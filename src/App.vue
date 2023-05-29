<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';

export default {
  data(){
    return {

    }
  },

  components : {

    AppHeader,
    AppFooter,
    AppMain,
  }
}

</script>

<template>

  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <AppFooter></AppFooter>
  
</template>

<style scoped>

</style>
