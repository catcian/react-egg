'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    const user = ctx.session.user;
    console.log('url', url)
    console.log('user', user);
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
