<template>
  <div id="home">

    <b-container>

        <b-row>

          <b-col >

            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="100%"
                img-height="180"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">


              <!-- Text slides with image -->
              <b-carousel-slide class="image-carrossel"
              caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              width="100%"
              height="200px"
              :img-src="require ('../static/paisagem_capa.jpg')"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide class="image-carrossel"
                width="100%"
                height="200px"
                :img-src="require ('../static/Resourt-188153847.jpg')">
                  <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide class="image-carrossel"
                width="100%"
                height="200px" 
                :img-src="require ('../static/hospedaria_capa.jpg')">
              </b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                  <template #img>
                  <img
                      class="d-block img-fluid w-100 image-carrossel"
                      width="100%"
                      height="200px"
                      :src="require ('../static/Resourt-188153847.jpg')"
                      alt="image slot"
                  >
                  </template>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide class="image-carrossel"
                width="100%"
                height="200px"
                :img-src="require ('../static/hospedaria_capa.jpg')"
              >
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                  a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                  </p>
              </b-carousel-slide>
            
            </b-carousel>

          </b-col >         

        </b-row>

        <b-row id="services" class="mt-5" >
          <b-col class="content-service ">
            <a href="/delivery">
              <i class="fas fa-truck fa-2x"></i>
            </a>

            <p>
              Serviço de entrega
            </p>
            
            
          </b-col>

          <b-col class="content-service">
            
            <a href="#">
              <i class="fas fa-exchange-alt fa-2x"></i>
            </a>
            
            <p>
              Política de Devolução
            </p>
            
              
            
            
          </b-col>
          <b-col class="content-service">
            
            <a href="#">
              <i class="fas fa-headset fa-2x"></i>
            </a>
              
            
            <p>
              Suporte 24 horas por dia
            </p>
            
          </b-col>
          <b-col class="content-service">
            
            <a href="#">
              <i class="fab fa-cc-amazon-pay fa-2x"></i>
            </a>
              
            
            <p>
              Compras seguras
            </p>
            
          </b-col>
        </b-row>

        <b-row class="mt-5">

          <b-col cols="12" class="servico">
            <h2>Shopping</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </b-col>

          <b-col cols="12">
            <b-row>

              <b-col>
                
                <div class="mt-3">
                  <b-card-group deck>

                    <b-card bg-variant="light" header="Xyami" class="text-center">
            
                      <b-card-text>
                        
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                            
                          </b-col>
                        </b-row>

                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Atrium" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Fortaleza" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Avenida" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                  </b-card-group> <br>

                </div>

              </b-col>

              

              
            </b-row>
          </b-col>

        </b-row>

        <b-row class="mt-5">

          <b-col cols="12" class="servico">
            <h2>Hoteis</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </b-col>

          <b-col cols="12">
            <b-row>

              <b-col>
                
                <div class="mt-3">
                  <b-card-group deck>

                    <b-card bg-variant="light" header="Xyami" class="text-center">
            
                      <b-card-text>
                        
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>

                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Atrium" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Fortaleza" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Avenida" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                  </b-card-group> <br>

                </div>

              </b-col>

              

              
            </b-row>
          </b-col>

        </b-row>

        <b-row class="mt-5">

          <b-col cols="12" class="servico">
            <h2>Espaço de lazer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </b-col>

          <b-col cols="12">
            <b-row>

              <b-col>
                
                <div class="mt-3">
                  <b-card-group deck>

                    <b-card bg-variant="light" header="Queda de Calandula" class="text-center">
            
                      <b-card-text>
                        
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                            
                          </b-col>
                        </b-row>

                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Cristo Rei" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Rio Zambeze" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Largo primeiro de Maio" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                  </b-card-group> <br>

                </div>

              </b-col>

              

              
            </b-row>
          </b-col>

        </b-row>

        <b-row class="mt-5">

          <b-col cols="12" class="servico">
            <h2>Produtos</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </b-col>

          <b-col cols="12">
            <b-row>

              <b-col>
                
                <div class="mt-3">
                  <b-card-group deck>

                    <b-card bg-variant="light" header="Xyami" class="text-center">
            
                      <b-card-text>
                        
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>

                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Atrium" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Fortaleza" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                    <b-card bg-variant="light" header="Avenida" class="text-center">
            
                      <b-card-text>
                        <b-row>
                          <b-col>
                            <i class="fas fa-eye"></i>
                          </b-col>
                        </b-row>
                      </b-card-text>

                    </b-card>

                  </b-card-group> <br>

                </div>

              </b-col>

              

              
            </b-row>
          </b-col>

        </b-row>

        

                
    
    </b-container>    
   


  </div>
</template>


<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      
    },
    mounted(){
      
    }
  }
</script>

<style scoped>

    #testar-grid{
        background-color: red;
    }

    .image-carrossel {
      width: 100%;
      height: 400px;
    }

    /* Checkbox Hack 1*/
  #toggle-1 {
     display:none;
  }

  #toggle-2 {
     display:none;
  }

  #toggle-3 {
     display:none;
  }

  #toggle-4 {
     display:none;
  }

  label { 
    -webkit-appearance: push-button;
    -moz-appearance: button; 
    display: inline-block;
    cursor: pointer;
    padding: 5px;
  }

  /* CSS padrão da div */
  #mostra {
     display:none;
  }

  /* CSS quando o checkbox está marcado */
  #toggle-1:checked ~ #mostra {
     display:block;
  }

  #toggle-2:checked ~ #mostra {
     display:block;
  }

  #toggle-3:checked ~ #mostra {
     display:block;
  }

  #toggle-4:checked ~ #mostra {
     display:block;
  }

  .servico{
    text-align: center;
  }

  #services{
    height: 100%;    
  }

.content-service{
    background: white;
  
  text-align: center;
  padding: 30px 0 10px 0;
}

.textos{
  text-align: center;
}

.content-service a{
  text-decoration: none;
  color: gray;
}


</style>