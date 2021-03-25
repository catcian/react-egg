/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616568946375_6539';

  // add your middleware config here
  config.middleware = [ 'httpLog' ];

  // httpLog options
  config.httpLog = {
    type: 'all',
  };

  // 框架的安全插件是默认开启的，关闭安全防范
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      '.ejs': 'ejs',
      '.html': 'ejs',
    },
    // root: path.join(appInfo.baseDir, 'app/view'),
    root: [ path.join(appInfo.baseDir, 'app/view'),
      path.join(appInfo.baseDir, 'app/html'),
    ].join(','),
  };

  config.ejs = {
    // 全局修改分割符
    delimiter: '%',
  };

  config.static = {
    prefix: '/assets/',
    dir: path.join(appInfo.baseDir, 'app/assets'),
  };

  config.session = {
    key: 'CAT_SESS',
    httpOnly: false,
    maxAge: 3 * 1000,
    renew: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
