<template>
  <div id="county">   

    <section class="county-content">
      <div class="list-county" v-for="county in counties" :key="county.id">
        <button >
          <a :href="linkShopping">
            {{county.nome}}
          </a>
        </button>
        

      </div>
    </section>

  </div>
</template>

<script>
 
 
 
export default {
  name: 'County',
  components: {
    
  },
  data(){
    return{
      counties:[
        {id:1, nome:'Cacuaco'},
        {id:2, nome:'Cazenga'},
        {id:3, nome:'Viana'},
        {id:4, nome:'Belas'},
        {id:5, nome:'Kilamba-Kiaxi'},
        {id:6, nome:'Quissama'},
        {id:7, nome:'Luanda'},
        {id:8, nome:'Icolo e Bengo'},
        {id:9, nome:'Talatona'},
        
      ],
      linkShopping:'/shoppingList'
    }
  },
  methods:{
    
  }

}
</script>

<style scoped>

#county{
  margin-top: 1px;
  margin-bottom: 10px;
}

.county-content{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:flex-start;
  width: 100%;
  align-items: center;
}



.county-content div{
  height: 70px;
  
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
}

.county-content button{
  background-color: #696969 ;
  height: 65px;
  width: 100%;
  color: #fff;
}

.county-content button a{
  
  font-size: 18px;
  color: #fff;
}

.county-content button a:hover{
  
  font-size: 18px;
  color: red;
  cursor:pointer;
}


/* RESPONSIVIDADE */

@media(min-width: 700px){

#county{
  margin-top: 60px;
  
}

.county-content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;
  width: 100%;
  align-items: center;
  padding-bottom: 0 20px;
  margin: 100px 0;
}

.county-content div{
    
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 25%;
  padding: 0 5px;
}

.county-content button{
  background-color: #696969 ;
  height: 65px;
  width: 100%;
  color: #fff;
  padding: 0 5px;
  
}


  

}







</style>