import { createApp } from 'vue';
import App from './App.vue';

import './assets/css/reset.css';
import router from '@/router/index';
import pinia from '@/store/index';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(pinia);
app.mount('#app');
