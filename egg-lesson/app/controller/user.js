'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  // zh
  encode(str = '') {
    return new Buffer(str).toString('base64');
  }

  decode(str = '') {
    return new Buffer(str, 'base64').toString();
  }

  async index() {
    const { ctx } = this;
    // 获取 cookies
    const user = ctx.cookies.get('user');

    // zh
    // ctx.cookies.set('zh', '中文', {
    //   encrypt: true,
    // });
    // const zh = ctx.cookies.get('zh', {
    //   encrypt: true,
    // });
    ctx.cookies.set('zh', this.encode('中文'));
    const zh = this.decode(ctx.cookies.get('zh'));
    const user2 = ctx.session.user;
    const zhs = ctx.session.zh;
    await ctx.render('user.html', {
      id: 100,
      name: 'admin',
      lists: [ 'java', 'php', 'ts' ],
      user: user ? JSON.parse(user) : null,
      zh,
    });
  }

  async lists() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => { resolve(); }, 1500);
    });
    ctx.body = [{ id: 123 }];
  }

  async detail() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(ctx.query.id);
    ctx.body = res;
  }

  async detail2() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = ctx.params.id;
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };
    ctx.validate(rule);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

  async edit() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

  async del() {
    const { ctx } = this;
    ctx.body = ctx.request.body.id;
  }

  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    console.log('user.js login', ctx.request)
    // 设置 cookies
    ctx.cookies.set('user', JSON.stringify(body), {
      // js document.cookie opreate
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    });
    // 设置 session
    ctx.session.user = body;
    ctx.session.zh = 'SESSION 中文';

    ctx.body = {
      status: 200,
      data: body,
    };
  }

  async logout() {
    const { ctx } = this;
    // 清除 cookies
    ctx.cookies.set('user', null);
    // 清除 session
    ctx.session.user = null;
    ctx.session.zh = null;
    ctx.session.test = 'test';
    ctx.body = {
      status: 200,
    };
  }
}

module.exports = UserController;
