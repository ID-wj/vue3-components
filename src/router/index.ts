import { createRouter, createWebHashHistory } from 'vue-router';
import NotFind from '../views/404.vue';
import Page from '../views/page-1.vue';

const routes = [
  { path: '/', component: Page },
  { path: '/:path(.*)', component: NotFind },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
