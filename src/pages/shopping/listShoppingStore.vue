<template>
    <div id="listShoppingStore">
            
        <section class="capa-list-store">

            <div class="imagem-capa-store">
                <a >
                    <img src="../../static/angolaShopping.jpg">
                </a>
            </div>

            <div class="lista-lojas">
                <div class="titulo-central">
                    <h4>Escolha a loja de acordo a sua necessidade!</h4>
                </div>

                <div class="titulo-loja">
                    <a v-for="listShopping in listShoppings" :key="listShopping.id" :href="linkStore">
                        <img :alt="listShopping.nome" :src="listShopping.imagem">
                        <small>{{listShopping.nome}}</small>
                    </a>
                </div>
            </div>
            
        </section>
        
    </div>    
</template>

<script>
export default {
    name:'ListShoppingStore',
    data(){
        return{
            listShoppings:[
              {id:1, nome:'Super mercado',imagem:require('../../static/superMercado.jpg')},
              {id:2, nome:'Farmácia',imagem:require('../../static/farmacia.jpg')},
              {id:3, nome:'Lojas',imagem:require('../../static/lojasDiversas.png')},
              {id:4, nome:'Praça de alimentação',imagem:require('../../static/pracaAlimentacao.jpg')},
              {id:5, nome:'Perfumária',imagem:require('../../static/perfumeCapa.jpg')},
              {id:6, nome:'Restaurante',imagem:require('../../static/restauranteCapa.png')},
              /*{id:7, nome:'Fortaleza',imagem:require('../../static/fortalezaShopping.jpg')},
              {id:8, nome:'Avenida',imagem:require('../../static/avenidaShopping.jpg')},
              {id:9, nome:'Atrium',imagem:require('../../static/atriumShopping.jpg')},
              {id:10, nome:'Xyami',imagem:require('../../static/xyamiShopping.jpg')},
              {id:11, nome:'Fortaleza',imagem:require('../../static/fortalezaShopping.jpg')},
              {id:12, nome:'Avenida',imagem:require('../../static/avenidaShopping.jpg')}*/
          ],
          linkStore:'testar aqui'
        }
    }
}
</script>


<style scoped>

#listShoppingStore{
    margin-top: 10px;
    z-index: 5;
}

section .capa-list-store{
    display: flex;
    flex-direction: column;
}

.capa-list-store div a img{
    width: 100%;
}

section div a img{
    width: 100%;
    
}

.lista-lojas{
    display: flex;
    flex-direction: column;
    
}

.titulo-central{
    text-align: center;
    color: #000000;
}

/*.titulo-loja{
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
}*/

.titulo-loja a{
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    align-items: center;
}

.titulo-loja a small{
    color: #000000;
    margin-top: 10px;
}



@media(min-width: 700px){


#listShoppingStore{
    margin-top: 60px;
}
section .capa-list-store{
    display:inline-flex;
    flex-direction: row;
    width: 100%;
}


.imagem-capa-store,
.lista-lojas{
    width: 50%;
}

.imagem-capa-store{
    float: left;
}


.lista-lojas{
    float: right;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.titulo-loja{
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid green;
    margin-top: 30px;
    box-sizing: border-box;
    
    
}


.titulo-loja a{
    padding: 20px;
    
    border: 1px solid red;
    width: 100%;
    display: flex;
    
}



}

</style>