import { createApp } from 'vue';
import App from './App.vue';

import '@/assets/css/reset.css';
import 'normalize.css';

import router from '@/router/index';
import pinia from '@/store/index';

import './assets/main.css';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
