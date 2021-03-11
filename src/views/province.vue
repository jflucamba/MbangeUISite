<template>

  <div id="province" class="province">

    <b-container>

      <b-row class="detalhe-provincia">

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Luanda</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Benguela</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Huíla</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            
            <a href="/county">Huambo</a>

          </div>
        </b-col>

      </b-row>

      <b-row class="detalhe-provincia">

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Malanje</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Cuanza-Sul</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Cuanza-Norte</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            
            <a href="/county">Bengo</a>

          </div>
        </b-col>

      </b-row>

      <b-row class="detalhe-provincia">

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Bié</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Uíge</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Namibe</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            
            <a href="/county">Cabinda</a>

          </div>
        </b-col>

      </b-row>

      <b-row class="detalhe-provincia">

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Zaire</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Lunda-Norte</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Lunda-Sul</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            
            <a href="/county">Móxico</a>

          </div>
        </b-col>

      </b-row>

      <b-row class="detalhe-provincia">

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Cuando-Cubango</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes">
          <div class="texto">
            <a href="/county">Cunené</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes visibilidade">
          <div class="texto">
            <a href="/county">Huíla</a>
          </div>
        </b-col>

        <b-col class="mais-detalhes visibilidade">
          <div class="texto">
            
            <a href="/county">Huambo</a>

          </div>
        </b-col>

      </b-row>

    </b-container>
        
  </div>

</template>


<script>

import api from '@/services/api'

export default {
    data(){
      return{
        province:[]
      }
    },
    mounted(){
       api.get('/province.json').then(response => {
         console(response.data.province)
           //this.province= response.data.province;
       });
   }
}
</script>

<style scoped>
ul li{
  list-style: none;
  display: inline;
}

#province{
  margin: 0 auto;
  padding: 0;
}

.province{
  width: 100%;
}

.container-province{
  
  font-size: xx-small;
}

.detalhe-provincia{
  /*background-color: red;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
}

.mais-detalhes{
  
  justify-content: center;
  align-items: center;
  margin: 5px auto;
}

.mais-detalhes div{
  background-color:#6f42c1;
  width: 100%;
  height: 70px;
  border-radius: 3%;
  
}

.texto{
  text-align: center;  
  padding-top: 25px;
  justify-content: center;
  align-items: center
}

.mais-detalhes .texto a{
  text-decoration: none;
  color: #fff;
}

.visibilidade{
  visibility: hidden;
}



/* RESPONSIVIDADE */

/*@mixin for-phone-only {*/
  @media (max-width: 599px) { 
    
      #province{
      
    }

   }


/*}*/


/*@mixin for-tablet-portrait-up {*/
  @media (min-width: 600px) { 

    #province{
      
    }


  

  .card-largura{
    width: 75px;
    
  }

  .province{
    width: 100%;
  }

  .container-province{
  display: flex;
  
  width: 100%;
  font-size: 16px;
  
  }


}


/*}*/


/*@mixin for-tablet-landscape-up {*/


  @media (min-width: 900px) { 

    #province{
      
    }

   }


/*}*/


/*@mixin for-desktop-up {*/


  @media (min-width: 1200px) { 

      #province{
      
    }

   }


/*}*/


/*@mixin for-big-desktop-up {*/


  @media (min-width: 1800px) { 

    #province{
      
    }

   }


/*}*/

</style>