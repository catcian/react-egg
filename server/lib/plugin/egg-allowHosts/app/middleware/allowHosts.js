'use strict';

module.exports = options => {
  return async (ctx, next) => {

    const { referer } = ctx.request.header;

    if (referer) {
      const url = new URL(referer);
      if (options.includes(url.host)) {
        await next();
      } else {
        ctx.body = {
          status: 404,
          errMsg: `${url.host} permission denied`,
        };
      }
    } else {
      // 浏览器地址栏输入 或 postman
      await next();
    }
  };
};
