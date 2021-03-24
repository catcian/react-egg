const childProcess = require('child_process')
const child = childProcess.fork('./child.js')

console.log('master进程', process.pid)

child.on('message', msg => {
  console.log('master进程接收', msg)
})

child.send('master 进程发送消息')