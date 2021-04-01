'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    console.log('ctx.username', ctx.username);
    const user = ctx.session[ctx.username];
    // session 中是否存在
    console.log('ctx.session[ctx.username]', user);
    if (!user && !options.exclude.includes(url.split('?')[0])) {
      ctx.body = {
        status: 10001,
        errMsg: '用户未登陆',
      };
    } else {
      await next();
    }
  };
};
