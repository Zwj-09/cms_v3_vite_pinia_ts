import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router';

// 路径和组件之间的映射关系
// const routes: RouteRecordRaw[] = [];

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
      children: [],
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: () => import('@/views/NotFound/NotFound.vue'),
    },
  ],
  history: createWebHashHistory(),
});

const localRoutes: RouteRecordRaw[] = [
  // {
  //   path: '/main/analysis/overview',
  //   name: 'Overview',
  //   component: () => import('@/views/Main/analysis/overview/index.vue'),
  // },
  // {
  //   path: '/main/analysis/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('@/views/Main/analysis/dashboard/index.vue'),
  // },
];

// 路由守卫导航
router.beforeEach((to, from) => {
  const token = localStorage.getItem('token');
  if (to.path !== '/login' && !token) {
    return '/login';
  }
});

export default router;
