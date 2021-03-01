<template>
    <div id="menuCarouselComponent">
        <b-container class="mt-5 mb-3" id="grad">
            <b-row class="row justify-content-center">
                <b-col class="col-md-12 mt-5 mb-5">
                    <carousel  :loop="true" :autoplay="true">
                        <b-col>
                            <b-row class="borda carrossel">
                                <b-col>
                                    <h2>Shopping Avenida</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>                                    
                                </b-col>
                                <b-col>                                    
                                    <img class="img-fluid" src="../static/avenidaShopping.jpg" />
                                </b-col>
                            </b-row>
                        </b-col>

                        <b-col>
                            <b-row class="borda carrossel">
                                <b-col>
                                    <h2>Shopping</h2>
                                    <p>colocar uma descrição da imagem</p>                                    
                                </b-col>
                                <b-col>                                    
                                    <img class="img-fluid" src="../static/atriumShopping.jpg" />
                                </b-col>
                            </b-row>
                        </b-col>

                        
                        <!--div>
                            <p>colocar uma descrição da imagem</p>
                            <img class="img-fluid" src="../static/fortalezaShopping.jpg" />
                        </!--div>
                        <div>
                            <p>colocar uma descrição da imagem</p>
                            <img class="img-fluid" src="../static/xyamiShopping.jpg" />
                        </div>
                        <div-->
                            <!--p>colocar uma descrição da imagem</!--p>
                            <img class="img-fluid" src="../static/atriumShopping.jpg" />
                        </div-->
                        
                        
                        
                        
                    </carousel>

                    
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    import carousel from 'vue-owl-carousel'

    export default {
        name:'MenuCarouselComponent',

        components:{carousel},

        mounted(){
            console.log('Component mounted.')
        }

    }


</script>

<style scoped>

/*#menuCarouselComponent{
    background: ;
}*/

#grad {
  /*background-image: linear-gradient(red, yellow);
  background: linear-gradient(45deg, #004177, #687466, #cd8d78, #fbc490);*/
  background: linear-gradient(45deg, #fff, #fff, #D18E5D, #F90F04);
}

.owl-prev {
   display: none;
}
.disabled {
   display: none !important;
}

.borda{
    border: red solid 1px;
}

/*.carrossel{
    widows: 100%;
    height: 100%;
}*/

.carrossel img{
    widows: 100%;
    height: 200px;
    background: yellow;
}

.carrossel p{
    background: blue;
}

</style>