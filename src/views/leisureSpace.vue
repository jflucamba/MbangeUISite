<template>
   <div id="leisureSpace">
        <b-container id="LeisureSpace-internal" class="bv-example-row">

            

            <b-row class="pt-2" id="lazer-capa">
              
                <b-col cols="5" id="capa">

                    <b-row class="">
                        <b-col>
                            
                            <img src="../static/ViajarAgora.jpg">
                            
                            <figcaption>Onde será o sua próxima parada! </figcaption>
                            
                            
                        </b-col>
                    </b-row>

                </b-col>


                <b-col cols="7" id="visao">

                    <b-row class="">
                        <b-col class="mt-5 mb-5">
                            <h2>
                                O quê você está procurando!
                            </h2>
                        </b-col>
                    </b-row>

                    <b-row class="visao-texto">

                        <b-col>
                            <b-row>
                                <b-col>
                                    <i class="fas fa-hotel circle-icon"></i>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col>
                                    Hotel
                                </b-col>
                            </b-row>
                            
                        </b-col>

                        <b-col>
                            

                            <b-row>
                                <b-col>
                                    <i class="far fa-warehouse-alt circle-icon"></i>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col>
                                    Resourt
                                </b-col>
                            </b-row>

                        </b-col>

                        <b-col>
                            

                            <b-row>
                                <b-col>
                                    <i class="far fa-images circle-icon"></i>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col>
                                    Paisagens
                                </b-col>
                            </b-row>

                        </b-col>

                        <b-col>
                            

                            <b-row>
                                <b-col>
                                    <i class="fas fa-laptop-house circle-icon"></i>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col>
                                    Museus
                                </b-col>
                            </b-row>

                        </b-col>

                    </b-row>

                    <!--b-row-- >
                        <b-col cols="3">
                            <i class="fas fa-search"></i>
                        </b-col>
                        <b-col cols="9">
                            <h3>
                                Conheça nossa sugestão de diversão e lazer!
                            </h3>
                        </b-col>
                    </!--b-row-->

                    <b-row class="mt-5">
                        <b-col cols="3">
                            icone
                        </b-col>
                        <b-col cols="9" >
                            Conheça nossa sugestão de diversão e lazer!
                            Conheça nossa sugestão de diversão e lazer!
                            Conheça nossa sugestão de diversão e lazer!
                        </b-col>
                    </b-row>

                    

                </b-col>

            </b-row>

            <!--b-row>
                <b-col>
                    <menu-carousel-component/>
                </b-col>
            </!--b-row-->

            

        </b-container>


    </div> 
</template>


<script>

import MenuCarouselComponent from '../components/MenuCarouselComponent'

export default {
    components:{
        MenuCarouselComponent
    },
    data(){
        return {
            imagem_hotel: 'src/static/Resourt-188153847.jpg',
            alt: 'Imagem do hotel.'
        }
    }
}
</script>

<style scoped>
    


#lazer-capa:before,
#lazer-capa:after {
    content: "";
    display: table;
} 
#lazer-capa:after {
    clear: both;
}
#lazer-capa {
     zoom: 1; /* For IE 6/7 (trigger hasLayout) */
     
}

#capa{
    /*border-radius: 1px 10px 20px 5px;
    border-radius: 20px 0 0 10px;*/
    color: white;
    text-align: center;
    align-items: center;
    /*background: #FFFFFF url("../static/ViajarAgora.jpg") no-repeat right top fixed;
    
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;*/
    display: inline-block;
    position: relative;
}

#capa img{
    /*width: 100%;
    height: 100%;*/
    background:url("../static/ViajarAgora.jpg");
}

figcaption {
  position: absolute;
  top: 45px;
  right: 10px;
  font-size: 20px;
  color: white;
  padding-right: 5px;
  text-align: center;
  margin-top: 20px;
}

.visao-texto{
    text-align: center;
}

/*.visao-texto i.fa {
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.6em;

}*/

/*.circle-icon {
    
    background: #ffc0c0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    padding: 30px;
}*/

.capa-texto{
    width: 100%;
    
}

#visao{
    background: white;
    border-radius: 1px 10px 20px 5px;
    border-left: 250px;
}

#visao h2,h5{
    text-align: center;
}

#agenda{
    background: gray;
    border: red solid 2;
    color: green;
}

</style>