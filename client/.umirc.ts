import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home', title: '首页' },
        { path: '/order', component: '@/pages/order', title: '订单' },
        { path: '/user', component: '@/pages/user', title: '我的' },
        { path: '/search', component: '@/pages/search', title: '搜索' },
        { path: '/observer', component: '@/pages/observer', title: 'observer' },
        { path: '/house', component: '@/pages/house', title: '房屋' },
      ]
    }
   
  ],
  fastRefresh: {},
});
