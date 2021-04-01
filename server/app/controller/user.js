'use strict';
const Controller = require('egg').Controller;
const md5 = require('md5');

class UserController extends Controller {
  async jwtSign() {
    const { ctx, app } = this;
    const { username } = ctx.request.body;
    const token = app.jwt.sign({ username }, app.config.jwt.secret);
    return token;
  }

  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
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
    if (result) {
      const token = await this.jwtSign();
      ctx.session[params.username] = 1;
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(result.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(result.createTime),
          updateTime: ctx.helper.timestamp(result.updateTime),
          token,
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册用户失败',
      };
    }
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      const token = await this.jwtSign();
      ctx.session[username] = 1;
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(user.createTime),
          updateTime: ctx.helper.timestamp(user.updateTime),
          token,
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '用户不存在',
      };
    }
  }

  async detail() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username());
    if (user) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, [ 'password' ]),
          createTime: ctx.helper.timestamp(user.createTime),
          updateTime: ctx.helper.timestamp(user.updateTime),
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '用户不存在',
      };
    }
  }

  async logout() {
    const { ctx } = this;
    try {
      const username = ctx.username();
      ctx.session[username] = null;
      ctx.body = {
        status: 200,
        data: 'ok',
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        status: 500,
        errMsg: '服务器开小差~',
      };
    }
  }
}

module.exports = UserController;
