import Vue from 'vue'
import Router from 'vue-router'
import Splash from '~/src/components/Splash'
import Home from '~/src/components/Home'
import About from '~/src/components/About'
import Store from '~/src/components/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash,
    },
    {
      path: '/list',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/store/:id',
      name: 'Store',
      component: Store,
    },
  ],
})
