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

// 路由守卫导航
router.beforeEach((to, from) => {
  const token = localStorage.getItem('token');
  if (to.path !== '/login' && !token) {
    console.log('error');
    return '/login';
  }
});

export default router;
