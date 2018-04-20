import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/'
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    fallback: true
  })
}
