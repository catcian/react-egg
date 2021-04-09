'use strict';
const Controller = require('egg').Controller;
const BaseController = require('./base');
const errorData = require('../../mock/citys.json');
const fs = require('fs');
const path = require('path');
const awaitStreamReady = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class CommonsController extends BaseController {
  async citys() {
    const { app } = this;
    const resp = await app.httpclient.curl('https://apis.imooc.com/?icode=89773B5DA84CA283', { dataType: 'json' });
    if (resp.status === 200) {
      if (resp.data && resp.data.code === 200) {
        await this.success(resp.data.data);
      } else {
        await this.success(errorData);
      }
    } else {
      this.error();
    }
  }

  // 上传
  async upload() {
    const { ctx, app } = this;
    // 获取上传文件流
    const stream = await ctx.getFileStream();
    console.log('stream', stream);

    // 基础目录
    const uploadBasicPath = '/app/public/images';

    const dataDir = ctx.helper.time('YYYYMMDD');

    // 上传目录
    const uploadDir = path.join(this.config.baseDir, uploadBasicPath, dataDir);

    console.log('uploadDir', uploadDir);
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    // 上传文件名
    const uploadFilename = ctx.helper.timestamp() + Number.parseInt(Math.random() * 10000) + path.extname(stream.filename);

    // 写入路径
    const target = path.join(uploadDir, uploadFilename);

    const writeStream = fs.createWriteStream(target);

    try {

      await awaitStreamReady(stream.pipe(writeStream));

      // 返回路径
      const imagePath = path.join('/public/images', dataDir, uploadFilename);
      ctx.body = {
        status: 200,
        data: {
          path: imagePath,
        },
      };
    } catch (error) {
      await sendToWormhole(stream);
      ctx.body = {
        status: 500,
        errMsg: '服务器开小差～',
      };
      throw error;
    }


  }
}

module.exports = CommonsController;
