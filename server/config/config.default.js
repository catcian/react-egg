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
  config.middleware = [ 'httpLog', 'notFound', 'auth' ];

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

  // config.static = {
  //   prefix: '/assets/',
  //   dir: path.join(appInfo.baseDir, 'app/assets'),
  // };

  config.static = {};

  config.session = {
    key: 'CAT_SESS',
    httpOnly: false,
    // maxAge: 1000 * 60 * 10,
    maxAge: 1000 * 3,
    renew: true,
  };

  config.auth = {
    exclude: [ '/api/user/login', '/api/user/logout' ],
  };

  config.mysql = {
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
    // database configuration
    client: {
    // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      passward: '',
      // database
      database: 'egg_house',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'egg_house',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };

  config.jwt = {
    secret: 'cat',
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'abc123456',
      db: 0,
    },
  };
  // add your user config here
  const userConfig = {
    salt: 'egg',
    redisExpire: 60 * 10,
  };

  return {
    ...config,
    ...userConfig,
  };
};
