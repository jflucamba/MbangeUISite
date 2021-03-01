<template>

  <div id="province">

    <b-container>              
        
      <b-row class="mt-3">

        <b-col>

          
            <b-card-group deck>

            
              <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Luanda</a>
              </b-card-text>
            </b-card>
            

                    
            

            <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Benguela</a>
              </b-card-text>
            </b-card>

            <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Huíla</a>
              </b-card-text>
            </b-card>

            <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Huambo</a>
              </b-card-text>
            </b-card>

          </b-card-group>
          

        </b-col>

      </b-row>

      <b-row class="mt-2">

        <b-col>

          <b-card-group deck>
          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Malanje</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Cabinda</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Namibe</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Bengo</a>
            </b-card-text>
          </b-card>

        </b-card-group>

        </b-col>

      </b-row>

      <b-row class="mt-2">
        
        <b-col>

          <b-card-group deck>
            <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Lunda-Sul</a>
              </b-card-text>
            </b-card>

            <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Lunda-Norte</a>
              </b-card-text>
            </b-card>

            <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Cuanza-Sul</a>
              </b-card-text>
            </b-card>

            <b-card bg-variant="light"  class="text-center card-largura">

              <b-card-text>
                <a href="/county">Cuanza-Norte</a>
              </b-card-text>
            </b-card>

          </b-card-group> 

        </b-col>

      </b-row>

      <b-row class="mt-2">

        <b-col>

        <b-card-group deck>
          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Uíge</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Móxico</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Cunené</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Zaire</a>
            </b-card-text>
          </b-card>

        </b-card-group>       

        </b-col>

      </b-row>

      <b-row class="mt-2">

        <b-col>

          <b-card-group deck class="mt-2 mb-2">
          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Cuando-Cubango</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura">
            
            <b-card-text>
              <a href="/county">Bié</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura visivel">
            
            <b-card-text>
              <a href="/county">Huíla</a>
            </b-card-text>
          </b-card>

          <b-card bg-variant="light"  class="text-center card-largura visivel">
            
            <b-card-text>
              <a href="/county">Huambo</a>
            </b-card-text>
          </b-card>

        </b-card-group> 

        </b-col>

      </b-row>

    </b-container>
        
  </div>

</template>


<script>
export default {
    
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

#box{
	/*definimos a largura do box*/
	width:100%;
	/* definimos a altura do box */
	height:100px;
	/* definimos a cor de fundo do box */
	background-color:#666;
	/* definimos o quão arredondado irá ficar nosso box */
	border-radius: 10px;
	}

.visivel{
  visibility: hidden;
}

</style>