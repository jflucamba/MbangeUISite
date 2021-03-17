<template>
  <div id="index">

    <section class="carrossel-home">
        <carousel-mbange
            @next="next"
            @prev="prev"
        >
            <carouse-slide-mbange class="carousel-slide" v-for="(slide, index) in slides" 
                :key="slide" 
                :index="index"
                :visibleSlide = "visibleSlide"
                :direction="direction"
            >

                <div class="description-carousel">
                    <h1>{{slide.nome}}</h1>
                    <p>{{slide.description}}</p>
                </div>

                <div class="image-carousel">
                    <img alt="" :src="slide.imagem">
                </div>
                
                
            </carouse-slide-mbange>
        </carousel-mbange>
    </section>

    <section class="content">
      <div class="service">
          <div class="service-info">
            <a href="/delivery"><i class="fas fa-truck fa-2x"></i></a>
            <small>Serviço de entrega</small>
          </div>

          <div class="service-info separador-service">
            <a href="#"><i class="fas fa-exchange-alt fa-2x"></i></a>            
            <small>Política de Devolução</small>
          </div>

          <div class="service-info separador-service">
            <a href="#"><i class="fas fa-headset fa-2x"></i></a>
            <small>Suporte 24 horas por dia</small>
          </div>

          <div class="service-info separador-service">
            <a href="#"><i class="fab fa-cc-amazon-pay fa-2x"></i></a>
            <small>Compras seguras</small>
          </div>        
      </div>
    </section>

    <section class="section-shopping">

        <div class="section-shopping-title">
            <h2>Shopping</h2>
        </div>

        <div class="section-shopping-description">

            <ul class="">
                <li v-for="listShopping in listShoppings" :key="listShopping.id" >
                    <a href="#">
                        <img :alt="listShopping.nome" :src="listShopping.imagem">
                    </a>
                </li>
            </ul>
            
        </div>        

    </section>

    <section class="section-paisagens">

        <div class="section-shopping-title">
            <h2>Paisagens</h2>
        </div>

        <div class="section-shopping-description">
            <div>
                <img alt="" src="../static/Kalandula.jpg">
            </div>

            <div>
                <img alt="" src="../static/ObraDeDeus.jpg">
            </div>
            <div>
                <img alt="" src="../static/Deserto.jpg">
            </div>

            <div>
                <img alt="" src="../static/LebaSerra.jpg">
            </div>
        </div>        

    </section>

    <section class="section-hoteis">

        <div class="section-shopping-title">
            <h2>Hoteis</h2>
        </div>

        <div class="section-shopping-description">
            <div>
                <img alt="" src="../static/Kalandula.jpg">
            </div>

            <div>
                <img alt="" src="../static/ObraDeDeus.jpg">
            </div>
            <div>
                <img alt="" src="../static/Deserto.jpg">
            </div>

            <div>
                <img alt="" src="../static/LebaSerra.jpg">
            </div>
        </div>        

    </section>

    <section>
        <div class="testar-produtos">
            <h2>Últimos produtos</h2>
        </div>
    </section>

    <section class="section-testar-main">

        <div class="section-testar">
            <img alt="" src="../static/LebaSerra.jpg">
            <div class="section-testar-title">
                <h2>Testar imagem</h2>
                <p>Validando se funciona</p>
            </div>  
        </div>

        <div class="section-testar">
            <img alt="" src="../static/LebaSerra.jpg">
            <div class="section-testar-title">
                <h2>Testar imagem</h2>
                <p>Validando se funciona</p>
            </div>  
        </div>

        <div class="section-testar">
            <img alt="" src="../static/LebaSerra.jpg">
            <div class="section-testar-title">
                <h2>Testar imagem</h2>
                <p>Validando se funciona</p>
            </div>  
        </div>

        <div class="section-testar">
            <img alt="" src="../static/LebaSerra.jpg">
            <div class="section-testar-title">
                <h2>Testar imagem</h2>
                <p>Validando se funciona</p>
            </div>  
        </div>
                  

    </section>
    
  </div>
</template>

<script>

