'use strict';
const Controller = require('egg').Controller;
const md5 = require('md5');

class UserController extends Controller {
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    console.log(params);
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      ctx.body = {
        status: 500,
        errMsg: '用户已存在',
      };
      return;
    }
    const result = await ctx.service.user.addUser({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    console.log(result);
    if (result) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(result.dataValues, ['password']),
          createTime: ctx.helper.timestamp(result.createTime),
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册用户失败',
      };
    }
  }
}

module.exports = UserController;
