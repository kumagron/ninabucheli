import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Coaching from '@/components/Coaching'
import About from '@/components/About'
import Contact from '@/components/Contact'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/coaching',
      name: 'Coaching',
      component: Coaching
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})