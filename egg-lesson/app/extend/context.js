'use strict';
const os = require('os');

module.exports = {
  // methods
  params(key) {
    const method = this.method;
    if (method.toUpperCase() === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },

  // info() {
  //   const data = {
  //     memory: os.totalmem() / 1024 / 1024 / 1024 + 'G',
  //     platform: os.platform(),
  //     cpus: os.cpus().length,
  //     url: this.request.url,
  //   };
  //   return data;
  // },
};
