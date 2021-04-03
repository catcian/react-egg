'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(data) {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data,
    };
  }

  async error(errMsg = '服务器开小差~', statusCode = 500) {
    const { ctx } = this;
    ctx.body = {
      status: statusCode,
      errMsg,
    };
  }
}

module.exports = BaseController;
