<template>
  <div id="app">
    <div>
      
      <NavBarComponent msg="Welcome to Your Vue.js App"/>
    </div>
    
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent
  }
}
</script>

<style>

</style>
