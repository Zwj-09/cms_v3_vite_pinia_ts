import request from '@/config/request';
import type { loginType } from '@/types/login/login';

// 登录请求
export const login = (payload: loginType) => {
  return request.post('/login', payload);
};

// 获取当前登录用户信息
export const getCurrentUserInfo = (id: number) => {
  return request.get(`/users/${id}`);
};

// 获取当前登录用户的菜单权限/role/1/menu
export const getCurrentUserMenu = (id: number) => {
  return request.get(`/role/${id}/menu`);
};
