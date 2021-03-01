<template>
    
    <div id="shoppingStore">
      <b-container>              
        
        <b-row id="principal" class="mt-3 mb-3">

          <b-col class="mt-2 mb-2">

            <b-row >
              <b-col id="capa-imagem">
                <img src="../../static/angolaShopping.jpg">
              </b-col>

              <b-col id="type-store">
                <b-row >

                  <b-col cols="12">
                    <b-row>
                      <b-col cols="4" class="tipos-lojas">
                        <a href="#">
                          <img src="../../static/superMercado.jpg">
                          <h6>Super mercado</h6>
                        </a>
                          
                        
                      </b-col>

                      <b-col cols="4" class="tipos-lojas">
                        <a href="#">
                          <img src="../../static/farmacia.jpg">
                          <h6>Farmácia</h6>
                        </a>
                          
                        
                      </b-col>

                      <b-col cols="4" class="tipos-lojas">
                        <a href="#">
                          <img src="../../static/lojasDiversas.png">
                          <h6>Lojas diversas</h6>
                        </a>
                          
                        
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col cols="12">
                    <b-row class="">
                      <b-col cols="4" class="tipos-lojas">
                        <a href="#">
                          <img src="../../static/pracaAlimentacao.jpg">
                          <h6>Praça de alimetação</h6>
                        </a>
                          
                        
                        
                      </b-col>

                      <b-col cols="4" class="tipos-lojas">
                        <a href="#">
                          <img src="../../static/perfumeCapa.jpg">
                          <h6>Perfumária</h6>
                        </a>                                                 
                        
                      </b-col>

                      <b-col cols="4" class="tipos-lojas">
                        <a href="#">
                          <img src="../../static/restauranteCapa.png">
                          <h6>Restaurante</h6>
                        </a>                                                 
                        
                      </b-col>
                    </b-row>
                  </b-col>
                  
                </b-row>

                
              </b-col>
            </b-row>
            
            

          </b-col>
          
        </b-row>

        <b-row class="titulo-produto">
          <b-col cols="12">
            
            <h3>Produtos em destaque</h3>
            
            
          </b-col>
          <b-col cols="12">
            <carousel  :loop="true" :autoplay="true">
                  <img class="img-fluid" src="../../static/avenidaShopping.jpg" />
                  <img class="img-fluid" src="../../static/fortalezaShopping.jpg" />
                  <img class="img-fluid" src="../../static/xyamiShopping.jpg" />
                  <img class="img-fluid" src="../../static/atriumShopping.jpg" />

                  <img class="img-fluid" src="../../static/avenidaShopping.jpg" />
                  <img class="img-fluid" src="../../static/fortalezaShopping.jpg" />
                  <img class="img-fluid" src="../../static/xyamiShopping.jpg" />
                  <img class="img-fluid" src="../../static/atriumShopping.jpg" />
                </carousel>
          </b-col>
        </b-row>

        <b-row class="mt-3 titulo-produto">
          <b-col >
            <h3>Promoções da Semana</h3>
          </b-col>
          
        </b-row>

        <b-row class="mt-3 mb-2">
          
          <b-col cols="9" id="promocao">

            <b-row >

              <b-col cols="12">

                <b-row class="mt-2">

                  <b-col cols="4">
                    <b-row  >
                      <b-col cols="4">
                        <img src="../../static/celular.jpg">
                      </b-col>
                      <b-col cols="8">
                        <h5>Celular</h5>
                        <small>250,00 $</small>
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col cols="4">
                    <b-row class="">
                      <b-col cols="4">
                        <img src="../../static/showSapato.jpg">
                      </b-col>
                      <b-col cols="8">
                        <h5>Sapato</h5>
                        <small>250,00 $</small>
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col cols="4">
                    <b-row class="">
                      <b-col cols="4">
                        <img src="../../static/calca.jpg">
                      </b-col>
                      <b-col cols="8">
                        <h5>Calça</h5>
                        <small>250,00 $</small>
                      </b-col>
                    </b-row>
                  </b-col>

                </b-row>

              </b-col>

              <b-col cols="12">

                <b-row class="mt-2">
              <b-col cols="4">
                <b-row class="">
                  <b-col cols="4">
                    <img src="../../static/celular.jpg">
                  </b-col>
                  <b-col cols="8">
                    <h5>Celular</h5>
                    <small>250,00 $</small>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="4">

                <b-row class="">
                    <b-col cols="4">
                      <img src="../../static/showSapato.jpg">
                    </b-col>
                    <b-col cols="8">
                      <h5>Sapato</h5>
                      <small>250,00 $</small>
                    </b-col>
                  </b-row>
                </b-col>

                <b-col cols="4">

                <b-row class="">
                      <b-col cols="4">
                        <img src="../../static/calca.jpg">
                      </b-col>
                      <b-col cols="8">
                        <h5>Calça</h5>
                        <small>250,00 $</small>
                      </b-col>
                    </b-row>
                  </b-col>

                </b-row>

              </b-col>

              <b-col cols="12">

                <b-row class="mt-2">
                  <b-col cols="4">
                <b-row class="">
                  <b-col cols="4">
                    <img src="../../static/celular.jpg">
                  </b-col>
                  <b-col cols="8">
                    <h5>Celular</h5>
                    <small>250,00 $</small>
                  </b-col>
                </b-row>
                  </b-col>

                  <b-col cols="4">
                <b-row class="">
                  <b-col cols="4">
                    <img src="../../static/showSapato.jpg">
                  </b-col>
                  <b-col cols="8">
                    <h5>Sapato</h5>
                    <small>250,00 $</small>
                  </b-col>
                </b-row>
                  </b-col>

                  <b-col cols="4">
                <b-row class="">
                  <b-col cols="4">
                    <img src="../../static/calca.jpg">
                  </b-col>
                  <b-col cols="8">
                    <h5>Calça</h5>
                    <small>250,00 $</small>
                  </b-col>
                </b-row>
                  </b-col>
                </b-row>

              </b-col>

            </b-row>
            
          </b-col>

          <b-col id="info-lateral" cols="3">
            <img src="../../static/desconto.jpg" />
          </b-col>

        </b-row>

      </b-container>
    </div>

</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name:'shoppingStore',
    components:{carousel},

    mounted(){
            console.log('Component mounted.')
        }
    
}
</script>


<style scoped>

/*#shoppingStore{
  background: red;
}*/

#principal{
  display: flex;
  /*background: #14CAE7;*/
}



.titulo-produto h3{
  /*color: red;*/
  text-align: center;
}

#capa-imagem img{
  width: 100%;
  height: 100%;
}

#type-store{
  margin: 35px auto;
  
  width: 100%;
  height: 100%;
  
}

.tipos-lojas{
  width: 100%;
  /*color: #fff;
  background: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center*/
}

.tipos-lojas a{
  color: #000000;
  text-decoration: none;
  
}

.tipos-lojas img{
  width: 100%;
  
  align-items: center;
}

.tipos-lojas h6{
  align-items: center;
  width: 100%;
  text-align: center;
}

.borda{
  border: blue solid 1px ;
  
}

.borda-1{
  border: blueviolet solid 1px;
}

#promocao img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

#info-lateral img{
  width: 100%;
  height: 100%;
}

.div-promo{
  width: 100%;
}

</style>