<template>
  <div id="plan">      
           
    <b-container>

      <b-row>
        <b-col>
          <!--carrossel-teste-component /-->
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h2>
            Escolha o plano de acordo a sua preferência.
          </h2>
        </b-col>
      </b-row>
      
      <b-row>

        <b-col>
          
          <b-card-group deck>
              <b-card
                title="Cassai"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>

              
            </b-card-group>
          
        </b-col>

        <b-col>

          <b-card-group deck>
              

              <b-card
                title="Zambeze"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>

              
            </b-card-group>

        </b-col>

        <b-col>

          <b-card-group deck>
              

              <b-card
                title="Congo"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>

              
            </b-card-group>

        </b-col>


      </b-row>

      <b-row>

        <b-col >

          <div class="carrossel mt-5 mb-5">
            <ul>
                <li>
                  <img src="../static/avenidaShopping.jpg">
                </li>
                <!-- -->
                <li>
                  <img src="../static/xyamiShopping.jpg">
                </li>
                <!-- -->
                <li>
                  <img src="../static/fortalezaShopping.jpg">
                </li>
                
              </ul>
          </div>
              
          

        </b-col>

      </b-row>

      <b-row>
        <b-col>
          <hr>
        </b-col>
      </b-row>

      <!-- OUTRO CARROSSEL -->

      <b-row>
        <b-col id="items-wrapper">
          <div id="items">
            <div class="item">
              <img src="../static/avenidaShopping.jpg">
            </div>
            <div class="item">
              <img src="../static/xyamiShopping.jpg">
            </div>
            <div class="item">
              <img src="../static/fortalezaShopping.jpg">
            </div>
            <div class="item">
              <img src="../static/atriumShopping.jpg">
            </div>
            <div class="item">
              <img src="../static/ObraDeDeus.jpg">
            </div>
            <div class="item">
              <img src="../static/LebaSerra.jpg">
            </div>
            <div class="item">
              <img src="../static/Deserto.jpg">
            </div>
            <div class="item">
              <img src="../static/ViajarAgora.jpg">
            </div>
          </div>
        </b-col>
      </b-row>


      <!--b-row>
        <b-col>
          <button @click="mudarCor" @mouseenter="exibirTexto">
            Mudar cor
          </button>
        </b-col>
      </b-row-->

    
    </b-container>   

  </div> 
</template>


<script>

  

  

    export default {
        data() {
            
        },

        methods:{
          rodarScroll () {

            document.querySelector('#items')
            .addEventListener("wheel",event => {
              if(event.deltaY > 0){
                event.target.scrollBy(300, 0)
              }else{
                event.target.scrollBy(-300, 0)
              }
            })
            
          } 
        }
        
    }

</script>

<style scoped>

#plan{
  margin: 0; padding: 0; box-sizing: border-box;
}

body{
  display: grid;
  place-items: center;
  height: 100vh;
}

.carrossel{
  width: 400px;
  height: 200px;
  /*outline: 3px solid black;*/
  overflow: hidden;
  margin: 50px auto;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.7);

}

.carrossel ul{
  display: flex;
  list-style: none;
  width: 1200px;
  height: 250px;
}

.carrossel li{
  position: relative;
  left: -400px;
  animation: slide 15s infinite ease-out;
}

@keyframes slide{
  0%{left: 0px;}
  20%{left: 0px;}

  30%{left: -400px;}
  50%{left: -400px;}

  60%{left: -800px;}
  90%{left: -800px;}

  100%{left: 0px;}

}

hr{
  color: red;
  
}

#items-wrapper{
  margin-bottom: 25px;
  width: 100vw;
}

#items{
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.item{
  flex: none;

  width: 100%;
  height: 400px;

  scroll-snap-align: start;

  pointer-events: none;
}

#items img{
  width: 100%;
  height: 100%;

  object-fit: cover;
}

</style>