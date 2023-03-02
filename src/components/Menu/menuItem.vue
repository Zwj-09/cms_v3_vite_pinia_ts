<template>
  <div v-for="menu in props.menuList" :key="menu.id">
    <el-sub-menu
      v-if="menu && menu.children && menu.children.length"
      :index="menu.url"
    >
      <template #title>
        <el-icon>
          <component :is="menu.icon ? menu.icon.split('-icon-')[1] : ''" />
        </el-icon>
        <span>{{ menu.name }}</span>
      </template>

      <menu-item :menuList="menu.children" />
    </el-sub-menu>

    <el-menu-item :index="menu.url" v-else>
      <span>{{ menu.name }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'menuItem',
});
</script>

<script setup lang="ts">
const props = defineProps(['menuList']);
</script>

<style scoped></style>
