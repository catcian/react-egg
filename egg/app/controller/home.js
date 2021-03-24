'use strict';

const Controller = require('egg').Controller;
const info = require('../utils/info');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    // console.log(info())
    console.log(ctx.info);

  }
  async demo() {
    const { ctx } = this;
    ctx.body = 'hi CatCian';
    console.log(ctx.info);

  }
}

module.exports = HomeController;
