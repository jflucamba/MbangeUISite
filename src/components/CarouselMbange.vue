<template>
    <div class="carousel">
        <slot></slot>

        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>
    </div>
</template>

<script>
export default {
    name:'CarouselMbange',

    props:{
        
    },

    methods:{
        next(){
            this.$emit('next')
        },

        prev(){
            this.$emit('prev')
        }
    }
    
}
</script>

<style scoped>

    .carousel{
        position: relative;
        width: 100%;
        height: 460px;
        overflow: hidden;
    }

    button{
        position: absolute;
        height: 40px;
        width: 50px;
        top: calc(50% - 50px);
        background-color: rgba(0, 0, 0, 0.8);
        border: none;
        color: #fff;
    }

    button:focus, button:hover{
        outline: none;
        cursor: pointer;
    }

    .next{
        right: 0;
    }

</style>