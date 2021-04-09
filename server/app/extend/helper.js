'use strict';
const dayjs = require('dayjs');

module.exports = {
  // str - base64
  base64Encode(str = '') {
    return new Buffer(str).toString('base64');
  },
  time(format) {
    return format ? dayjs().format(format) : dayjs().format('YYYY-MM-DD HH:mm:ss');
  },
  timestamp(date) {
    return date ? new Date(date).getTime() : new Date().getTime();
  },
  unPick(source, arr) {
    if (Array.isArray(arr)) {
      const obj = {};
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }
  },

};
