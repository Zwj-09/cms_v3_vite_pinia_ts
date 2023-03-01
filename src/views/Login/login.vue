<template>
  <div class="login">
    <el-form
      class="form"
      ref="formRef"
      :rules="loginInfoRules"
      :model="loginInfo"
    >
      <el-form-item prop="name">
        <el-input v-model="loginInfo.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginInfo.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/login/login';
import useLogin from '@/store/login/login';
import { ref, reactive } from 'vue';
let useLoginStore = useLogin();

let loginInfo = reactive({
  name: 'coderwhy',
  password: '123456',
});

const loginInfoRules = reactive({
  name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

let formRef = ref();
let submit = () => {
  formRef.value.validate((valid: boolean) => {
    if (valid) {
      useLoginStore.setLoginAction(loginInfo);
    }
  });
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: greenyellow;
  background: url('@/assets/images/login_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .form {
    width: 600px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);
    padding: 30px;
    box-sizing: border-box;
  }
}
</style>
