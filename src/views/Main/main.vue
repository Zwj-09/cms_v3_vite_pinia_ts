<template>
  <div class="main">
    <el-container class="container">
      <el-aside :width="isCollapse ? '50px' : '210px'">
        <MainMenu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <head-page @handleChangeCollapse="handleChangeCollapse" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/Menu/menu.vue';
import HeadPage from '@/components/Head/head.vue';
import { ref } from 'vue';

let isCollapse = ref(false);
const handleChangeCollapse = (val: boolean) => {
  isCollapse.value = val;
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
  .el-aside {
    transition: all 0.3s linear;
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    height: 80px;
    background-color: red;
  }
}
</style>
