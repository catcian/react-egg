'use strict';

module.exports = {
  // property
  get token() {
    const token = this.header.token;
    return this.get('token');
  },
};
