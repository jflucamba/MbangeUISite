<template>
   <div id="LeisureSpace">
        <b-container id="LeisureSpace-internal" class="bv-example-row">

            <b-row class="pt-2">
              
                <b-col id="capa">

                    <b-row class="mt-5">
                        <b-col>
                            Onde será tua próxima parada!
                        </b-col>
                    </b-row>

                </b-col>


                <b-col id="visao">

                    <b-row class="mt-5">
                        <b-col>
                            <h5>
                                O quê você está procurando!
                            </h5>
                        </b-col>
                    </b-row>

                    <b-row>

                        <b-col>
                            <b-row>
                                <b-col>
                                    <i class="fas fa-hotel"></i>
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
                                    <i class="far fa-warehouse-alt"></i>
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
                                    <i class="far fa-images"></i>
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
                                    <i class="fas fa-laptop-house"></i>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col>
                                    Museus
                                </b-col>
                            </b-row>

                        </b-col>

                    </b-row>

                </b-col>

            </b-row>

            <b-row class="mt-3"> 

              <b-col>
                  <h4>Hotel</h4>

                  <p>
                      If you are going to use a passage of Lorem Ipsum, 
                      you need to be sure there isn't anything embarrassing 
                      hidden in the middle of text.
                  </p>

              </b-col>


              <b-col>
                  <h4>Resourt</h4>

                  <p>
                      If you are going to use a passage of Lorem Ipsum, 
                      you need to be sure there isn't anything embarrassing 
                      hidden in the middle of text.
                  </p>

              </b-col> 


              <b-col >
                  <h4>Paisagens</h4>

                  <p>
                      If you are going to use a passage of Lorem Ipsum, 
                      you need to be sure there isn't anything embarrassing 
                      hidden in the middle of text.
                  </p>

              </b-col> 


              <b-col>
                  <h4>Hospedaria</h4>

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
    data(){
        return {
            imagem_hotel: 'src/static/Resourt-188153847.jpg',
            alt: 'Imagem do hotel.'
        }
    }
}
</script>

<style scoped>
    #LeisureSpace-internal{
        background: #008B8B;
    }

#capa{
    background: blue;
    border-radius: 20px 0 0 10px;
    color: white;
    text-align: center;
    align-items: center;
}

#visao{
    background: white;
    border-radius: 1px 10px 20px 5px;
}

</style>