import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
    },
    {
      path: '/coaching',
      name: 'coaching',
      component: () => import('../components/Coaching.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Contact.vue'),
    },
  ],
})

export default router
