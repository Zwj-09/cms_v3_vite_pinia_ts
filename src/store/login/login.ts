import { defineStore } from 'pinia';
import {
  getCurrentUserInfo,
  login,
  getCurrentUserMenu,
} from '@/api/login/login';
import type { loginType } from '@/types/login/login';
import router from '@/router';

const TOKEN: string = 'token';

// 指定 state 箭头函数 返回值类型
interface LoginState {
  token: string;
  /**
   *  服务器返回数据 大概有 data{ id:1,name:"zwj", score:100,....}
   *  对于服务器返回的较为复杂的数据类型
   *    建议直接写成 any
   *    或者直接网上找工具 直接将JSON类型转换为 TypeScript 类型
   *    `https://transform.tools/json-to-typescript`
   */
  userInfo: any;
  menuList: any[];
}

const useLogin = defineStore('login', {
  state: (): LoginState => {
    return {
      token: localStorage.getItem(TOKEN) ?? '',
      userInfo: {},
      menuList: [],
    };
  },
  actions: {
    // 登录网络请求
    async setLoginAction(payload: loginType) {
      const res = await login(payload);

      // pinia 存储 token
      this.token = res.data.token;

      // 本地缓存 token localStorage、sessionStorage
      localStorage.setItem(TOKEN, res.data.token);

      // 获取登录用户详细信息
      const userInfo = await getCurrentUserInfo(res.data.id);
      this.userInfo = userInfo.data;

      // 根据角色 ID 获取权限菜单
      const menuList = await getCurrentUserMenu(this.userInfo.role.id);
      this.menuList = menuList.data;

      // 页面跳转
      router.push('/main');
    },
  },
});

export default useLogin;
