import Vue from 'vue'
import VueRouter from 'vue-router'

//importando as rotas

import Index from '../pages/index.vue'
import Province from '../pages/province.vue'
import County from '../pages/county.vue'


// ROTAS DA PASTA SHOPPING

import ShoppingList from '../pages/shopping/shoppingList.vue'
import ShoppingStore from '../pages/shopping/shoppingStore.vue'
import ListShoppingStore from '../pages/shopping/listShoppingStore.vue'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'index',
        component:Index
    },
    {
        path:'/province',
        name:'province',
        component:Province
    },
    {
        path:'/county',
        name:'county',
        component:County
    },
    {
        path:'/shoppingList',
        name:'shoppingList',
        component: ShoppingList
    },
    {
        path:'/listShoppingStore',
        name:'listShoppingStore',
        component:ListShoppingStore
    },
    {
        path:'/shoppingStore',
        name:'shoppingStore',
        component:ShoppingStore
    }
]


const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router