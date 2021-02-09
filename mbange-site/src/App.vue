<template>
  <div id="app">

    <b>        
        <nav-bar-component />  

      </b>

      <b>

        <router-view/>

      </b>

      <b>

        <footer-component />

      </b>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent'
import FooterComponent from './components/FooterComponent'

//import home from './views/home'
//import Home from './views/home.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    FooterComponent
  }
}
</script>

<style scoped>

  #app{
    background-color: #DCDCDC;
        
  }

</style>
