import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Game from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/about',
      name: 'about',
    }
  ]
})
