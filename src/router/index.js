import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },

  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'form',
      component: () => import('../pages/Form.vue')
    },
    {
        path: '/preview',
        name: 'preview',
        component: () => import('../pages/Preview.vue')
      }
  ]
})

export default router
