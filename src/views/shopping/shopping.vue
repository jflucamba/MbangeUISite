<template>

  <div id="">

    <b-container>              
        
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Luanda</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Benguela</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Huíla</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Huambo</a>
            </b-card-text>
          </b-card>

        </b-card-group> <br>

        
        <b-card-group deck>
          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Malanje</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Cabinda</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Namibe</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/shoppingCounty">Bengo</a>
            </b-card-text>
          </b-card>

        </b-card-group> <br>

        <b-card-group deck>
          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Lunda-Sul</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Lunda-Norte</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Cuanza-Sul</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Cuanza-Norte</a>
            </b-card-text>
          </b-card>

        </b-card-group> <br>

        <b-card-group deck>
          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Luanda</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Benguela</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Huíla</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/loja">Huambo</a>
            </b-card-text>
          </b-card>

        </b-card-group> <br>
        

        

      </div>

      
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

.card-largura{
  width: 75px;
}







</style>