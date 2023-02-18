import { createRouter, createWebHashHistory } from 'vue-router';

// 路径和组件之间的映射关系
// const routes: any = [];

const router = createRouter({
  // 路径和组件之间的映射关系
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/login.vue'),
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/Main/main.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: () => import('@/views/NotFound/NotFound.vue'),
    },
  ],
  history: createWebHashHistory(),
});

export default router;
