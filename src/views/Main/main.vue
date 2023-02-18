<template>
  <div>Main Page</div>
</template>

<script setup lang="ts">
import request from '@/config/request';

request.get('/home/multidata').then((res) => {
  console.log('res', res);
});
</script>

<style lang="scss" scoped></style>
