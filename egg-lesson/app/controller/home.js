'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(ctx.request.query.id);
    console.log('home.js index', res)
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}

module.exports = HomeController;
