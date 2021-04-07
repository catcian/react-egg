'use strict';

/** 超过3秒最多3次请求
 * 计数器，每次请求加1
 * 超过3秒
 * 没超过3秒
 */

module.exports = options => {
  let count = 0;
  let firstTime = new Date().getTime();
  // console.log(options);
  return async (ctx, next) => {

    if (new Date().getTime() - firstTime >= options.limitTime) {
      if (count > options.maxCount) {
        count = 0;
        firstTime = new Date().getTime();
        ctx.body = {
          status: 404,
          errMsg: '请求频繁，稍后再试。',
        };
      } else {
        count = 0;
        firstTime = new Date().getTime();
        await next();
      }
    } else {
      count++;
      await next();

    }
  };
};
