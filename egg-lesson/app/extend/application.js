'use strict';
const path = require('path');

module.exports = {
  // methods
  getPackage(key) {
    const pack = getPack();
    return key ? pack[key] : pack;
  },
  // property
  get allPackage() {
    return getPack();
  },
};

function getPack() {
  const filePath = path.join(process.cwd(), '/package.json');
  const pack = require(filePath);
  return pack;
}
