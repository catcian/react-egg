'use strict';

module.exports = app => {
  console.log('app init');
  app.messenger.on('agentAction', data => {
    console.log('app callback', data);
  });
};
