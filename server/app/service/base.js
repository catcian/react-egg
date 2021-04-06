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

  async findOne(modelName, filter, option) {
    const { app } = this;
    const result = await app.model[modelName].findOne(filter, option);
    return !result ? {} : result;
  }
}

module.exports = BaseService;
