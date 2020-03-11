import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/punch',
      name: 'punch',
      component: () => import('../pages/punch.vue')
    },
    {
      path: '/my-info',
      name: 'my-info',
      component: () => import('../pages/my-info.vue')
    },
    {
      path: '/my-mission',
      name: 'my-mission',
      component: () => import('../pages/my-mission.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../pages/settings.vue')
    }
  ]
})
