'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(ctx.request.query.id);
    console.log('home.js index', res);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async newApplication() {
    const { ctx, app } = this;
    // const pack = app.getPackage('scripts');
    const pack = app.allPackage;
    // ctx.body = 'newApplication';
    ctx.body = pack;
  }

  async newContext() {
    const { ctx } = this;
    const params = ctx.params();
    ctx.body = params;
  }

  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = token;
  }

  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'newResponse';
    const base64Parse = ctx.helper.base64Encode('newResponse');
    // ctx.body = ctx.response;
    ctx.body = base64Parse;
  }
}

module.exports = HomeController;