import CarouselMbange from '@/components/CarouselMbange'
import CarouseSlideMbange from '@/components/CarouseSlideMbange'
 
 
export default {
  name: 'Index',
  components: {
    CarouselMbange,
    CarouseSlideMbange
  },
  data(){
      return{
        slides:[
            {   id:1, 
                nome:'Pc Gammer', 
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 
                imagem:require('../static/pcGaleria.jpg')},
            {id:2, nome:'Kit da Puma', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',imagem:require('../static/kitDaPumaGaleria.jpg')},
            {id:3, nome:'Sapato', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',  imagem:require('../static/sapatoGaleria.jpg')},
            {id:2, nome:'Fato desportivo da Puma', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',  imagem:require('../static/kitDaPumaGaleria.jpg')}
        ],
        visibleSlide:0,
        direction:'left',
        listShoppings:[
            {id:1, nome:'Atrium',imagem:require('../static/atriumShopping.jpg')},
            {id:2, nome:'Xyami',imagem:require('../static/xyamiShopping.jpg')},
            {id:3, nome:'Fortaleza',imagem:require('../static/fortalezaShopping.jpg')},
            {id:4, nome:'Avenida',imagem:require('../static/avenidaShopping.jpg')}
        ]
      }
  },
  computed:{
        slidesLen(){
            return this.slides.length;
        }
    },

    methods:{
        next(){
            if(this.visibleSlide >= this.slidesLen - 1){
                this.visibleSlide = 0;
            }else{
                this.visibleSlide++;
            }
            this.direction="left"
        },
        prev(){
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slidesLen - 1;
            }else{
                this.visibleSlide--;
            }
            this.direction="right"
        }
    }
}
</script>

<style>

.carrossel-home{
    margin-top: 0px;
}

.carousel-slide img{
    width: 100%;
}

.carousel-slide{
        
        display: flex;
        flex-direction: column;
        padding: 0 55px;
        
        height: 450px;
        background-color: #fff;
    }

    .description-carousel, .image-carousel{
        /*border: 1px solid greenyellow;*/
        width: 100%;
    }

    .image-carousel{
        height: 400px;
        background-color: #fff;
    }

    .image-carousel img{
        background-size: cover;
        height: 400px;
        background-color: transparent;
    }

    .description-carousel{
        
        background-color: #fff;
        
    }

    .description-carousel h1{
        
        color: #000000;
    }

    .description-carousel p{
        display: none;
        color: #777777;
    }

.service{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
}

.service-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
}

.service-info a {
    text-decoration: none;
}

.service-info a {
    color: #777777;
}

.service-info small{
    color: #000000;
}

.section-shopping{
    
    color: #fff;
    margin: 15px 0;
}

.section-shopping-title{  
    margin-top: 15px;  
    height: 45px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    background-color: #DB354D;
}

.section-shopping-title h2{    
    
    justify-content: center;
    align-items: center;
    
    
}

.section-shopping-description{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-top: 15px;
    
}

.section-shopping-description div{
    border: 1px solid green;
    height: 150px;
}

.section-shopping-description div img{
    width: 100%;
    height: 100%;
}

/* TESTANDO FUNCIONALIDADE */

.section-testar-main{
    display: flex;
    flex-direction: column;
}

.section-testar {
  position: relative;
  margin: 15px 0;
}

.section-testar img {
  width: 100%;
  height: 150px;
}

.section-testar-title {
  display: none;
}

.section-testar:hover .section-testar-title {
  display: block;
}

.section-testar-title {
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  
  
}

.section-testar-title h1{
    justify-content: center;
    align-items: center;
}

.testar-produtos{
    text-align: center;
    margin-top: 15px;
}

.section-shopping-description ul li a{
    text-decoration: none;
}

.section-shopping-description ul li a img{
    width: 100%;
}




/* RESPONSIVIDADE */

@media(min-width: 700px){

    #index{
        margin-top: 65px;
        margin-bottom: 10px;
    }

    /*.carrossel-home{
        border: 1px solid yellow;
    }*/

    .carousel-slide{
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        padding: 10px 55px;
        /*border: 1px solid blue;*/
        height: 450px;
        
    }

    .description-carousel, .image-carousel{
        /*border: 1px solid greenyellow;*/
        width: 50%;
    }

    .image-carousel{
        height: 400px;
        background-color: #fff;
    }

    .image-carousel img{
        background-size: cover;
        height: 400px;
        background-color: transparent;
    }

    .description-carousel{
        justify-content: flex-start;
        background-color: #fff;
        
    }

    .description-carousel h1{
        
        color: #000000;
    }

    .description-carousel p{
        margin-top: 60px;
        color: #777777;
        display: inline-flex;
    }
    
    .service{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
        background-color: #DB354D ;
        height: 90px;
        padding: 0 35px;
    }

    .service-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000000;
    }

    .service-info a {
        color: #fff;
        text-decoration: none;
    }

    .service-info a:hover {
        color: #fff;
        
    }

    .service-info small{
        font-weight: 500;
        font-size: 16px;
    }

    /*.separador-service{
        border-left:1px solid #666;
        
    }*/

    .section-shopping-title{
        margin-top: 25px;
        background-color: #DB354D;
        color: #fff;
    }

    .section-shopping-title:hover{
        background-color: #000;
        color: #fff;
    }

    .section-shopping-description ul li{
        display: inline-block;
        flex-direction: row;
        width: 25%;
        padding:0 5px;
    }


    

    

/* TESTANDO FUNCIONALIDADE */

.section-testar-main{
    display: flex;
    flex-direction: row;
}



}


</style>
