<template>
  <div id="province">   

    <section class="province-content">
      <div class="list-province" v-for="province in provinces" :key="province.id">
        <button >
          <a href="/county">
            {{province.nome}}
          </a>
        </button>
        

      </div>
    </section>

  </div>
</template>

<script>
 
 
 
export default {
  name: 'Province',
  components: {
    
  },
  data(){
    return{
      provinces:[
        {id:1, nome:'Luanda'},
        {id:2, nome:'Benguela'},
        {id:3, nome:'Huambo'},
        {id:4, nome:'Huíla'},
        {id:5, nome:'Cabinda'},
        {id:6, nome:'Malanje'},
        {id:7, nome:'Lunda-Norte'},
        {id:8, nome:'Lunda-Sul'},
        {id:9, nome:'Móxico'},
        {id:10, nome:'Namibe'},
        {id:11, nome:'Bengo'},
        {id:12, nome:'Uíge'},
        {id:13, nome:'Cuanza-Sul'},
        {id:14, nome:'Cuanza-Norte'},
        {id:15, nome:'Cunene'},
        {id:16, nome:'Bié'},
        {id:17, nome:'Cuando-Cubango'},
        {id:18, nome:'Zaire'}
      ]
    }
  }

}
</script>

<style scoped>

#province{
  margin-top: 1px;
  margin-bottom: 10px;
}

.province-content{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:flex-start;
  width: 100%;
  align-items: center;
}



.province-content div{
  height: 70px;
  
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
}

.province-content button{
  background-color: #696969 ;
  height: 65px;
  width: 100%;
  color: #fff;
}

.province-content button a{
  
  font-size: 18px;
  color: #fff;
}

.province-content button a:hover{
  
  font-size: 18px;
  color: red;
  cursor:pointer;
}


/* RESPONSIVIDADE */

@media(min-width: 700px){

#province{
  margin-top: 60px;
  
}

.province-content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;
  width: 100%;
  align-items: center;
  padding-bottom: 0 20px;
  margin: 80px 0;
}

.province-content div{
    
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 25%;
  padding: 0 5px;
}

.province-content button{
  background-color: #696969 ;
  height: 65px;
  width: 100%;
  color: #fff;
  padding: 0 5px;
  
}


  

}







</style>