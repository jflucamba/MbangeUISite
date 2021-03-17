<template>
    <div id="contact">
        <carousel
            @next="next"
            @prev="prev"
        >
            <carousel-slide v-for="(slide, index) in slides" 
                :key="slide" 
                :index="index"
                :visibleSlide = "visibleSlide"
                :direction="direction"
                >
                <img alt="" :src="slide">
            </carousel-slide>            
        </carousel>
    </div>
</template>

<script>
import CarouselSlide from '../components/CarouselSlide'

import Carousel from '../components/Carousel'



export default {
    name:'Contact',
    data(){
        return{
            slides:[
                require('../static/atriumShopping.jpg'),
              require('../static/xyamiShopping.jpg'),
              require('../static/fortalezaShopping.jpg'),
              require('../static/avenidaShopping.jpg')
            ],
            visibleSlide:0,
            direction:'left'
        }
    },
    components:{
        CarouselSlide,
        Carousel
        
    },
    props:{
        
    },

    computed:{
        slidesLen(){
            return this.slides.length;
        }
    },

    methods:{
        next(){
            if(this.visibleSlide >= this.slidesLen - 1){
                this.visibleSlide = 0;
            }else{
                this.visibleSlide++;
            }
            this.direction="left"
        },
        prev(){
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slidesLen - 1;
            }else{
                this.visibleSlide--;
            }
            this.direction="right"
        }
    }
    
    
}
</script>

<style scoped>
    #contact{
        margin-top: 70px;
        margin-left: 150px;
    }
</style>