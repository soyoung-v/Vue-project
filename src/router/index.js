import { createRouter, createWebHistory } from 'vue-router'
import { globalState } from '@/globalState';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: globalState.map(item => {
      const filePath = `../views${item.startsWith('mission') ? '/mission' : ''}/${item}.vue`;
      console.log(filePath);
      return {
        path: `/${item}`,
        component: () => import(filePath)
      }
  })
  
 
  
  //   [
  //   {
  //     path: '/component',
  //     component: () => import('@/views/component.vue')
  //   },
  //   {
  //     path: '/page98',
  //     component: () => import('@/views/page98.vue')
  //   },
  //       {
  //     path: '/page103',
  //     component: () => import('@/views/page103.vue')
  //   },
  //   {
  //     path: '/mission01',
  //     component: () => import('@/views/mission/mission01.vue')
  //   },
  //   {
  //     path: '/page108',
  //     component: () => import('@/views/page108.vue')
  //   },
  //   {
  //     path: '/page110',
  //     component: () => import('@/views/page110.vue')
  //   },
  //   {
  //     path: '/page114',
  //     component: () => import('@/views/page114.vue')
  //   },
  //   {
  //     path: '/page118',
  //     component: () => import('@/views/page118.vue')
  //   },
  //   {
  //     path: '/page123',
  //     component: () => import('@/views/page123.vue')
  //   },
  //   {
  //     path: '/page125',
  //     component: () => import('@/views/page125.vue')
  //   },
  //   {
  //     path: '/page126',
  //     component: () => import('@/views/page126.vue')
  //   }
  // ],
})

export default router
