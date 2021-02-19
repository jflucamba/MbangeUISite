<template>
    <b-container>
        <b-row>
            <b-col>
                <div>
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators
    img-width="1024"
    img-height="200"
  >
    <b-carousel-slide class="image-carrossel "  id="carrossel-1" >
        <b-row>
            <b-col class="carrossel-master">
                <div class="titulo-carrossel">
                    <h2 >Shopping Xyami</h2>
                    </div>
                    <hr>
                    <div class="descricao-carrossel">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book.
                        </p>
                    </div>
                <!--b-row>
                    <div class="titulo-carrossel">
                    <h2 >Shopping Xyami</h2>
                    </div>
                    <hr>
                    <div class="descricao-carrossel">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book.
                        </p>
                    </div>
                </b-row-->
                
            </b-col>
            <b-col class="imagem-carrossel">
                <img right :src="require('../static/hospedaria_capa.jpg')" alt="Right image">
                <!--b-row>
                    <b-col>
                        <img right :src="require('../static/hospedaria_capa.jpg')" alt="Right image">
                    </b-col>
                </b-row-->
            </b-col>
        </b-row>
    </b-carousel-slide>
    <b-carousel-slide
    class="image-carrossel"
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
    class="image-carrossel"
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
    <b-carousel-slide
    class="image-carrossel"
      caption="Fourth Slide"
      img-src="https://picsum.photos/1024/480/?image=23"
    ></b-carousel-slide>
  </b-carousel>
</div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'CarouselComponent'
    
}
</script>

<style scoped>
.image-carrossel {
  width: 100%;
  height: 400px;
}

#carrossel-1{
    background: red;



}

/*.titulo-carrossel{
    margin-top: -2px;
}*/


.carrossel-master{
    text-align: justify;
    justify-self: start;
    float: left;
    width: 50%;
    
}

.descricao-carrossel{
    margin-top: 100px;
}

.imagem-carrossel {
    
    float: right;
    margin-right: 30px;
    border: springgreen solid 2px;
}

.imagem-carrossel img{
    width: 100%;
    height: 100%;
}

hr{
    background: yellow;
}

</style>