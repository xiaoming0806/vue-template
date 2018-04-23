// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
/* eslint-disable no-unused-vars */
import axios from 'axios'
import Vuex from 'vuex'
import App from './app'

import createRouter from './router/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios

const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/')
  } else {
    next()
  }
})

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
