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
    enable: true,
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
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  notFound: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-notFound'),
  },
  allowHosts: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-allowHosts'),
  },
  interfaceLimit: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-interfaceLimit'),
  },
  interfaceCache: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-interfaceCache'),
  },
};
