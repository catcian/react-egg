'use strict';

module.exports = {
  // methods
  params(key) {
    const method = this.method;
    if (method.toUpperCase() === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },
};
