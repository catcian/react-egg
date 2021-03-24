'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(ctx.request.query.id);
    ctx.body = res;
  }
}

module.exports = HomeController;
