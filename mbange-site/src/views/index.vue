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

        <b-row>
          <b-col>
            <h3>
              Serviços
            </h3>
          </b-col>
        </b-row>

        <b-row> 

              
              <b-col>
                  <h4>Shopping</h4>

                  <i class="fas fa-shopping-cart fa-10x"></i>

                  <p>
                      If you are going to use a passage of Lorem Ipsum, 
                      you need to be sure there isn't anything embarrassing 
                      hidden in the middle of text Shopping.
                  </p>

              </b-col>


              <b-col>
                  <h4>Guia Turístico</h4>

                  <i class="fas fa-bus-alt fa-10x"></i>

                  <p>
                      If you are going to use a passage of Lorem Ipsum, 
                      you need to be sure there isn't anything embarrassing 
                      hidden in the middle of text.
                  </p>

              </b-col> 


              <b-col >
                  <h4>Paisagens</h4>

                  <i class="fas fa-hotel fa-10x"></i>

                  <p>
                      If you are going to use a passage of Lorem Ipsum, 
                      you need to be sure there isn't anything embarrassing 
                      hidden in the middle of text.
                  </p>

              </b-col> 


              <b-col>
                  <h4>Hospedaria</h4>

                  <i class="fas fa-umbrella-beach fa-10x"></i>

                  <p>
                      If you are going to use a passage of Lorem Ipsum, 
                      you need to be sure there isn't anything embarrassing 
                      hidden in the middle of text.
                  </p>

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
      /*onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }*/
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

</style>