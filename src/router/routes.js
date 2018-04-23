export default [
  {
    path: '*',
    component: () => import('../views/error/404.vue')
  },
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
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }
]
