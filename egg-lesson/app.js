'use strict';

const store = {};
module.exports = app => {
  app.sessionStore = {
    async get(key) {
      return store[key];
    },
    async set(key, value, maxAge) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },
  };
  // 在框架和插件中使用中间件
  // app.config.coreMiddleware.push('auth');
};
