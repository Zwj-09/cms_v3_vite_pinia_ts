<template>
  <div class="container">
    <div class="icon" @click="handleCollapse">
      <el-icon>
        <component :is="isCollapse ? 'expand' : 'fold'" />
      </el-icon>
    </div>
    <div class="bread">面包屑</div>

    <el-button @click="loginout">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['handleChangeCollapse']);

let isCollapse = ref(false);
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
  emit('handleChangeCollapse', isCollapse.value);
};

let router = useRouter();
const loginout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
