import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import Post from '@/views/Post.vue'

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
      path: '/post/:slug',
      name: 'Post',
      component: Post
    }
  ]
})
