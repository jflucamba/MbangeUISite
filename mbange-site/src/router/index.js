import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Plan from '../views/Plan.vue'
import LeisureSpace from '../views/LeisureSpace.vue'
import Shopping from '../views/Shopping.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router