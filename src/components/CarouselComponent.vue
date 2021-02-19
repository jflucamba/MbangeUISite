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
    <b-carousel-slide class="image-carrossel" caption="First slide" img-src="https://picsum.photos/1024/480/?image=10">
        <b-row>
            <b-col>
            descrição do elemento: kakakakakakak
        </b-col>
        <b-col>
            Imagem do mesmo deve ser ilustrativa
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
</style>