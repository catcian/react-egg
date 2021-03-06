'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('./base');
const md5 = require('md5');
class UserController extends BaseController {
  async jwtSign(id, username) {
    const { app } = this;
    // const { username } = ctx.request.body;
    await app.redis.set(username, 1, 'EX', app.config.redisExpire);
    const token = app.jwt.sign({ username, id }, app.config.jwt.secret);
    return token;
  }

  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const user = await ctx.service.user.getUser(params.username);
    if (Object.keys(user).length !== 0) {
      await this.error('用户已存在');
      return;
    }
    const result = await ctx.service.user.addUser({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    console.log('/UserController/register');
    console.log(result);
    if (result) {

      const token = await this.jwtSign(result.id, result.username);
      // ctx.session[params.username] = 1;
      await this.success({
        ...ctx.helper.unPick(result.dataValues, [ 'password' ]),
        createTime: ctx.helper.timestamp(result.createTime),
        token,
      });
    } else {
      await this.error('注册失败');
    }
  }

  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (Object.keys(user).length !== 0) {
      const token = await this.jwtSign(user.id, user.username);
      console.log('login username', user.username);
      // ctx.session[username] = 1;
      console.log('login app.redis.get(username)', await app.redis.get(user.username));
      await this.success({
        ...ctx.helper.unPick(user.dataValues, [ 'password' ]),
        createTime: ctx.helper.timestamp(user.createTime),
        updateTime: ctx.helper.timestamp(user.updateTime),
        token,
      });
    } else {
      await this.error('用户不存在');
    }
  }

  async detail() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    if (user) {
      await this.success({
        ...ctx.helper.unPick(user.dataValues, [ 'password' ]),
        createTime: ctx.helper.timestamp(user.createTime),
        updateTime: ctx.helper.timestamp(user.updateTime),
      });
    } else {
      await this.error('用户不存在');
    }
  }

  async logout() {
    const { ctx, app } = this;
    try {
      const username = ctx.username;
      // ctx.session[username] = null;
      await app.redis.del(username);
      await this.success('ok');
    } catch (error) {
      console.log(error);
      await this.error();
    }
  }

  async edit() {
    const { ctx } = this;
    const result = await ctx.service.user.edit({
      id: ctx.userId,
      avatar: ctx.params('img'),
      sign: ctx.helper.escape(ctx.params('sign')),
      phone: ctx.params('tel'),
      updateTime: ctx.helper.time(),
    });
    if (result) {
      this.success(result);
    } else {
      this.error('修改失败');
    }
  }
}

module.exports = UserController;
