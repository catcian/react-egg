'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const lists = ctx.app.router.stack.filter(item => item.regexp.test(ctx.request.url));
    if (lists.length) {
      await next();
    } else {
      ctx.body = {
        status: 404,
        errMsg: ctx.request.url + ' not found',
      };
    }
  };
};
