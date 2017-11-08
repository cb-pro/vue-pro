import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import About from '@/views/About'
import Portfolio from '@/views/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
