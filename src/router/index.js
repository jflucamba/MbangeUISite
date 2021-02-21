import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Contact from '../views/contact.vue'
import Plan from '../views/plan.vue'
import LeisureSpace from '../views/leisureSpace.vue'
import Shopping from '../views/shopping.vue'
import ShoppingCounty from '../views/shoppingCounty.vue'
import Loja from '../views/loja.vue'
import Delivery from '../views/deliveryService/delivery.vue'
import Store from '../views/store.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/plan',
    name: 'plan',
    component: Plan
  },
  {
    path: '/leisureSpace',
    name: 'leisureSpace',
    component: LeisureSpace
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: Shopping
  },
  {
    path:'/shoppingCounty',
    name:'shoppingCounty',
    component: ShoppingCounty
  },
  {
    path:'/loja',
    name:'loja',
    component: Loja
  },
  {
    path:'/delivery',
    name:'delivery',
    component: Delivery
  },
  {
    path:'/store',
    name:'store',
    component:Store
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router