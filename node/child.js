console.log('child 进程', process.pid)

// 使用 process.send() 方法发送消息到父进程
process.send('来自 child 消息')

process.on('message', msg => {
  console.log('child 进程接收', msg)
})