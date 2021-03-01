<template>
    <div id="shoppingList">
        <b-container>

            <b-row>
                <b-col class="mt-3">
                    <h2>Escolha o shopping de acordo a sua preferência</h2>
                </b-col>
            </b-row>

            <b-row class="imagem-galeria mt-3">
              <b-col >
                <a href="/shoppingStore"><img src="../../static/atriumShopping.jpg"></a>
              </b-col>
              <b-col >
              
                <a href="/shoppingStore"><img src="../../static/avenidaShopping.jpg"></a>
              </b-col>
              <b-col >
              
                <a href="/shoppingStore"><img src="../../static/fortalezaShopping.jpg"></a>
              </b-col>
              <b-col >
              
                <a href="/shoppingStore"><img src="../../static/xyamiShopping.jpg"></a>
              </b-col>
            </b-row>

            <b-row class="imagem-galeria mt-2 mb-3">
              <b-col >
                <a href="/shoppingStore"><img src="../../static/fortalezaShopping.jpg"></a>
              </b-col>
              <b-col >
              
                <a href="/shoppingStore"><img src="../../static/atriumShopping.jpg"></a>
              </b-col>
              <b-col >
              
                <a href="/shoppingStore"><img src="../../static/xyamiShopping.jpg"></a>
              </b-col>
              <b-col >
              
                <a href="/shoppingStore"><img src="../../static/avenidaShopping.jpg"></a>
              </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name:'shoppingList'
    
}
</script>

<style scoped>
.imagem-galeria img{
    width: 100%;
    height: 100%;
}
</style>