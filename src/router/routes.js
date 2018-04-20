export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index/:id',
    component: () => import('../views/index/index.vue'),
    name: 'index',
    meta: {
      title: 'this is index',
      description: 'asdasd'
    },
    beforeEnter (to, from, next) {
      console.log('111111111')
      next()
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
