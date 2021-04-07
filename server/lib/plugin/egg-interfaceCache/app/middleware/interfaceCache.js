'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const { url } = ctx.request;
    if (options.cacheApis.includes(url)) {
      const cache = await ctx.app.redis.get(url);
      if (cache) {
        ctx.body = JSON.parse(cache);
      } else {
        await next();
        await ctx.app.redis.set(url, JSON.stringify(ctx.response.body), 'EX', options.expire);
      }
    } else {
      await next();
    }
  };
};
