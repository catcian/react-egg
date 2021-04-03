'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const lists = ctx.app.router.stack.filter(item => item.regexp.test(ctx.request.url));
    if (lists.length) {
      await next();
    } else {
      ctx.body = {
        status: 404,
        errMsg: '接口' + ctx.request.url + '不存在',
      };
    }
  };
};
