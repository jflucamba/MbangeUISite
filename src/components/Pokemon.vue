<template>
    <div id="pokemon">
        <b-container>
            <b-row>
            <b-col>

              <h1>{{num}}{{name}}</h1>
              <small>{{url}}</small>

            </b-col>
            
        </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name:'Pokemon',

    props:{
        mum:Number,
        name: String,
        url:String
    }
    
}
</script>

<style scoped>

</style>