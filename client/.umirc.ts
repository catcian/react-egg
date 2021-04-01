import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  proxy:{
    '/api': {
      'target': 'http://127.0.0.1:7001/',
      'changeOrigin': true
    }
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home', title: '首页' },
        { path: '/order', component: '@/pages/order', title: '订单', auth: true },
        { path: '/user', component: '@/pages/user', title: '我的', auth: true },
        { path: '/user/edit', component: '@/pages/user/edit', title: '我的设置' },
        { path: '/search', component: '@/pages/search', title: '搜索' },
        { path: '/observer', component: '@/pages/observer', title: 'observer' },
        { path: '/house', component: '@/pages/house', title: '房屋' },
        { path: '/login', component: '@/pages/login', title: '登陆' },
        { path: '/register', component: '@/pages/register', title: '注册' },
      ]
    }
   
  ],
  fastRefresh: {},
});
