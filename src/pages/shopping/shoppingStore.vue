<template>
    <div id="shoppingStore">
            
        <section>
            <div v-for="listShopping in listShoppings" :key="listShopping.id">
                <a >
                    <img :alt="listShopping.nome" :src="listShopping.imagem">
                </a>
            </div>
            
        </section>
        
    </div>    
</template>

<script>
export default {
    name:'ShoppingStore',
    data(){
        return{
            listShoppings:[
              {id:1, nome:'Atrium',imagem:require('../../static/atriumShopping.jpg')},
              {id:2, nome:'Xyami',imagem:require('../../static/xyamiShopping.jpg')},
              {id:3, nome:'Fortaleza',imagem:require('../../static/fortalezaShopping.jpg')},
              {id:4, nome:'Avenida',imagem:require('../../static/avenidaShopping.jpg')},
              {id:5, nome:'Atrium',imagem:require('../../static/atriumShopping.jpg')},
              {id:6, nome:'Xyami',imagem:require('../../static/xyamiShopping.jpg')},
              {id:7, nome:'Fortaleza',imagem:require('../../static/fortalezaShopping.jpg')},
              {id:8, nome:'Avenida',imagem:require('../../static/avenidaShopping.jpg')},
              {id:9, nome:'Atrium',imagem:require('../../static/atriumShopping.jpg')},
              {id:10, nome:'Xyami',imagem:require('../../static/xyamiShopping.jpg')},
              {id:11, nome:'Fortaleza',imagem:require('../../static/fortalezaShopping.jpg')},
              {id:12, nome:'Avenida',imagem:require('../../static/avenidaShopping.jpg')}
          ],
          linkStore:'testar aqui'
        }
    }
}
</script>


<style scoped>

#listShoppingStore{
    margin-top: 0px;
}

section{
    display: flex;
    flex-direction: column;
}

section div a img{
    width: 100%;
    
}



@media(min-width: 700px){



}

</style>