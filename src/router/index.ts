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
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/views/loading/index.vue'),
      meta: {
        title: '加载'
      }
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/button/index.vue'),
      meta: {
        title: '按钮'
      }
    },
    {
      path: '/overlay',
      name: 'overlay',
      component: () => import('@/views/overlay/index.vue'),
      meta: {
        title: '遮罩层'
      }
    },
    {
      path: '/popup',
      name: 'popup',
      component: () => import('@/views/popup/index.vue'),
      meta: {
        title: '弹出层'
      }
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
