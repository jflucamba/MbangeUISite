<template>
   <div id="LeisureSpace">
        <b-container id="LeisureSpace-internal" class="bv-example-row">

            <b-row class="pt-2">
              <b-col>
                <b-img thumbnail fluid :src="require ('../static/hospedaria_capa.jpg')" alt="Image 3"></b-img>
              </b-col>
              <b-col>
                <b-img thumbnail fluid :src="require ('../static/Resourt-188153847.jpg')" alt="Image 2"></b-img>
              </b-col>
              <b-col>
                <b-img thumbnail fluid :src="require ('../static/paisagem_capa.jpg')" alt="Image 3 alterar"></b-img>
              </b-col>

              <b-col>
                <b-img thumbnail fluid :src="require ('../static/hospedaria_capa.jpg')" alt="Image 3"></b-img>
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
</style>