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
  config.middleware = [ 'interfaceLimit', 'allowHosts', 'httpLog', 'notFound', 'auth', 'interfaceCache' ];

  config.interfaceCache = {
    expire: 60 * 10, // 10 min
    cacheApis: [ '/api/commons/citys', '/api/house/hot' ],
  };

  config.interfaceLimit = {
    maxCount: 5,
    limitTime: 3 * 1000,
  };

  config.allowHosts = [ 'localhost:8000', '127.0.0.1:8000', '8.129.91.9' ];
  // httpLog options
  config.httpLog = {
    type: 'all',
  };

  config.logger = {
    level: 'INFO',
    consoleLevel: 'INFO',
    dir: path.join(appInfo.baseDir, 'logs/prod'),
    encoding: 'utf-8',
    // appLogName: `${appInfo.name}-web.log`,
    // coreLogName: 'egg-web.log',
    // agentLogName: 'egg-agent.log',
    // errorLogName: 'common-error.log',
    outputJSON: false,
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
    exclude: [ '/api/user/login', '/api/user/logout', '/api/user/register', '/api/commons/citys', '/api/house/hot', '/api/house/search', '/api/house/detail' ],
  };

  config.mysql = {
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
    // database configuration
    client: {
    // host
      host: '8.129.91.9',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'abc123456',
      // database
      database: 'egg_house',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    database: 'egg_house',
    host: '8.129.91.9',
    port: '3306',
    user: 'root',
    password: 'abc123456',
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
      host: '8.129.91.9',
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
