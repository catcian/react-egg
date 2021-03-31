'use strict';

module.exports = {
  // str - base64
  base64Encode(str = '') {
    return new Buffer(str).toString('base64');
  },
};
