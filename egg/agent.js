'use strict';

module.exports = agent => {
  // 通过 messenger 对象发送消息给 App Worker
  agent.messenger.on('egg-ready', () => {
    const data = { info: 'agent info message' };
    agent.messenger.sendToApp('agentAction', data);
  });

};
