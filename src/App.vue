<template>
  <div id="app">

    <b>        
        <nav-bar-component />  

      </b>

      <b>

        <router-view/>

      </b>

      <!--b-row>
        <b-col v-for="(poke, index) in pokemons" :key="index">
          <h1>{{index+1}} {{poke.name}}</h1>
          <pokemon :name="poke.name" :url="poke.url" :num="index+1"/>
        </b-col>
      </b-row-->

      <b>

        <footer-component />

      </b>

  </div>
</template>

<script>
import axios from 'axios'
import NavBarComponent from './components/NavBarComponent'
import FooterComponent from './components/FooterComponent'
//import Pokemon from './components/Pokemon'
//import Pokemon from './components/Pokemon'
//import home from './views/home'
//import Home from './views/home.vue'

export default {
  name: 'App',
  data(){
    return{
      pokemons:[]
    }
  },
  components: {
    NavBarComponent,
    FooterComponent
    //Pokemon
    
  },
  created: function () {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(
      res =>{
        console.log("Pegou a lista");
        this.pokemons=res.data.results;
        console.log(this.pokemons)
      }
    )



    console.log(axios);
    console.log("teste");
  }
}
</script>

<style scoped>

  #app{
    background-color: #fff;
        
  }

</style>
