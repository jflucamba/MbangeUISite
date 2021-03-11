<template>
    <div id="superMarket">
        <b-container>

            
            <b-row>

                <b-col cols="3" class="mt-3 ">
                    <b-row >
                        
                        
                        <b-col cols="12" class="">
                            
                            <b-row>

                                <b-col cols="12" class="listando-categoria">

                                    <b-row>
                                        <b-col cols="12" class="detalhes-categoria">
                                            <div class="titulo-market">categoria</div>
                                        </b-col>

                                        <b-col cols="12">

                                            <ul>
                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>
                                    </ul>

                                        </b-col>
                                    </b-row>

                                </b-col>

                                <b-col cols="12" class="listando-categoria">

                                    

                                    <b-row>
                                        <b-col cols="12" class="detalhes-categoria">
                                            <div class="titulo-market">Filtros de produtos</div>
                                        </b-col>

                                        <b-col cols="12">

                                            <ul>
                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>

                                        <li>
                                            <a href="">frutas e vegetais</a>

                                            
                                        </li>
                                    </ul>

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
                        <b-col>
                            <img alt src="../../static/showSapato.jpg">
                            <h6>Tenís</h6>
                        </b-col>

                        <b-col>
                            <img alt src="../../static/showSapato.jpg">
                            <h6>Tenís</h6>
                        </b-col>

                        <b-col>
                            <img alt src="../../static/showSapato.jpg">
                            <h6>Tenís</h6>
                        </b-col>

                    </b-row>

                    <b-row class="produto">
                        <b-col>
                            <img alt src="../../static/showSapato.jpg">
                            <h6>Tenís</h6>
                        </b-col>

                        <b-col>
                            <img alt src="../../static/showSapato.jpg">
                            <h6>Tenís</h6>
                        </b-col>

                        <b-col>
                            <img alt src="../../static/showSapato.jpg">
                            <h6>Tenís</h6>
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
.imagem-galeria img{
    width: 100%;
    height: 100%;
}

.titulo-market{
    background-color: #6f42c1;
}

.listas{
    margin-bottom: 250px;
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

.produto img{
    width: 100%;
    height: 50%;
    border: 1px solid red;
}

.produto h6{
    color: blueviolet;
}



.pagination ul {
    display: inline-block;
    padding: 0;
    margin: 0;
}

.pagination ul li {display: inline;}

.pagination ul li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 5px;
}

.pagination ul li a.active {
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
}

.pagination ul li a:hover:not(.active) {background-color: #ddd;}

</style>