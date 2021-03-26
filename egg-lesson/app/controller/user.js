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
    const userSession = ctx.session.user;
    // console.log('userSession', userSession);
    const zhSession = ctx.session.zh;
    // console.log('zhSession', zhSession);
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
    // const res = await ctx.service.user.lists();
    const res = await ctx.model.User.findAll();
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async detail() {
    const { ctx } = this;
    // const res = await ctx.service.user.detail2(ctx.query.id);
    // const res = await ctx.model.User.findAll({
    //   id: ctx.query.id,
    // });
    const res = await ctx.model.User.findByPk(ctx.query.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async detail2() {
    const { ctx } = this;
    const res = await ctx.service.user.detail2(ctx.params.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    // const rule = {
    //   name: { type: 'string' },
    //   age: { type: 'number' },
    // };
    // ctx.validate(rule);
    // const res = await ctx.service.user.add(ctx.request.body);
    const res = await ctx.model.User.create(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async edit() {
    const { ctx } = this;
    // const res = await ctx.service.user.edit(ctx.request.body);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: 'id不存在',
      };
      return;
    }
    const res = user.update(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async del() {
    const { ctx } = this;
    // const res = await ctx.service.user.del(ctx.request.body.id);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        status: 404,
        errMsg: 'id不存在',
      };
      return;
    }
    const res = user.destroy(ctx.request.body.id);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    console.log('user.js login', ctx.request.body);
    // 设置 cookies
    ctx.cookies.set('user', JSON.stringify(body), {
      // js document.cookie opreate
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    });
    // 设置 session
    ctx.session.user = body;
    ctx.session.zh = 'zh 中文';
    ctx.session.test = 'test';
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
    ctx.session.test = null;
    ctx.body = {
      status: 200,
    };
  }
}

module.exports = UserController;
