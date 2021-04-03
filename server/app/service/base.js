'use strict';
const Service = require('egg').Service;

class BaseService extends Service {
  run(callback) {
    try {
      const { ctx, app } = this;
      if (callback) {
        return callback(ctx, app);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = BaseService;
