'use strict';
const dayjs = require('dayjs');
const fs = require('fs');

module.exports = options => {
  return async (ctx, next) => {
    const sTime = Date.now();
    const startTime = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const req = ctx.request;
    await next();
    const logData = {
      method: req.method,
      url: req.url,
      data: req.method.toUpperCase === 'GET' ? req.query : req.body,
      startTime,
      endTime: dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      timeLength: (Date.now() - sTime) + 'ms',
    };
    const data = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss') + ' [httpLog] ' + JSON.stringify(logData) + '\r\n';
    fs.appendFileSync(ctx.app.baseDir + `/logs/${ctx.app.config.env}/httpLog.log`, data);
  };
};
