<template>
  <div class="main">
    <el-container class="container">
      <el-aside width="240px">
        <MainMenu />
      </el-aside>
      <el-container>
        <el-header>
          <el-button @click="loginout">退出登录</el-button>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import MainMenu from '@/components/Menu/menu.vue';
let router = useRouter();
const loginout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .container {
    height: 100%;
  }
  .el-main,
  .el-aside,
  .el-header {
    padding: 0;
    margin: 0;
  }
}
</style>
