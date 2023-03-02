// 把菜单权限 映射成 路由
import type { RouteRecordRaw } from 'vue-router';
export function menuToRoutes(menuList: any[]) {
  // 动态获取所有的路由对象( 此时自己配置的 所有路由对象都是放在单独的文件内 )
  const localRoutes: RouteRecordRaw[] = [];

  const files: Record<string, any> = import.meta.glob(
    // 此时获取到的是个key、value( 函数 方便懒加载 )
    '../router/Main/**/*.ts',
    {
      eager: true, // 立刻获取到所有的文件结果
    },
  );

  for (const file in files) {
    const fileModul = files[file];
    localRoutes.push(fileModul.default);
  }

  const routes: RouteRecordRaw[] = [];

  // 需要考虑多层 ( 递归 ) 目前是只考虑了两层
  for (const menu of menuList) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path == submenu.url);
      if (route) {
        routes.push(route);
      }
    }
  }

  return routes;
}
