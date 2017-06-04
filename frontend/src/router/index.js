import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Container
import Full from 'container/Full'

// Views
import Index from 'views/IndexPage'
import Show from 'views/ShowPage'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: Full,
      children: [
        {
          path: '/home',
          name: 'index',
          component: Index
        },
        {
          path: '/showDetail/:id',
          name: 'show',
          component: Show
        }
      ]
    }
  ]
})
