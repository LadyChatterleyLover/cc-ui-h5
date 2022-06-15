import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'cc-ui'
      }
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('@/views/icon/index.vue'),
      meta: {
        title: '图标'
      }
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
