'use strict';
const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  auth: {
    enable: false,
    path: path.join(__dirname, '../lib/plugin/egg-auth'),
  },
  info: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-info'),
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
