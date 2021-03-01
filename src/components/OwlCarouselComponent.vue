<template>
    <div id="owlCarouselComponent">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <carousel  :loop="true" :autoplay="true">
                        <img class="img-fluid" src="../static/avenidaShopping.jpg" />
                        <img class="img-fluid" src="../static/fortalezaShopping.jpg" />
                        <img class="img-fluid" src="../static/xyamiShopping.jpg" />
                        <img class="img-fluid" src="../static/atriumShopping.jpg" />
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import carousel from 'vue-owl-carousel'

    export default {
        name:'owlCarouselComponent',

        components:{carousel},

        mounted(){
            console.log('Component mounted.')
        }

    }


</script>

<style scoped>

.owl-prev {
   display: none;
}
.disabled {
   display: none !important;
}

</style>