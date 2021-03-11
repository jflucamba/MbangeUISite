import Vue from 'vue'
import App from './App.vue'
import router from './router'



import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

//import {library} from '@fortawesome/fontawesome-svg-core'
//import {faCoffee} from '@fortawesome/free-solid-svg-icons'

//import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//library.add(faCoffee)


//Vue.component('font-awesome-icon', FontAwesomeIcon)


//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
