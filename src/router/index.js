import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/views/success.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/error.vue'),
    }
  ]
})
