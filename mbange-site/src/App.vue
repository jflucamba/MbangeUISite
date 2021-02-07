<template>
  <div id="app">
    <div>
      
      <nav-bar-component />
      
      <router-view/>

      <footer-component />
      



    </div>
    
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

<style>
  footer {
    position: absolute;
    bottom: 0;
    background-color: blue;
    color: #FFF;
    width: 100%;
    height: 100px;    
    text-align: center;
    line-height: 100px;
}
</style>
