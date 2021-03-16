<template>
  <div id="index">

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
 
 
 
export default {
  name: 'Index',
  components: {
    
  },
  data(){
      return{
          listShoppings:[
              {id:1, nome:'Atrium',imagem:require('../static/atriumShopping.jpg')},
              {id:2, nome:'Xyami',imagem:require('../static/xyamiShopping.jpg')},
              {id:3, nome:'Fortaleza',imagem:require('../static/fortalezaShopping.jpg')},
              {id:4, nome:'Avenida',imagem:require('../static/avenidaShopping.jpg')}
          ]
      }
  }
}
</script>

<style>

.service{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 45px;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    background-color: green;
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
    
    .service{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .service-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000000;
    }

    /*.separador-service{
        border-left:1px solid #666;
        
    }*/

    .section-shopping-description{
        display: flex;
        flex-direction: row;
    }

    .section-shopping-description div{
        border: 1px solid green;
        height: 150px;
        width: 25%;
    }

/* TESTANDO FUNCIONALIDADE */

.section-testar-main{
    display: flex;
    flex-direction: row;
}



}


</style>
