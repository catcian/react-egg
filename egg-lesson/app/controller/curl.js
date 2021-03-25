'use strict';

const Controller = require('egg').Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx } = this;
    const res = await ctx.curl('http://localhost:7001/', {
      dataType: 'json',
    });
    ctx.body = res.data;
  }

  async curlPost() {
    const { ctx } = this;
    console.log('ctx request body', ctx.request.body);
    const res = await ctx.curl('http://localhost:7001/login', {
      method: 'POST',
      dataType: 'json',
      contentType: 'appliation/json',
      data: ctx.request.body,
    });
    ctx.body = res.data;
  }
}

module.exports = CurlController;
