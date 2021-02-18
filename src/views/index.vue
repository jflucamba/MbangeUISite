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

            <label for="toggle-3">
              <h3>Lojas</h3>
          </label>
          <input type="checkbox" id="toggle-3">
          <div id="mostra">
              <div>Avenida</div>
              <div>Ginga Shopping</div>
              <div>Xiame</div>
              <div>Fortaleza</div>
          </div>

          </b-col>

          <b-col>
            
            <label for="toggle-1">
              <h3>Shopping</h3>
          </label>
          <input type="checkbox" id="toggle-1">
          <div id="mostra">
              <div>Avenida</div>
              <div>Ginga Shopping</div>
              <div>Xiame</div>
              <div>Fortaleza</div>
          </div>

          </b-col>

          <b-col>
            
            <label for="toggle-2">
              <h3>Produtos</h3>
          </label>
          <input type="checkbox" id="toggle-2">
          <div id="mostra">
              <div>Avenida</div>
              <div>Ginga Shopping</div>
              <div>Xiame</div>
              <div>Fortaleza</div>
          </div>

          </b-col>

          <b-col>
            
            <label for="toggle-4">
              <h3>Pontos Turísticos</h3>
          </label>
          <input type="checkbox" id="toggle-4">
          <div id="mostra">
              <div>Avenida</div>
              <div>Ginga Shopping</div>
              <div>Xiame</div>
              <div>Fortaleza</div>
          </div>

          </b-col>
          

          

        </b-row>

        <b-row>
          
          

        </b-row>

        <b-row>
          

          

        </b-row>

        <b-row>
          

          

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



</style>