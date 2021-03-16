<template>
    <div id="superMarket">
        <b-container>

            
            <b-row id="superMarket-body">

                <b-col cols="3" class="mt-3 ">

                    <b-row >                        
                        
                        <b-col cols="12" class="">
                            
                            <b-row>

                                <b-col cols="12" class="listando-categoria">

                                    <b-row>
                                        <b-col cols="12" class="detalhes-categoria">
                                            <div class="titulo-market-1">categoria</div>
                                        </b-col>

                                        <b-col cols="12" class="lista-categorias">

                                            <ul>
                                                <li>
                                                    <a href="">Frutas e Vegetais</a>

                                                    <hr>

                                                </li>

                                                <li>
                                                    <a href="">Bebidas</a>
                                                    <hr>
                                                </li>

                                                <li>
                                                    <a href="">Padaria</a>
                                                    <hr>
                                                </li>

                                                <li>
                                                    <a href="">Higiene</a>
                                                    <hr>
                                                </li>

                                                <li>
                                                    <a href="">Frios</a>
                                                </li>
                                            </ul>

                                        </b-col>
                                    </b-row>

                                </b-col>

                                <b-col cols="12" class="listando-categoria">

                                    

                                    <b-row class="mt-5">

                                        <b-col cols="12" class="detalhes-categoria">
                                            <div class="titulo-market">Filtros de produtos</div>
                                        </b-col>

                                        <b-col cols="12">

                                            <b-row class="mt-3 lista-filtro">

                                                <b-col cols="12" class="">
                                                    <div class="">Marcas</div>
                                                </b-col>

                                                <b-col cols="12">

                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="other" name="Samsung" value="apple">
                                                            <label for="apple">Apple</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Samsung" value="Samsung">
                                                            <label for="apple">Samsung</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Huawei" value="Huawei">
                                                            <label for="apple">Huawei</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Verde" value="Nokia">
                                                            <label for="apple">Nokia</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Asus" value="Asus">
                                                            <label for="apple">Asus</label>
                                                        </li>
                                                    </ul>

                                                </b-col>

                                                <b-col>
                                                    <hr>
                                                </b-col>

                                            </b-row>

                                            <b-row class="mt-2 lista-filtro">

                                                <b-col cols="12" class="">
                                                    <div class="">Cores</div>
                                                </b-col>

                                                <b-col cols="12">

                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="other" name="Preto" value="Preto">
                                                            <label for="apple">Preto</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Azul" value="Azul">
                                                            <label for="apple">Azul</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Vermelho" value="Vermelho">
                                                            <label for="apple">Vermelho</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Verde" value="Verde">
                                                            <label for="apple">Verde</label>
                                                        </li>

                                                        <li>
                                                            
                                                            <input type="radio" id="other" name="Branco" value="Branco">
                                                            <label for="apple">Branco</label>
                                                        </li>
                                                    </ul>

                                                </b-col>

                                                <b-col>
                                                    <hr>
                                                </b-col>

                                            </b-row>

                                            <b-row>

                                                <b-col cols="12" class="">
                                                    <div class="">Preço</div>
                                                </b-col>

                                                <b-col cols="12">

                                                    <input type="range" min="0" max="11" value="7" step="1">

                                                </b-col>

                                                <b-col>
                                                    <hr>
                                                </b-col>

                                            </b-row>

                                        </b-col>

                                    </b-row>

                                    

                                    

                                </b-col>

                                

                            </b-row>

                        </b-col>

                    </b-row>
                    
                </b-col>

                <b-col cols="9" class="mt-3 ">

                    <b-row >
                        <b-col cols="12" class="">
                            <b-row  class="titulo-market detalhes-produto">
                                <b-col class="classic-exibir">
                                    <div class="classic">

                                        <select name="select">
                                          <option value="valor1">classificação padrão</option>
                                          <option value="valor2" selected>classificação padrão</option>
                                          <option value="valor3">classificação padrão</option>
                                        </select>

                                    </div>
                                    <div>

                                        <select name="select">
                                          <option value="valor1">exibir 5</option>
                                          <option value="valor2" selected>exibir 10</option>
                                          <option value="valor3">exibir 15</option>
                                        </select>

                                    </div>
                                </b-col>

                                <b-col class="pagination">
                                    
                                    

                                    paginação

                                    
                                    
                                    
                                </b-col>
                            </b-row>
                        </b-col>
                        
                    </b-row>

                    <b-row class="produto">
                        <b-col class="produto-item">
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                            
                            
                        </b-col>

                        <b-col class="produto-item">
                            <!--img alt src="../../static/showSapato.jpg"-->
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                        </b-col>

                        <b-col class="produto-item">
                            <!--img alt src="../../static/showSapato.jpg"-->
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                        </b-col>

                    </b-row>

                    <b-row class="produto">
                        <b-col class="produto-item">
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                            
                            
                        </b-col>

                        <b-col class="produto-item">
                            <!--img alt src="../../static/showSapato.jpg"-->
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                        </b-col>

                        <b-col class="produto-item">
                            <!--img alt src="../../static/showSapato.jpg"-->
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                        </b-col>

                    </b-row>

                    <b-row class="produto">
                        <b-col class="produto-item">
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                            
                            
                        </b-col>

                        <b-col class="produto-item">
                            <!--img alt src="../../static/showSapato.jpg"-->
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                        </b-col>

                        <b-col class="produto-item">
                            <!--img alt src="../../static/showSapato.jpg"-->
                            <div class="imagem">
                                colocar imagem aqui
                            </div>

                            <div class="titulo">
                                <h6>Tenís</h6>
                            </div>
                        </b-col>

                    </b-row>

                    
                    
                </b-col>

            </b-row>

            <!--b-row-- class="listas mb-5">

                <b-col class="listas listando">

                    <ul>
                        <li>
                            <a>Listas</a>

                            <ul>
                                <li>
                                    <a>Opção1</a>
                                </li>

                                <li>
                                    <a>Opção1</a>
                                </li>

                                <li>
                                    <a>Opção1</a>
                                </li>
                            </ul>

                        </li>

                        <li>
                            <a>Listas 2</a>

                            <ul>
                                <li>
                                    <a>Opção1</a>
                                </li>

                                <li>
                                    <a>Opção1</a>
                                </li>

                                <li>
                                    <a>Opção1</a>
                                </li>
                            </ul>

                        </li>
                    </ul>
                    

                </b-col>

            </!--b-row-->

            
        </b-container>
    </div>
