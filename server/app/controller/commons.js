'use strict';
const Controller = require('egg').Controller;
const BaseController = require('./base');
const errorData = require('../../mock/citys.json');

class CommonsController extends BaseController {
  async citys() {
    const { app } = this;
    const resp = await app.httpclient.curl('https://apis.imooc.com/?icode=89773B5DA84CA283', { dataType: 'json' });
    if (resp.status === 200) {
      if (resp.data && resp.data.code === 200) {
        await this.success(resp.data.data);
      } else {
        console.log(errorData);
        await this.success(errorData);
      }
    } else {
      this.error();
    }
  }
}

module.exports = CommonsController;
