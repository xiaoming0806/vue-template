// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
import $ from 'jquery'
import App from './app'
import './../node_modules/element-ui/lib/theme-chalk/index.css'

import createRouter from './router/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueCookie)
Vue.prototype.$http = axios

const router = createRouter()
const store = createStore()

// router.beforeEach((to, from, next) => {
//     if(to.meta.requireAuth){
//         if(VueCookie.get('logId')){
//             next()
//         }else{
//             next({
//                 path : '/login'
//             })
//         }
//     }else {
//         next()
//     }
// })

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