</template>

<script>
export default {
    name:'superMarket',
    data() {
      return {
        perPage: 3,
        currentPage: 3,
        
      }
    },
    methods:{
        
    }
    
}
</script>

<style scoped>

#superMarket{
    font-family: Helvetica, sans-serif;
}



.imagem-galeria img{
    width: 100%;
    height: 100%;
}

.titulo-market{
    background-color: #6f42c1;
}

.titulo-market-1{
    background-color: #6f42c1;
    color: red;
}

.listas{
    margin-bottom: 250px;
}

.lista-categorias{
    margin-top: 1px;
    margin-bottom: 3px;
}

.lista-categorias ul{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 4px -2px #989898;
  -moz-box-shadow: 0 4px 4px -2px #989898;
  -webkit-box-shadow: 0 4px 4px -2px #989898;  
   
}

.lista-categorias ul li{
    padding: 0 20px;
}

.lista-categorias ul li a{
    text-decoration: none;
    color: #000000;
    font-family: Times, Times New Roman, serif;
}

.listando ui{
    position: relative;
    background-color: gray;
    margin: 0;
    padding: 0;
}

.listando ul li{
    display: inline-block;
}

.listando ul li a {
    text-decoration: none;
    color: #000;
    padding: 15px;
    display: block;
}

.listando ul li:hover{
    background-color: lightgray;
}

.listando ul ul {
    position: absolute;
    min-width: 200px;
    display: none;
    background-color: blueviolet;
}

.listando ul ul li{
    display: block;
    background-color: #e3e3e3;
}

.listando ul li:hover ul{
    display: block;
}

.classic-exibir{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    
}

.pagination {
    
    text-align: right;
    color: #fff;
    
    justify-content: flex-end;
    align-items: center;
}

.detalhes-produto{
    display: flex;
    flex-direction: row;
    height: 55px;
    
}

.detalhes-categoria div{
    
    height: 55px;
    color: #fff;
    padding-left: 20px;
    
}

.classic{
    margin-right: 5px;
}

.listando-categoria ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

.produto{
    background-color: cornflowerblue;
}

.produto-item{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
}

.produto .imagem{
    width: 100%;
    height: 170px;
    background-color: blueviolet;
}

.produto img{
    width: 100%;
    height: 50%;
    border: 1px solid red;
}

.produto h6{
    color: blueviolet;
}


.lista-filtro{
    padding-left: 20px;
}

.lista-filtro ul{
    margin-top: 10px;
}


.lista-filtro ul li input{
    margin-right: 15px;
}


/* RESPONSIVIDADE */

/*@mixin for-phone-only {*/
@media (max-width: 599px) { 
    
    #superMarket-body{
        display: flex;
        flex-direction: column;
    }

    .produto{
        display: flex;
        flex-direction: column;
    }

}


/*}*/


/*@mixin for-tablet-portrait-up {*/
@media (min-width: 600px) { 

    #superMarket-body{
    display: flex;
    flex-direction: column;
    }

}


/*}*/


/*@mixin for-tablet-landscape-up {*/


  @media (min-width: 900px) { 

      #superMarket-body{
    display: flex;
    flex-direction: row;
    }

   }


/*}*/


/*@mixin for-desktop-up {*/


  @media (min-width: 1200px) { 

      #province{
      
    }

   }


/*}*/


/*@mixin for-big-desktop-up {*/


  @media (min-width: 1800px) { 

    #province{
      
    }

   }


/*}*/




</style>