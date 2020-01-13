import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/error.vue'),
    }
  ]
})
