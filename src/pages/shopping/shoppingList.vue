<template>
    <div id="shoppingList">
            
        <section>
            <div v-for="listShopping in listShoppings" :key="listShopping.id">
                <a :href="linkShoppingStore">
                    <img :alt="listShopping.nome" :src="listShopping.imagem">
                </a>
            </div>
            
        </section>
        
    </div>    
</template>

<script>
export default {
    name:'ShoppingList',
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
          linkShoppingStore:'/listShoppingStore'
        }
    }
}
</script>


<style scoped>

#shoppingList{
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

#shoppingList{
    margin-top: 80px;
}

section{
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    flex-wrap: wrap;
    width: 100%;
}

section div{
    width: 25%;
    padding: 0 5px 10px 5px;
}



section div a img{
    width: 100%;
    height: 100%;
}

}

</style>