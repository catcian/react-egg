'use strict';
const Subscription = require('egg').Subscription;

class getInfo extends Subscription {
  static get schedule() {
    return {
      cron: '*/3 * * * * *',
      type: 'worker',
    };
  }

  async subscribe() {
    const info = this.ctx.info;
    // console.log(Date.now(), info);
  }

}

module.exports = getInfo;
